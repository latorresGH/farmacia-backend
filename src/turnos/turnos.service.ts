import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import { EstadoTurno } from '@prisma/client';
import { TurnosGateway } from './turnos.gateway';

@Injectable()
export class TurnosService {
  constructor(private prisma: PrismaService, private gateway: TurnosGateway,) {}

  async crearTurno(
    farmaciaId: number,
    tipoTurnoId: number,
    idempotencyKey: string,
  ) {
    if (!farmaciaId || !tipoTurnoId) {
      throw new BadRequestException(
        'ID de farmacia y/o tipo de turno no proporcionados',
      );
    }
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const turno = await this.prisma.$transaction(async (tx) => {
      // 1️⃣ buscar key
    const existingKey = await tx.idempotencyKey.findUnique({
      where: {
        key_farmaciaId: {
          key: idempotencyKey,
          farmaciaId,
        },
      },
      include: { turno: true },
    });

      if (existingKey) {
        return existingKey.turno;
      }

      // 2️⃣ crear key VACÍA (lock lógico)
      const key = await tx.idempotencyKey.create({
        data: {
          key: idempotencyKey,
          farmaciaId,
        },
      });

      // 3️⃣ contador
      let contador = await tx.contadorTurno.findFirst({
        where: { farmaciaId, tipoTurnoId, fecha: hoy },
      });

      if (!contador) {
        contador = await tx.contadorTurno.create({
          data: {
            farmaciaId,
            tipoTurnoId,
            fecha: hoy,
            ultimoNumero: 0,
          },
        });
      }

      const nuevoNumero = contador.ultimoNumero + 1;

      await tx.contadorTurno.update({
        where: { id: contador.id },
        data: { ultimoNumero: nuevoNumero },
      });

      const tipo = await tx.tipoTurno.findUnique({
        where: { id: tipoTurnoId },
      });

      if (!tipo) {
        throw new NotFoundException('Tipo de turno no encontrado');
      }

      const codigo = `${tipo.prefijo}${String(nuevoNumero).padStart(3, '0')}`;

      const turno = await tx.turno.create({
        data: {
          numero: nuevoNumero,
          codigo,
          farmaciaId,
          tipoTurnoId,
        },
      });

      // 4️⃣ asociar resultado a la key
      await tx.idempotencyKey.update({
        where: { id: key.id },
        data: { turnoId: turno.id },
      });

      // 🔥 emitir fuera de la transacción
      
      return turno;
    });

    this.gateway.emitirTurnoCreado(turno);
    return turno;
  }

  async obtenerTurnos(farmaciaId: number, estado?: EstadoTurno) {
    return this.prisma.turno.findMany({
      where: {
        farmaciaId,
        estado,
      },
      include: {
        tipoTurno: true,
      },
      orderBy: {
        horaCreacion: 'desc',
      },
    });
  }

  async listarTurnosHoy(farmaciaId: number) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    return this.prisma.turno.findMany({
      where: {
        farmaciaId,
        horaCreacion: {
          gte: hoy,
        },
      },
      orderBy: {
        numero: 'asc',
      },
    });
  }

  async llamarTurno(turnoId: number, farmaciaId: number) {
  const turno = await this.prisma.turno.findFirst({
    where: {
      id: turnoId,
      farmaciaId,
    },
  });

  if (!turno) {
    throw new NotFoundException('Turno no encontrado');
  }

      const updated = await this.prisma.turno.update({
      where: { id: turnoId },
      data: {
        estado: EstadoTurno.LLAMADO,
        horaLlamado: new Date(),
      },
    });

    this.gateway.emitirTurnoLlamado(updated);

    return updated;
}

  async finalizarTurno(turnoId: number, farmaciaId: number) {
  const turno = await this.prisma.turno.findFirst({
    where: { id: turnoId, farmaciaId },
  });

  if (!turno) {
    throw new NotFoundException('Turno no encontrado');
  }

  const updated = await this.prisma.turno.update({
    where: { id: turnoId },
    data: { estado: EstadoTurno.ATENDIDO },
  });

  this.gateway.emitirTurnoFinalizado(updated);

  return updated;
  }

  async cancelarTurno(turnoId: number, farmaciaId: number) {
const turno = await this.prisma.turno.findFirst({
  where: { id: turnoId, farmaciaId },
});

if (!turno) {
  throw new NotFoundException('Turno no encontrado');
}

const updated = await this.prisma.turno.update({
  where: { id: turnoId },
  data: { estado: EstadoTurno.CANCELADO },
});

this.gateway.emitirTurnoCancelado(updated);

return updated;
  }

  async turnoActual(farmaciaId: number) {
    return this.prisma.turno.findFirst({
      where: {
        farmaciaId,
        estado: EstadoTurno.LLAMADO,
      },
      orderBy: {
        horaLlamado: 'desc',
      },
    });
  }

async llamarSiguiente(farmaciaId: number, tipoTurnoId?: number) {
  const resultado = await this.prisma.$transaction(async (tx) => {

    const turno = await tx.turno.findFirst({
      where: {
        farmaciaId,
        estado: EstadoTurno.PENDIENTE,
        ...(tipoTurnoId && { tipoTurnoId }),
      },
      orderBy: {
        numero: 'asc',
      },
    });

    if (!turno) {
      throw new NotFoundException('No hay turnos pendientes');
    }

    const updated = await tx.turno.updateMany({
      where: {
        id: turno.id,
        estado: EstadoTurno.PENDIENTE,
      },
      data: {
        estado: EstadoTurno.LLAMADO,
        horaLlamado: new Date(),
      },
    });

    if (updated.count === 0) {
      throw new BadRequestException('Otro empleado ya tomó este turno');
    }

    const resultado = await tx.turno.findUnique({
      where: { id: turno.id },
    });

    return resultado;
  });

  // 🔥 IMPORTANTE: emitir FUERA de la transacción
  this.gateway.emitirTurnoLlamado(resultado);

  return resultado;
}

async crearTurnoPublico(
  farmaciaId: number,
  tipoTurnoId: number,
  idempotencyKey: string,
) {
  if (!farmaciaId || !tipoTurnoId) {
    throw new BadRequestException('Datos inválidos');
  }

  // 🔒 Validar que el tipo pertenece a la farmacia
  const tipo = await this.prisma.tipoTurno.findFirst({
    where: {
      id: tipoTurnoId,
      farmaciaId,
    },
  });

  if (!tipo) {
    throw new BadRequestException('Tipo de turno inválido');
  }

  return this.crearTurno(
    farmaciaId,
    tipoTurnoId,
    idempotencyKey,
  );
}
}
