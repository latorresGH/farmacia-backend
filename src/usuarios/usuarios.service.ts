import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Rol } from '@prisma/client';
import * as bcrypt from 'bcrypt';
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
        activo: true, // ✅ agregás esto
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

  async turnosHoyPorEmpleado(fecha?: Date, userId?: number, rol?: string) {
    const dia = fecha ? new Date(fecha) : new Date();
    dia.setHours(0, 0, 0, 0);
    const finDia = new Date(dia);
    finDia.setHours(23, 59, 59, 999);

    return this.prisma.usuario.findMany({
      where: {
        ...(rol === 'EMPLEADO' && userId ? { id: userId } : {}),
      },
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

  async desactivarEmpleado(id: number) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Usuario no encontrado');
    return this.prisma.usuario.update({
      where: { id },
      data: { activo: false },
      select: { id: true, nombre: true, email: true, rol: true, activo: true },
    });
  }

  async activarEmpleado(id: number) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Usuario no encontrado');
    return this.prisma.usuario.update({
      where: { id },
      data: { activo: true },
      select: { id: true, nombre: true, email: true, rol: true, activo: true },
    });
  }

  async resetearPassword(id: number, nuevaPassword: string) {
    const existe = await this.prisma.usuario.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Usuario no encontrado');
    const hashed = await bcrypt.hash(nuevaPassword, 10);
    return this.prisma.usuario.update({
      where: { id },
      data: { password: hashed },
      select: { id: true, nombre: true, email: true, rol: true },
    });
  }

  async turnosSemanaPorEmpleado(fecha?: Date, userId?: number, rol?: string) {
    const inicio = fecha ? new Date(fecha) : new Date();
    inicio.setHours(0, 0, 0, 0);
    const dia = inicio.getDay();
    const diff = dia === 0 ? -6 : 1 - dia;
    inicio.setDate(inicio.getDate() + diff);

    const fin = new Date(inicio);
    fin.setDate(inicio.getDate() + 6);
    fin.setHours(23, 59, 59, 999);

    return this.prisma.usuario.findMany({
      where: {
        ...(rol === 'EMPLEADO' && userId ? { id: userId } : {}),
      },
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

  async crearEmpleado(data: {
    nombre: string;
    email: string;
    password: string;
    rol?: Rol;
  }) {
    const existe = await this.prisma.usuario.findUnique({
      where: { email: data.email },
    });
    if (existe) throw new BadRequestException('El email ya está registrado');

    const hashed = await bcrypt.hash(data.password, 10);

    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        password: hashed,
        rol: data.rol ?? 'EMPLEADO',
      },
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
  }
}
