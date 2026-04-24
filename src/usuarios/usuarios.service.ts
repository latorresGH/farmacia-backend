import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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

  async actualizarEmpleado(id: number, data: { nombre?: string; email?: string; rol?: Rol }) {
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

  async turnosHoyPorEmpleado() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const empleados = await this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true } },
        turnosAsignados: {
          where: { horaCreacion: { gte: hoy } },
          include: {
            tipoTurno: true,
            caja: { select: { id: true, nombre: true } },
          },
          orderBy: { horaCreacion: 'asc' },
        },
      },
      orderBy: { id: 'asc' },
    });

    return empleados;
  }

  async turnosSemanaPorEmpleado() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const finSemana = new Date(hoy);
    finSemana.setDate(hoy.getDate() + 6);
    finSemana.setHours(23, 59, 59, 999);

    const empleados = await this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        rol: true,
        cajaId: true,
        caja: { select: { id: true, nombre: true } },
        turnosAsignados: {
          where: {
            horaCreacion: { gte: hoy, lte: finSemana },
          },
          include: {
            tipoTurno: true,
            caja: { select: { id: true, nombre: true } },
          },
          orderBy: { horaCreacion: 'asc' },
        },
      },
      orderBy: { id: 'asc' },
    });

    return empleados;
  }
}