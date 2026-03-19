import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class TiposTurnoService {
  constructor(private prisma: PrismaService) {}

  // ✅ Crear tipo de turno
  async crearTipoTurno(data: {
    nombre: string;
    prefijo: string;
    duracionMin?: number;
    farmaciaId: number;
  }) {
    const existe = await this.prisma.tipoTurno.findFirst({
      where: {
        farmaciaId: data.farmaciaId,
        prefijo: data.prefijo,
      },
    });

    if (existe) {
      throw new BadRequestException('El prefijo ya existe');
    }

    return this.prisma.tipoTurno.create({
      data: {
        nombre: data.nombre,
        prefijo: data.prefijo,
        duracionMin: data.duracionMin ?? 10,
        farmaciaId: data.farmaciaId,
      },
    });
  }

  // ✅ Obtener todos los tipos de una farmacia
  async obtenerTipos(farmaciaId: number) {
    return this.prisma.tipoTurno.findMany({
      where: {
        farmaciaId,
        activo: true,
      },
      orderBy: { id: 'asc' },
    });
  }

  // ✅ Obtener uno
  async obtenerTipo(id: number) {
    const tipo = await this.prisma.tipoTurno.findUnique({
      where: { id },
    });

    if (!tipo) {
      throw new NotFoundException('Tipo de turno no encontrado');
    }

    return tipo;
  }

  // ✅ Actualizar
  async actualizarTipo(
    id: number,
    data: {
      nombre?: string;
      prefijo?: string;
      duracionMin?: number;
    },
  ) {
    const existe = await this.prisma.tipoTurno.findUnique({
      where: { id },
    });

    if (!existe) {
      throw new NotFoundException('Tipo de turno no encontrado');
    }

    return this.prisma.tipoTurno.update({
      where: { id },
      data,
    });
  }

  // ✅ Eliminar
  async eliminarTipo(id: number) {
    const tipo = await this.prisma.tipoTurno.findUnique({
      where: { id },
    });

    if (!tipo) {
      throw new NotFoundException('Tipo de turno no encontrado');
    }

    return this.prisma.tipoTurno.update({
      where: { id },
      data: { activo: false },
    });
  }
}
