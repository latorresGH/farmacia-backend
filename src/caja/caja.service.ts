import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CajaService {
  constructor(private prisma: PrismaService) {}

  async crearCaja(data: { nombre: string }) {
    return this.prisma.caja.create({
      data: {
        nombre: data.nombre,
      },
    });
  }

  async asignarTiposTurno(cajaId: number, tipoTurnoIds: number[]) {
    const caja = await this.prisma.caja.findUnique({ where: { id: cajaId } });
    if (!caja) throw new NotFoundException('Caja no encontrada');

    return this.prisma.caja.update({
      where: { id: cajaId },
      data: {
        tiposTurno: {
          set: tipoTurnoIds.map((id) => ({ id })),
        },
      },
      include: {
        tiposTurno: true,
        usuarios: { select: { id: true, nombre: true } },
      },
    });
  }

  async obtenerCajas() {
    return this.prisma.caja.findMany({
      where: { activo: true },
      include: {
        usuarios: {
          select: { id: true, nombre: true, email: true, rol: true },
        },
        tiposTurno: true, // ✅ incluís los tipos
      },
      orderBy: { id: 'asc' },
    });
  }

  async obtenerCaja(id: number) {
    const caja = await this.prisma.caja.findUnique({
      where: { id },
      include: {
        usuarios: {
          select: { id: true, nombre: true, email: true, rol: true },
        },
      },
    });

    if (!caja) {
      throw new NotFoundException('Caja no encontrada');
    }

    return caja;
  }

  async actualizarCaja(id: number, data: { nombre?: string }) {
    const caja = await this.prisma.caja.findUnique({
      where: { id },
    });

    if (!caja) {
      throw new NotFoundException('Caja no encontrada');
    }

    return this.prisma.caja.update({
      where: { id },
      data,
    });
  }

  async eliminarCaja(id: number) {
    const caja = await this.prisma.caja.findUnique({
      where: { id },
    });

    if (!caja) {
      throw new NotFoundException('Caja no encontrada');
    }

    return this.prisma.caja.update({
      where: { id },
      data: { activo: false },
    });
  }

  async asignarUsuario(cajaId: number, usuarioId: number) {
    const caja = await this.prisma.caja.findUnique({
      where: { id: cajaId },
    });

    if (!caja) {
      throw new NotFoundException('Caja no encontrada');
    }

    if (!caja.activo) {
      throw new BadRequestException(
        'No se puede asignar usuario a una caja inactiva',
      );
    }

    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return this.prisma.usuario.update({
      where: { id: usuarioId },
      data: { cajaId },
      select: { id: true, nombre: true, email: true, rol: true, cajaId: true },
    });
  }

  async desasignarUsuario(usuarioId: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return this.prisma.usuario.update({
      where: { id: usuarioId },
      data: { cajaId: null },
      select: { id: true, nombre: true, email: true, rol: true, cajaId: true },
    });
  }
}
