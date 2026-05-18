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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotacionesController = void 0;
const common_1 = require("@nestjs/common");
const anotaciones_service_1 = require("./anotaciones.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const prisma_service_1 = require("../prisma/prisma.service");
let AnotacionesController = class AnotacionesController {
    anotacionesService;
    prisma;
    constructor(anotacionesService, prisma) {
        this.anotacionesService = anotacionesService;
        this.prisma = prisma;
    }
    async listar(turnoId) {
        return this.anotacionesService.obtenerAnotaciones(turnoId);
    }
    async crear(turnoId, contenido, req) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: req.user.userId },
            select: { nombre: true, rol: true },
        });
        return this.anotacionesService.crearAnotacion(turnoId, contenido, req.user.userId, usuario?.nombre ?? 'Usuario', usuario?.rol === 'ADMIN');
    }
    async eliminar(id, req) {
        return this.anotacionesService.eliminarAnotacion(id, req.user.userId, req.user.rol === 'ADMIN');
    }
};
exports.AnotacionesController = AnotacionesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('turnoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnotacionesController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('turnoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('contenido')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], AnotacionesController.prototype, "crear", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AnotacionesController.prototype, "eliminar", null);
exports.AnotacionesController = AnotacionesController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('turnos/:turnoId/anotaciones'),
    __metadata("design:paramtypes", [anotaciones_service_1.AnotacionesService,
        prisma_service_1.PrismaService])
], AnotacionesController);
//# sourceMappingURL=anotaciones.controller.js.map