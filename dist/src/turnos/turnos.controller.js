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
exports.TurnosController = void 0;
const common_1 = require("@nestjs/common");
const turnos_service_1 = require("./turnos.service");
const client_1 = require("@prisma/client");
const CrearTurnoDto_1 = require("./dtos/CrearTurnoDto");
const LlamarSiguienteDto_1 = require("./dtos/LlamarSiguienteDto");
const DerivarTurnoDto_1 = require("./dtos/DerivarTurnoDto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const prisma_service_1 = require("../prisma/prisma.service");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let TurnosController = class TurnosController {
    turnosService;
    prisma;
    constructor(turnosService, prisma) {
        this.turnosService = turnosService;
        this.prisma = prisma;
    }
    async crearTurno(req, dto, idempotencyKey) {
        if (!idempotencyKey) {
            throw new common_1.BadRequestException('Idempotency-Key header is required');
        }
        return this.turnosService.crearTurno(dto.tipoTurnoId, idempotencyKey);
    }
    async listarHoy() {
        return this.turnosService.listarTurnosHoy();
    }
    async obtenerTodos(estado, tipoTurnoId) {
        const tipoId = tipoTurnoId ? Number(tipoTurnoId) : undefined;
        return this.turnosService.obtenerTurnos(estado, tipoId);
    }
    async llamarTurno(req, id) {
        const user = req.user;
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: user.userId },
            select: { cajaId: true },
        });
        return this.turnosService.llamarTurno(id, user?.userId, usuario?.cajaId ?? undefined);
    }
    async derivarTurno(id, dto) {
        return this.turnosService.derivarTurno(id, dto.empleadoId);
    }
    async iniciarAtencion(req, id) {
        const user = req.user;
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: user.userId },
            select: { cajaId: true },
        });
        return this.turnosService.iniciarAtencion(id, user?.userId, usuario?.cajaId ?? undefined);
    }
    async finalizarTurno(id) {
        return this.turnosService.finalizarTurno(id);
    }
    async cancelarTurno(id) {
        return this.turnosService.cancelarTurno(id);
    }
    async turnoActual() {
        return this.turnosService.turnoActual();
    }
    async llamarSiguiente(req, dto) {
        const user = req.user;
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: user.userId },
            select: { cajaId: true },
        });
        return this.turnosService.llamarSiguiente(dto.tipoTurnoId, user?.userId, usuario?.cajaId ?? undefined);
    }
    async obtenerEstadisticas(id) {
        return this.turnosService.obtenerEstadisticasTurno(id);
    }
};
exports.TurnosController = TurnosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('idempotency-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CrearTurnoDto_1.CrearTurnoDto, String]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "crearTurno", null);
__decorate([
    (0, common_1.Get)('hoy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "listarHoy", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('estado')),
    __param(1, (0, common_1.Query)('tipoTurnoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "obtenerTodos", null);
__decorate([
    (0, roles_decorator_1.Roles)('EMPLEADO', 'ADMIN'),
    (0, common_1.Patch)(':id/llamar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "llamarTurno", null);
__decorate([
    (0, roles_decorator_1.Roles)('EMPLEADO', 'ADMIN'),
    (0, common_1.Patch)(':id/derivar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, DerivarTurnoDto_1.DerivarTurnoDto]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "derivarTurno", null);
__decorate([
    (0, roles_decorator_1.Roles)('EMPLEADO', 'ADMIN'),
    (0, common_1.Patch)(':id/iniciar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "iniciarAtencion", null);
__decorate([
    (0, roles_decorator_1.Roles)('EMPLEADO', 'ADMIN'),
    (0, common_1.Patch)(':id/finalizar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "finalizarTurno", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id/cancelar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "cancelarTurno", null);
__decorate([
    (0, common_1.Get)('actual'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "turnoActual", null);
__decorate([
    (0, roles_decorator_1.Roles)('EMPLEADO', 'ADMIN'),
    (0, common_1.Post)('siguiente'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, LlamarSiguienteDto_1.LlamarSiguienteDto]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "llamarSiguiente", null);
__decorate([
    (0, common_1.Get)(':id/estadisticas'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "obtenerEstadisticas", null);
exports.TurnosController = TurnosController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('turnos'),
    __metadata("design:paramtypes", [turnos_service_1.TurnosService,
        prisma_service_1.PrismaService])
], TurnosController);
//# sourceMappingURL=turnos.controller.js.map