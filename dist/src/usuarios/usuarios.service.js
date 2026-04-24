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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsuariosService = class UsuariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
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
    async obtenerEmpleado(id) {
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
        if (!usuario)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return usuario;
    }
    async actualizarEmpleado(id, data) {
        const existe = await this.prisma.usuario.findUnique({ where: { id } });
        if (!existe)
            throw new common_1.NotFoundException('Usuario no encontrado');
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
    async asignarCaja(id, cajaId) {
        const existe = await this.prisma.usuario.findUnique({ where: { id } });
        if (!existe)
            throw new common_1.NotFoundException('Usuario no encontrado');
        if (cajaId !== null) {
            const caja = await this.prisma.caja.findUnique({ where: { id: cajaId } });
            if (!caja)
                throw new common_1.NotFoundException('Caja no encontrada');
            if (!caja.activo)
                throw new common_1.BadRequestException('La caja no está activa');
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
    async turnosHoyPorEmpleado(fecha) {
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
    async turnosSemanaPorEmpleado(fecha) {
        const inicio = fecha ? new Date(fecha) : new Date();
        inicio.setHours(0, 0, 0, 0);
        const dia = inicio.getDay();
        const diff = dia === 0 ? -6 : 1 - dia;
        inicio.setDate(inicio.getDate() + diff);
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
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map