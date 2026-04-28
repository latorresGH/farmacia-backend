"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
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
                activo: true,
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
    async turnosHoyPorEmpleado(fecha, userId, rol) {
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
    async desactivarEmpleado(id) {
        const existe = await this.prisma.usuario.findUnique({ where: { id } });
        if (!existe)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return this.prisma.usuario.update({
            where: { id },
            data: { activo: false },
            select: { id: true, nombre: true, email: true, rol: true, activo: true },
        });
    }
    async activarEmpleado(id) {
        const existe = await this.prisma.usuario.findUnique({ where: { id } });
        if (!existe)
            throw new common_1.NotFoundException('Usuario no encontrado');
        return this.prisma.usuario.update({
            where: { id },
            data: { activo: true },
            select: { id: true, nombre: true, email: true, rol: true, activo: true },
        });
    }
    async resetearPassword(id, nuevaPassword) {
        const existe = await this.prisma.usuario.findUnique({ where: { id } });
        if (!existe)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const hashed = await bcrypt.hash(nuevaPassword, 10);
        return this.prisma.usuario.update({
            where: { id },
            data: { password: hashed },
            select: { id: true, nombre: true, email: true, rol: true },
        });
    }
    async turnosSemanaPorEmpleado(fecha, userId, rol) {
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
    async crearEmpleado(data) {
        const existe = await this.prisma.usuario.findUnique({
            where: { email: data.email },
        });
        if (existe)
            throw new common_1.BadRequestException('El email ya está registrado');
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
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map