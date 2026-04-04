import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EstadoTurno } from '@prisma/client';
import { TurnosGateway } from './turnos.gateway';

@Injectable()
export class TurnosService {
  constructor(
    private prisma: PrismaService,
    private gateway: TurnosGateway,
  ) {}

  async crearTurno(tipoTurnoId: number, idempotencyKey: string) {
    if (!tipoTurnoId) {
      throw new BadRequestException('ID de tipo de turno no proporcionado');
    }

    const tipo = await this.prisma.tipoTurno.findUnique({
      where: { id: tipoTurnoId },
    });

    if (!tipo) {
      throw new NotFoundException('Tipo de turno no encontrado');
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const turno = await this.prisma.$transaction(async (tx) => {
      const existingKey = await tx.idempotencyKey.findUnique({
        where: { key: idempotencyKey },
        include: { turno: true },
      });

      if (existingKey) {
        return existingKey.turno;
      }

      const key = await tx.idempotencyKey.create({
        data: { key: idempotencyKey },
      });

      let contador = await tx.contadorTurno.findFirst({
        where: { tipoTurnoId, fecha: hoy },
      });

      if (!contador) {
        contador = await tx.contadorTurno.create({
          data: {
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

      const codigo = `${tipo.prefijo}${String(nuevoNumero).padStart(3, '0')}`;

      const turno = await tx.turno.create({
        data: {
          numero: nuevoNumero,
          codigo,
          tipoTurnoId,
          duracionEstimada: tipo.duracionMin,
        },
      });

      await tx.idempotencyKey.update({
        where: { id: key.id },
        data: { turnoId: turno.id },
      });

      return turno;
    });

    this.gateway.emitirTurnoCreado(turno);
    return turno;
  }

  async obtenerTurnos(estado?: EstadoTurno, tipoTurnoId?: number) {
    return this.prisma.turno.findMany({
      where: {
        estado,
        ...(tipoTurnoId && { tipoTurnoId }),
      },
      include: {
        tipoTurno: true,
        empleado: { select: { id: true, nombre: true } },
        caja: { select: { id: true, nombre: true } },
      },
      orderBy: { horaCreacion: 'asc' },
    });
  }

  async listarTurnosHoy() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    return this.prisma.turno.findMany({
      where: {
        horaCreacion: { gte: hoy },
      },
      include: {
        tipoTurno: true,
        empleado: { select: { id: true, nombre: true } },
        caja: { select: { id: true, nombre: true } },
      },
      orderBy: { numero: 'asc' },
    });
  }

  async llamarTurno(turnoId: number, empleadoId?: number, cajaId?: number) {
    const turno = await this.prisma.$transaction(async (tx) => {
      const existing = await tx.turno.findUnique({
        where: { id: turnoId },
      });

      if (!existing) {
        throw new NotFoundException('Turno no encontrado');
      }

      if (
        existing.estado === EstadoTurno.ATENDIDO ||
        existing.estado === EstadoTurno.CANCELADO
      ) {
        throw new BadRequestException('El turno ya fue atendido o cancelado');
      }

      if (empleadoId && cajaId) {
        await this.validarEmpleadoEnCaja(tx, empleadoId, cajaId);
      }

      return tx.turno.update({
        where: { id: turnoId },
        data: {
          estado: EstadoTurno.LLAMADO,
          horaLlamado: new Date(),
          ...(empleadoId && { empleadoId }),
          ...(cajaId && { cajaId }),
        },
        include: {
          tipoTurno: true,
          empleado: { select: { id: true, nombre: true } },
          caja: { select: { id: true, nombre: true } },
        },
      });
    });

    this.gateway.emitirTurnoLlamado(turno);
    return turno;
  }

  async derivarTurno(turnoId: number, empleadoId: number) {
    const turno = await this.prisma.$transaction(async (tx) => {
      const existing = await tx.turno.findUnique({
        where: { id: turnoId },
      });

      if (!existing) {
        throw new NotFoundException('Turno no encontrado');
      }

      if (
        existing.estado === EstadoTurno.ATENDIDO ||
        existing.estado === EstadoTurno.CANCELADO
      ) {
        throw new BadRequestException(
          'No se puede derivar un turno atendido o cancelado',
        );
      }

      const empleado = await tx.usuario.findUnique({
        where: { id: empleadoId },
      });

      if (!empleado) {
        throw new NotFoundException('Empleado no encontrado');
      }

      return tx.turno.update({
        where: { id: turnoId },
        data: { empleadoId },
        include: {
          tipoTurno: true,
          empleado: { select: { id: true, nombre: true } },
          caja: { select: { id: true, nombre: true } },
        },
      });
    });

    this.gateway.emitirTurnoDerivado(turno);
    return turno;
  }

  async iniciarAtencion(turnoId: number, empleadoId?: number, cajaId?: number) {
    const turno = await this.prisma.$transaction(async (tx) => {
      const existing = await tx.turno.findUnique({
        where: { id: turnoId },
      });

      if (!existing) {
        throw new NotFoundException('Turno no encontrado');
      }

      if (
        existing.estado === EstadoTurno.ATENDIDO ||
        existing.estado === EstadoTurno.CANCELADO
      ) {
        throw new BadRequestException('El turno ya fue atendido o cancelado');
      }

      if (existing.estado === EstadoTurno.EN_ATENCION) {
        throw new BadRequestException('El turno ya está en atención');
      }

      if (empleadoId && cajaId) {
        await this.validarEmpleadoEnCaja(tx, empleadoId, cajaId);
      }

      return tx.turno.update({
        where: { id: turnoId },
        data: {
          estado: EstadoTurno.EN_ATENCION,
          horaInicioAtencion: new Date(),
          ...(empleadoId && { empleadoId }),
          ...(cajaId && { cajaId }),
        },
        include: {
          tipoTurno: true,
          empleado: { select: { id: true, nombre: true } },
          caja: { select: { id: true, nombre: true } },
        },
      });
    });

    this.gateway.emitirTurnoEnAtencion(turno);
    return turno;
  }

  async finalizarTurno(turnoId: number) {
    const turno = await this.prisma.$transaction(async (tx) => {
      const existing = await tx.turno.findUnique({
        where: { id: turnoId },
      });

      if (!existing) {
        throw new NotFoundException('Turno no encontrado');
      }

      if (!existing.horaInicioAtencion) {
        throw new BadRequestException(
          'El turno no tiene hora de inicio de atención',
        );
      }

      return tx.turno.update({
        where: { id: turnoId },
        data: {
          estado: EstadoTurno.ATENDIDO,
          horaFinAtencion: new Date(),
        },
        include: {
          tipoTurno: true,
          empleado: { select: { id: true, nombre: true } },
          caja: { select: { id: true, nombre: true } },
        },
      });
    });

    this.gateway.emitirTurnoFinalizado(turno);
    return turno;
  }

  async cancelarTurno(turnoId: number) {
    const turno = await this.prisma.$transaction(async (tx) => {
      const existing = await tx.turno.findUnique({
        where: { id: turnoId },
      });

      if (!existing) {
        throw new NotFoundException('Turno no encontrado');
      }

      return tx.turno.update({
        where: { id: turnoId },
        data: { estado: EstadoTurno.CANCELADO },
        include: {
          tipoTurno: true,
          empleado: { select: { id: true, nombre: true } },
          caja: { select: { id: true, nombre: true } },
        },
      });
    });

    this.gateway.emitirTurnoCancelado(turno);
    return turno;
  }

  async turnoActual() {
    return this.prisma.turno.findFirst({
      where: { estado: EstadoTurno.LLAMADO },
      orderBy: { horaLlamado: 'desc' },
      include: {
        tipoTurno: true,
        empleado: { select: { id: true, nombre: true } },
        caja: { select: { id: true, nombre: true } },
      },
    });
  }

  async llamarSiguiente(
    tipoTurnoId?: number,
    empleadoId?: number,
    cajaId?: number,
  ) {
    const resultado = await this.prisma.$transaction(async (tx) => {
      if (empleadoId && cajaId) {
        await this.validarEmpleadoEnCaja(tx, empleadoId, cajaId);
      }

      const turno = await tx.turno.findFirst({
        where: {
          estado: EstadoTurno.PENDIENTE,
          ...(tipoTurnoId && { tipoTurnoId }),
        },
        orderBy: { numero: 'asc' },
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
          ...(empleadoId && { empleadoId }),
          ...(cajaId && { cajaId }),
        },
      });

      if (updated.count === 0) {
        throw new BadRequestException('Otro empleado ya tomó este turno');
      }

      return tx.turno.findUnique({
        where: { id: turno.id },
        include: {
          tipoTurno: true,
          empleado: { select: { id: true, nombre: true } },
          caja: { select: { id: true, nombre: true } },
        },
      });
    });

    this.gateway.emitirTurnoLlamado(resultado);
    return resultado;
  }

  async crearTurnoPublico(tipoTurnoId: number, idempotencyKey: string) {
    if (!tipoTurnoId) {
      throw new BadRequestException('Datos inválidos');
    }

    const tipo = await this.prisma.tipoTurno.findFirst({
      where: {
        id: tipoTurnoId,
        activo: true,
      },
    });

    if (!tipo) {
      throw new BadRequestException('Tipo de turno inválido');
    }

    return this.crearTurno(tipoTurnoId, idempotencyKey);
  }

  async obtenerEstadisticasTurno(turnoId: number) {
    const turno = await this.prisma.turno.findUnique({
      where: { id: turnoId },
      include: {
        tipoTurno: true,
        empleado: { select: { id: true, nombre: true } },
        caja: { select: { id: true, nombre: true } },
      },
    });

    if (!turno) {
      throw new NotFoundException('Turno no encontrado');
    }

    let tiempoEspera: number | null = null;
    let tiempoAtencion: number | null = null;

    if (turno.horaLlamado && turno.horaCreacion) {
      tiempoEspera = Math.round(
        (turno.horaLlamado.getTime() - turno.horaCreacion.getTime()) /
          1000 /
          60,
      );
    }

    if (turno.horaFinAtencion && turno.horaInicioAtencion) {
      tiempoAtencion = Math.round(
        (turno.horaFinAtencion.getTime() - turno.horaInicioAtencion.getTime()) /
          1000 /
          60,
      );
    }

    return {
      ...turno,
      tiempoEsperaMinutos: tiempoEspera,
      tiempoAtencionMinutos: tiempoAtencion,
    };
  }

  private async validarEmpleadoEnCaja(
    tx: any,
    empleadoId: number,
    cajaId: number,
  ) {
    const empleado = await tx.usuario.findUnique({
      where: { id: empleadoId },
    });

    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }

    if (empleado.cajaId && empleado.cajaId !== cajaId) {
      throw new ForbiddenException('El empleado no pertenece a esa caja');
    }

    const caja = await tx.caja.findUnique({
      where: { id: cajaId },
    });

    if (!caja) {
      throw new NotFoundException('Caja no encontrada');
    }

    if (!caja.activo) {
      throw new BadRequestException('La caja no está activa');
    }
  }
}
