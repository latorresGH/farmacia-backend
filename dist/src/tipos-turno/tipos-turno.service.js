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
exports.TiposTurnoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
let TiposTurnoService = class TiposTurnoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearTipoTurno(data) {
        const existe = await this.prisma.tipoTurno.findFirst({
            where: {
                prefijo: data.prefijo,
            },
        });
        if (existe) {
            throw new common_2.BadRequestException('El prefijo ya existe');
        }
        return this.prisma.tipoTurno.create({
            data: {
                nombre: data.nombre,
                prefijo: data.prefijo,
                duracionMin: data.duracionMin ?? 10,
            },
        });
    }
    async obtenerTipos() {
        return this.prisma.tipoTurno.findMany({
            where: {
                activo: true,
            },
            orderBy: { id: 'asc' },
        });
    }
    async obtenerTipo(id) {
        const tipo = await this.prisma.tipoTurno.findUnique({
            where: { id },
        });
        if (!tipo) {
            throw new common_1.NotFoundException('Tipo de turno no encontrado');
        }
        return tipo;
    }
    async actualizarTipo(id, data) {
        const existe = await this.prisma.tipoTurno.findUnique({
            where: { id },
        });
        if (!existe) {
            throw new common_1.NotFoundException('Tipo de turno no encontrado');
        }
        return this.prisma.tipoTurno.update({
            where: { id },
            data,
        });
    }
    async eliminarTipo(id) {
        const tipo = await this.prisma.tipoTurno.findUnique({
            where: { id },
        });
        if (!tipo) {
            throw new common_1.NotFoundException('Tipo de turno no encontrado');
        }
        return this.prisma.tipoTurno.update({
            where: { id },
            data: { activo: false },
        });
    }
};
exports.TiposTurnoService = TiposTurnoService;
exports.TiposTurnoService = TiposTurnoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TiposTurnoService);
//# sourceMappingURL=tipos-turno.service.js.map