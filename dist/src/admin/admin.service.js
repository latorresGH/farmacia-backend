"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPicoHora(desde, hasta) {
        const fechaDesde = desde ? new Date(desde) : new Date();
        fechaDesde.setHours(0, 0, 0, 0);
        const fechaHasta = hasta ? new Date(hasta) : new Date(fechaDesde);
        fechaHasta.setHours(23, 59, 59, 999);
        const turnos = await this.prisma.turno.findMany({
            where: { horaCreacion: { gte: fechaDesde, lte: fechaHasta } },
            select: { horaCreacion: true, estado: true },
        });
        const picos = {};
        for (let h = 8; h <= 20; h++)
            picos[h] = 0;
        turnos.forEach((t) => {
            const hora = new Date(t.horaCreacion).getHours();
            if (hora >= 8 && hora <= 20)
                picos[hora]++;
        });
        return Object.entries(picos).map(([hora, cantidad]) => ({
            hora: `${hora}:00`,
            cantidad,
        }));
    }
    async getRendimientoEmpleados(desde, hasta) {
        const fechaDesde = desde ? new Date(desde) : new Date(new Date().setDate(new Date().getDate() - 30));
        fechaDesde.setHours(0, 0, 0, 0);
        const fechaHasta = hasta ? new Date(hasta) : new Date();
        fechaHasta.setHours(23, 59, 59, 999);
        const empleados = await this.prisma.usuario.findMany({
            where: { rol: 'EMPLEADO' },
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
            const tiempoEsperaPromedio = atendidos.length > 0 && atendidos.some((t) => t.horaLlamado)
                ? atendidos
                    .filter((t) => t.horaLlamado)
                    .reduce((acc, t) => acc +
                    (new Date(t.horaLlamado).getTime() -
                        new Date(t.horaCreacion).getTime()) /
                        60000, 0) / atendidos.filter((t) => t.horaLlamado).length
                : 0;
            const tiempoAtencionPromedio = atendidos.length > 0 && atendidos.some((t) => t.horaFinAtencion)
                ? atendidos
                    .filter((t) => t.horaInicioAtencion && t.horaFinAtencion)
                    .reduce((acc, t) => acc +
                    (new Date(t.horaFinAtencion).getTime() -
                        new Date(t.horaInicioAtencion).getTime()) /
                        60000, 0) / atendidos.filter((t) => t.horaFinAtencion).length
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
                tasaAtencion: turnos.length > 0
                    ? Math.round((atendidos.length / turnos.length) * 100)
                    : 0,
            };
        });
    }
    async getCancelaciones(desde, hasta) {
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
        const porMotivo = {};
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
    async getComparativaSemanal() {
        const hoy = new Date();
        hoy.setHours(23, 59, 59, 999);
        const lunesActual = new Date(hoy);
        const diaActual = lunesActual.getDay();
        const diffActual = diaActual === 0 ? -6 : 1 - diaActual;
        lunesActual.setDate(lunesActual.getDate() + diffActual);
        lunesActual.setHours(0, 0, 0, 0);
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
        const agruparPorDia = (turnos, lunesRef) => {
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
            variacion: semanaAnterior.length > 0
                ? Math.round(((semanaActual.length - semanaAnterior.length) /
                    semanaAnterior.length) *
                    100)
                : 0,
        };
    }
    async getResumenGeneral() {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const finHoy = new Date(hoy);
        finHoy.setHours(23, 59, 59, 999);
        const [turnosHoy, totalEmpleados, totalCajas, turnosAtendidosHoy] = await Promise.all([
            this.prisma.turno.count({
                where: { horaCreacion: { gte: hoy, lte: finHoy } },
            }),
            this.prisma.usuario.count({ where: { rol: 'EMPLEADO' } }),
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
        const tiempoPromedioHoy = turnosAtendidosHoy.length > 0
            ? turnosAtendidosHoy.reduce((acc, t) => acc +
                (new Date(t.horaFinAtencion).getTime() -
                    new Date(t.horaInicioAtencion).getTime()) /
                    60000, 0) / turnosAtendidosHoy.length
            : 0;
        return {
            turnosHoy,
            totalEmpleados,
            totalCajas,
            tiempoPromedioAtencionHoy: Math.round(tiempoPromedioHoy * 10) / 10,
        };
    }
    async getTiempoEsperaPorTipo(desde, hasta) {
        const fechaDesde = desde ? new Date(desde) : new Date(new Date().setDate(new Date().getDate() - 30));
        fechaDesde.setHours(0, 0, 0, 0);
        const fechaHasta = hasta ? new Date(hasta) : new Date();
        fechaHasta.setHours(23, 59, 59, 999);
        const tipos = await this.prisma.tipoTurno.findMany({
            where: { activo: true },
            include: {
                turnos: {
                    where: {
                        estado: 'ATENDIDO',
                        horaCreacion: { gte: fechaDesde, lte: fechaHasta },
                        horaLlamado: { not: null },
                    },
                    select: {
                        horaCreacion: true,
                        horaLlamado: true,
                        horaInicioAtencion: true,
                        horaFinAtencion: true,
                    },
                },
            },
        });
        return tipos.map((tipo) => {
            const turnos = tipo.turnos;
            const tiempoEspera = turnos.length > 0
                ? turnos.reduce((acc, t) => acc + (new Date(t.horaLlamado).getTime() - new Date(t.horaCreacion).getTime()) / 60000, 0) / turnos.length
                : 0;
            const tiempoAtencion = turnos.filter(t => t.horaInicioAtencion && t.horaFinAtencion).length > 0
                ? turnos
                    .filter(t => t.horaInicioAtencion && t.horaFinAtencion)
                    .reduce((acc, t) => acc + (new Date(t.horaFinAtencion).getTime() - new Date(t.horaInicioAtencion).getTime()) / 60000, 0) / turnos.filter(t => t.horaFinAtencion).length
                : 0;
            return {
                id: tipo.id,
                nombre: tipo.nombre,
                prefijo: tipo.prefijo,
                totalAtendidos: turnos.length,
                tiempoEsperaPromedio: Math.round(tiempoEspera * 10) / 10,
                tiempoAtencionPromedio: Math.round(tiempoAtencion * 10) / 10,
            };
        });
    }
    async getRendimientoCajas(desde, hasta) {
        const fechaDesde = desde ? new Date(desde) : new Date(new Date().setDate(new Date().getDate() - 30));
        fechaDesde.setHours(0, 0, 0, 0);
        const fechaHasta = hasta ? new Date(hasta) : new Date();
        fechaHasta.setHours(23, 59, 59, 999);
        const cajas = await this.prisma.caja.findMany({
            where: { activo: true },
            include: {
                turnos: {
                    where: { horaCreacion: { gte: fechaDesde, lte: fechaHasta } },
                    select: {
                        estado: true,
                        horaInicioAtencion: true,
                        horaFinAtencion: true,
                    },
                },
            },
            orderBy: { id: 'asc' },
        });
        return cajas.map((caja) => {
            const turnos = caja.turnos;
            const atendidos = turnos.filter((t) => t.estado === 'ATENDIDO');
            const cancelados = turnos.filter((t) => t.estado === 'CANCELADO');
            const tiempoAtencion = atendidos.filter(t => t.horaInicioAtencion && t.horaFinAtencion).length > 0
                ? atendidos
                    .filter(t => t.horaInicioAtencion && t.horaFinAtencion)
                    .reduce((acc, t) => acc + (new Date(t.horaFinAtencion).getTime() - new Date(t.horaInicioAtencion).getTime()) / 60000, 0) / atendidos.filter(t => t.horaFinAtencion).length
                : 0;
            return {
                id: caja.id,
                nombre: caja.nombre,
                totalTurnos: turnos.length,
                atendidos: atendidos.length,
                cancelados: cancelados.length,
                tiempoAtencionPromedio: Math.round(tiempoAtencion * 10) / 10,
                tasaAtencion: turnos.length > 0
                    ? Math.round((atendidos.length / turnos.length) * 100)
                    : 0,
            };
        });
    }
    async getEvolucionDiaria(desde, hasta) {
        const fechaDesde = desde ? new Date(desde) : new Date(new Date().setDate(new Date().getDate() - 14));
        fechaDesde.setHours(0, 0, 0, 0);
        const fechaHasta = hasta ? new Date(hasta) : new Date();
        fechaHasta.setHours(23, 59, 59, 999);
        const turnos = await this.prisma.turno.findMany({
            where: { horaCreacion: { gte: fechaDesde, lte: fechaHasta } },
            select: { horaCreacion: true, estado: true },
        });
        const dias = {};
        const cursor = new Date(fechaDesde);
        while (cursor <= fechaHasta) {
            const key = cursor.toISOString().split('T')[0];
            dias[key] = { total: 0, atendidos: 0, cancelados: 0 };
            cursor.setDate(cursor.getDate() + 1);
        }
        turnos.forEach((t) => {
            const key = new Date(t.horaCreacion).toISOString().split('T')[0];
            if (dias[key]) {
                dias[key].total++;
                if (t.estado === 'ATENDIDO')
                    dias[key].atendidos++;
                if (t.estado === 'CANCELADO')
                    dias[key].cancelados++;
            }
        });
        return Object.entries(dias).map(([fecha, datos]) => ({
            fecha,
            ...datos,
        }));
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map