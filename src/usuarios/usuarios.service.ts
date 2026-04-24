import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Rol } from '@prisma/client';
@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async listarEmpleados() {
    return this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true, activo: true } },
        createdAt: true,
      },
      orderBy: { id: 'asc' },
    });
  }

  async obtenerEmpleado(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true, activo: true } },
        createdAt: true,
      },
    });

    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return usuario;
  }

  async actualizarEmpleado(
    id: number,
    data: { nombre?: string; email?: string; rol?: Rol },
  ) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.usuario.update({
      where: { id },
      data,
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true, activo: true } },
      },
    });
  }

  async asignarCaja(id: number, cajaId: number | null) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Usuario no encontrado');

    if (cajaId !== null) {
      const caja = await this.prisma.caja.findUnique({ where: { id: cajaId } });
      if (!caja) throw new NotFoundException('Caja no encontrada');
      if (!caja.activo) throw new BadRequestException('La caja no está activa');
    }

    return this.prisma.usuario.update({
      where: { id },
      data: { cajaId },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true, activo: true } },
      },
    });
  }

  async turnosHoyPorEmpleado(fecha?: Date) {
    const dia = fecha ? new Date(fecha) : new Date();
    dia.setHours(0, 0, 0, 0);
    const finDia = new Date(dia);
    finDia.setHours(23, 59, 59, 999);

    return this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true } },
        turnosAsignados: {
          where: { horaCreacion: { gte: dia, lte: finDia } },
          include: {
            tipoTurno: true,
            caja: { select: { id: true, nombre: true } },
          },
          orderBy: { horaCreacion: 'asc' },
        },
      },
      orderBy: { id: 'asc' },
    });
  }

  async turnosSemanaPorEmpleado(fecha?: Date) {
    const inicio = fecha ? new Date(fecha) : new Date();
    inicio.setHours(0, 0, 0, 0);
    const dia = inicio.getDay();
    const diff = dia === 0 ? -6 : 1 - dia;
    inicio.setDate(inicio.getDate() + diff); // lunes de esa semana

    const fin = new Date(inicio);
    fin.setDate(inicio.getDate() + 6);
    fin.setHours(23, 59, 59, 999);

    return this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true } },
        turnosAsignados: {
          where: { horaCreacion: { gte: inicio, lte: fin } },
          include: {
            tipoTurno: true,
            caja: { select: { id: true, nombre: true } },
          },
          orderBy: { horaCreacion: 'asc' },
        },
      },
      orderBy: { id: 'asc' },
    });
  }
}
