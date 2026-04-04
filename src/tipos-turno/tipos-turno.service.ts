import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class TiposTurnoService {
  constructor(private prisma: PrismaService) {}

  async crearTipoTurno(data: {
    nombre: string;
    prefijo: string;
    duracionMin?: number;
  }) {
    const existe = await this.prisma.tipoTurno.findFirst({
      where: {
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
      },
    });
  }

  async obtenerTipos() {
    return this.prisma.tipoTurno.findMany({
      where: {
        activo: true,
      },
      orderBy: { id: 'asc' },
    });
  }

  async obtenerTipo(id: number) {
    const tipo = await this.prisma.tipoTurno.findUnique({
      where: { id },
    });

    if (!tipo) {
      throw new NotFoundException('Tipo de turno no encontrado');
    }

    return tipo;
  }

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
