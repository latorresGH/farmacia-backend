import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnotacionesService {
  constructor(private prisma: PrismaService) {}

  async crearAnotacion(
    turnoId: number,
    contenido: string,
    usuarioId: number,
    usuarioNombre: string,
    esAdmin: boolean,
  ) {
    const turno = await this.prisma.turno.findUnique({
      where: { id: turnoId },
    });

    if (!turno) throw new NotFoundException('Turno no encontrado');

    return this.prisma.anotacion.create({
      data: {
        contenido,
        usuarioId,
        usuarioNombre,
        esAdmin,
        turnoId,
      },
    });
  }

  async obtenerAnotaciones(turnoId: number) {
    return this.prisma.anotacion.findMany({
      where: { turnoId },
      orderBy: { creadoEn: 'asc' },
    });
  }

  async eliminarAnotacion(id: number, usuarioId: number, esAdmin: boolean) {
    const anotacion = await this.prisma.anotacion.findUnique({
      where: { id },
    });

    if (!anotacion) throw new NotFoundException('Anotación no encontrada');

    // Solo el autor o un admin puede borrar
    if (!esAdmin && anotacion.usuarioId !== usuarioId) {
      throw new NotFoundException('No tenés permiso para borrar esta anotación');
    }

    return this.prisma.anotacion.delete({ where: { id } });
  }
}