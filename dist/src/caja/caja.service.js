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
exports.CajaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CajaService = class CajaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearCaja(data) {
        return this.prisma.caja.create({
            data: {
                nombre: data.nombre,
            },
        });
    }
    async asignarTiposTurno(cajaId, tipoTurnoIds) {
        const caja = await this.prisma.caja.findUnique({ where: { id: cajaId } });
        if (!caja)
            throw new common_1.NotFoundException('Caja no encontrada');
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
            include: {
                usuarios: {
                    select: { id: true, nombre: true, email: true, rol: true },
                },
                tiposTurno: true,
            },
            orderBy: { id: 'asc' },
        });
    }
    async obtenerCaja(id) {
        const caja = await this.prisma.caja.findUnique({
            where: { id },
            include: {
                usuarios: {
                    select: { id: true, nombre: true, email: true, rol: true },
                },
            },
        });
        if (!caja) {
            throw new common_1.NotFoundException('Caja no encontrada');
        }
        return caja;
    }
    async actualizarCaja(id, data) {
        const caja = await this.prisma.caja.findUnique({
            where: { id },
        });
        if (!caja) {
            throw new common_1.NotFoundException('Caja no encontrada');
        }
        return this.prisma.caja.update({
            where: { id },
            data,
        });
    }
    async eliminarCaja(id) {
        const caja = await this.prisma.caja.findUnique({
            where: { id },
        });
        if (!caja) {
            throw new common_1.NotFoundException('Caja no encontrada');
        }
        return this.prisma.caja.update({
            where: { id },
            data: { activo: false },
        });
    }
    async asignarUsuario(cajaId, usuarioId) {
        const caja = await this.prisma.caja.findUnique({
            where: { id: cajaId },
        });
        if (!caja) {
            throw new common_1.NotFoundException('Caja no encontrada');
        }
        if (!caja.activo) {
            throw new common_1.BadRequestException('No se puede asignar usuario a una caja inactiva');
        }
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId },
        });
        if (!usuario) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        return this.prisma.usuario.update({
            where: { id: usuarioId },
            data: { cajaId },
            select: { id: true, nombre: true, email: true, rol: true, cajaId: true },
        });
    }
    async desasignarUsuario(usuarioId) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId },
        });
        if (!usuario) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        return this.prisma.usuario.update({
            where: { id: usuarioId },
            data: { cajaId: null },
            select: { id: true, nombre: true, email: true, rol: true, cajaId: true },
        });
    }
};
exports.CajaService = CajaService;
exports.CajaService = CajaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CajaService);
//# sourceMappingURL=caja.service.js.map