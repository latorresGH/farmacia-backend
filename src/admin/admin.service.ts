import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // 1. PICO DE HORA — cuántos turnos por hora del día
  async getPicoHora(fecha?: string) {
    const dia = fecha ? new Date(fecha) : new Date();
    dia.setHours(0, 0, 0, 0);
    const finDia = new Date(dia);
    finDia.setHours(23, 59, 59, 999);

    const turnos = await this.prisma.turno.findMany({
      where: { horaCreacion: { gte: dia, lte: finDia } },
      select: { horaCreacion: true, estado: true },
    });

    const picos: Record<number, number> = {};
    for (let h = 8; h <= 20; h++) picos[h] = 0;

    turnos.forEach((t) => {
      const hora = new Date(t.horaCreacion).getHours();
      if (hora >= 8 && hora <= 20) picos[hora]++;
    });

    return Object.entries(picos).map(([hora, cantidad]) => ({
      hora: `${hora}:00`,
      cantidad,
    }));
  }

  // 2. RENDIMIENTO POR EMPLEADO
  async getRendimientoEmpleados(desde?: string, hasta?: string) {
    const fechaDesde = desde ? new Date(desde) : new Date(new Date().setDate(new Date().getDate() - 30));
    fechaDesde.setHours(0, 0, 0, 0);
    const fechaHasta = hasta ? new Date(hasta) : new Date();
    fechaHasta.setHours(23, 59, 59, 999);

    const empleados = await this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        rol: true,
        caja: { select: { id: true, nombre: true } },
        turnosAsignados: {
          where: { horaCreacion: { gte: fechaDesde, lte: fechaHasta } },
          select: {
            estado: true,
            horaCreacion: true,
            horaLlamado: true,
            horaInicioAtencion: true,
            horaFinAtencion: true,
          },
        },
      },
    });

    return empleados.map((emp) => {
      const turnos = emp.turnosAsignados;
      const atendidos = turnos.filter((t) => t.estado === 'ATENDIDO');
      const cancelados = turnos.filter((t) => t.estado === 'CANCELADO');

      const tiempoEsperaPromedio =
        atendidos.length > 0 && atendidos.some((t) => t.horaLlamado)
          ? atendidos
              .filter((t) => t.horaLlamado)
              .reduce(
                (acc, t) =>
                  acc +
                  (new Date(t.horaLlamado!).getTime() -
                    new Date(t.horaCreacion).getTime()) /
                    60000,
                0,
              ) / atendidos.filter((t) => t.horaLlamado).length
          : 0;

      const tiempoAtencionPromedio =
        atendidos.length > 0 && atendidos.some((t) => t.horaFinAtencion)
          ? atendidos
              .filter((t) => t.horaInicioAtencion && t.horaFinAtencion)
              .reduce(
                (acc, t) =>
                  acc +
                  (new Date(t.horaFinAtencion!).getTime() -
                    new Date(t.horaInicioAtencion!).getTime()) /
                    60000,
                0,
              ) / atendidos.filter((t) => t.horaFinAtencion).length
          : 0;

      return {
        id: emp.id,
        nombre: emp.nombre,
        rol: emp.rol,
        caja: emp.caja,
        totalTurnos: turnos.length,
        atendidos: atendidos.length,
        cancelados: cancelados.length,
        tiempoEsperaPromedio: Math.round(tiempoEsperaPromedio * 10) / 10,
        tiempoAtencionPromedio: Math.round(tiempoAtencionPromedio * 10) / 10,
        tasaAtencion:
          turnos.length > 0
            ? Math.round((atendidos.length / turnos.length) * 100)
            : 0,
      };
    });
  }

  // 3. CANCELACIONES
  async getCancelaciones(desde?: string, hasta?: string) {
    const fechaDesde = desde ? new Date(desde) : new Date(new Date().setDate(new Date().getDate() - 30));
    fechaDesde.setHours(0, 0, 0, 0);
    const fechaHasta = hasta ? new Date(hasta) : new Date();
    fechaHasta.setHours(23, 59, 59, 999);

    const cancelados = await this.prisma.turno.findMany({
      where: {
        estado: 'CANCELADO',
        horaCreacion: { gte: fechaDesde, lte: fechaHasta },
      },
      select: {
        horaCreacion: true,
        motivoCancelacion: true,
        empleado: { select: { id: true, nombre: true } },
        tipoTurno: { select: { nombre: true } },
      },
      orderBy: { horaCreacion: 'desc' },
    });

    const total = await this.prisma.turno.count({
      where: { horaCreacion: { gte: fechaDesde, lte: fechaHasta } },
    });

    // Agrupar por motivo
    const porMotivo: Record<string, number> = {};
    cancelados.forEach((t) => {
      const motivo = t.motivoCancelacion || 'Sin motivo';
      porMotivo[motivo] = (porMotivo[motivo] || 0) + 1;
    });

    return {
      total: cancelados.length,
      porcentaje: total > 0 ? Math.round((cancelados.length / total) * 100) : 0,
      porMotivo: Object.entries(porMotivo).map(([motivo, cantidad]) => ({
        motivo,
        cantidad,
      })),
      detalle: cancelados,
    };
  }

  // 4. COMPARATIVA SEMANAL
  async getComparativaSemanal() {
    const hoy = new Date();
    hoy.setHours(23, 59, 59, 999);

    // Semana actual — lunes a hoy
    const lunesActual = new Date(hoy);
    const diaActual = lunesActual.getDay();
    const diffActual = diaActual === 0 ? -6 : 1 - diaActual;
    lunesActual.setDate(lunesActual.getDate() + diffActual);
    lunesActual.setHours(0, 0, 0, 0);

    // Semana anterior
    const lunesAnterior = new Date(lunesActual);
    lunesAnterior.setDate(lunesAnterior.getDate() - 7);
    const viernesAnterior = new Date(lunesAnterior);
    viernesAnterior.setDate(viernesAnterior.getDate() + 6);
    viernesAnterior.setHours(23, 59, 59, 999);

    const [semanaActual, semanaAnterior] = await Promise.all([
      this.prisma.turno.findMany({
        where: { horaCreacion: { gte: lunesActual, lte: hoy } },
        select: { horaCreacion: true, estado: true },
      }),
      this.prisma.turno.findMany({
        where: { horaCreacion: { gte: lunesAnterior, lte: viernesAnterior } },
        select: { horaCreacion: true, estado: true },
      }),
    ]);

    const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

    const agruparPorDia = (turnos: { horaCreacion: Date }[], lunesRef: Date) => {
      const resultado = DIAS.map((dia, i) => {
        const fecha = new Date(lunesRef);
        fecha.setDate(lunesRef.getDate() + i);
        const count = turnos.filter((t) => {
          const d = new Date(t.horaCreacion);
          return d.toDateString() === fecha.toDateString();
        }).length;
        return { dia, cantidad: count };
      });
      return resultado;
    };

    return {
      actual: agruparPorDia(semanaActual, lunesActual),
      anterior: agruparPorDia(semanaAnterior, lunesAnterior),
      totalActual: semanaActual.length,
      totalAnterior: semanaAnterior.length,
      variacion:
        semanaAnterior.length > 0
          ? Math.round(
              ((semanaActual.length - semanaAnterior.length) /
                semanaAnterior.length) *
                100,
            )
          : 0,
    };
  }

  // 5. RESUMEN GENERAL
  async getResumenGeneral() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const finHoy = new Date(hoy);
    finHoy.setHours(23, 59, 59, 999);

    const [turnosHoy, totalEmpleados, totalCajas, turnosAtendidosHoy] =
      await Promise.all([
        this.prisma.turno.count({
          where: { horaCreacion: { gte: hoy, lte: finHoy } },
        }),
        this.prisma.usuario.count(),
        this.prisma.caja.count({ where: { activo: true } }),
        this.prisma.turno.findMany({
          where: {
            estado: 'ATENDIDO',
            horaCreacion: { gte: hoy, lte: finHoy },
            horaInicioAtencion: { not: null },
            horaFinAtencion: { not: null },
          },
          select: { horaInicioAtencion: true, horaFinAtencion: true },
        }),
      ]);

    const tiempoPromedioHoy =
      turnosAtendidosHoy.length > 0
        ? turnosAtendidosHoy.reduce(
            (acc, t) =>
              acc +
              (new Date(t.horaFinAtencion!).getTime() -
                new Date(t.horaInicioAtencion!).getTime()) /
                60000,
            0,
          ) / turnosAtendidosHoy.length
        : 0;

    return {
      turnosHoy,
      totalEmpleados,
      totalCajas,
      tiempoPromedioAtencionHoy: Math.round(tiempoPromedioHoy * 10) / 10,
    };
  }
}