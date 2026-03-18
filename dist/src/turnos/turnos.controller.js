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
let TurnosController = class TurnosController {
    turnosService;
    constructor(turnosService) {
        this.turnosService = turnosService;
    }
    async crearTurno(body, idempotencyKey) {
        if (!idempotencyKey) {
            throw new Error('Idempotency-Key header is required');
        }
        return this.turnosService.crearTurno(body.farmaciaId, body.tipoTurnoId, idempotencyKey);
    }
    async listarHoy(farmaciaId) {
        return this.turnosService.listarTurnosHoy(farmaciaId);
    }
    async obtenerTodos(farmaciaId, estado) {
        return this.turnosService.obtenerTurnos(farmaciaId, estado);
    }
    async llamarTurno(id) {
        return this.turnosService.llamarTurno(id);
    }
    async finalizarTurno(id) {
        return this.turnosService.finalizarTurno(id);
    }
    async cancelarTurno(id) {
        return this.turnosService.cancelarTurno(id);
    }
    async turnoActual(farmaciaId) {
        return this.turnosService.turnoActual(farmaciaId);
    }
    async llamarSiguiente(farmaciaId) {
        return this.turnosService.llamarSiguiente(farmaciaId);
    }
};
exports.TurnosController = TurnosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('idempotency-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "crearTurno", null);
__decorate([
    (0, common_1.Get)('hoy/:farmaciaId'),
    __param(0, (0, common_1.Param)('farmaciaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "listarHoy", null);
__decorate([
    (0, common_1.Get)(':farmaciaId'),
    __param(0, (0, common_1.Param)('farmaciaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "obtenerTodos", null);
__decorate([
    (0, common_1.Patch)(':id/llamar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "llamarTurno", null);
__decorate([
    (0, common_1.Patch)(':id/finalizar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "finalizarTurno", null);
__decorate([
    (0, common_1.Patch)(':id/cancelar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "cancelarTurno", null);
__decorate([
    (0, common_1.Get)('actual/:farmaciaId'),
    __param(0, (0, common_1.Param)('farmaciaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "turnoActual", null);
__decorate([
    (0, common_1.Post)(':farmaciaId/siguiente'),
    __param(0, (0, common_1.Param)('farmaciaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TurnosController.prototype, "llamarSiguiente", null);
exports.TurnosController = TurnosController = __decorate([
    (0, common_1.Controller)('turnos'),
    __metadata("design:paramtypes", [turnos_service_1.TurnosService])
], TurnosController);
//# sourceMappingURL=turnos.controller.js.map