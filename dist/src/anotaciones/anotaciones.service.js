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
exports.AnotacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AnotacionesService = class AnotacionesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearAnotacion(turnoId, contenido, usuarioId, usuarioNombre, esAdmin) {
        const turno = await this.prisma.turno.findUnique({
            where: { id: turnoId },
        });
        if (!turno)
            throw new common_1.NotFoundException('Turno no encontrado');
        return this.prisma.anotacion.create({
            data: {
                contenido,
                usuarioId,
                usuarioNombre,
                esAdmin,
                turnoId,
            },
        });
    }
    async obtenerAnotaciones(turnoId) {
        return this.prisma.anotacion.findMany({
            where: { turnoId },
            orderBy: { creadoEn: 'asc' },
        });
    }
    async eliminarAnotacion(id, usuarioId, esAdmin) {
        const anotacion = await this.prisma.anotacion.findUnique({
            where: { id },
        });
        if (!anotacion)
            throw new common_1.NotFoundException('Anotación no encontrada');
        if (!esAdmin && anotacion.usuarioId !== usuarioId) {
            throw new common_1.NotFoundException('No tenés permiso para borrar esta anotación');
        }
        return this.prisma.anotacion.delete({ where: { id } });
    }
};
exports.AnotacionesService = AnotacionesService;
exports.AnotacionesService = AnotacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnotacionesService);
//# sourceMappingURL=anotaciones.service.js.map