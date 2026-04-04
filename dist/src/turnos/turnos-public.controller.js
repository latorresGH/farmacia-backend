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
exports.TurnosPublicController = void 0;
const common_1 = require("@nestjs/common");
const turnos_service_1 = require("./turnos.service");
const CrearTurnoDto_1 = require("./dtos/CrearTurnoDto");
let TurnosPublicController = class TurnosPublicController {
    turnosService;
    constructor(turnosService) {
        this.turnosService = turnosService;
    }
    async crearTurnoPublico(idempotencyKey, dto) {
        if (!idempotencyKey) {
            throw new common_1.BadRequestException('Idempotency-Key requerido');
        }
        return this.turnosService.crearTurnoPublico(dto.tipoTurnoId, idempotencyKey);
    }
};
exports.TurnosPublicController = TurnosPublicController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('idempotency-key')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CrearTurnoDto_1.CrearTurnoDto]),
    __metadata("design:returntype", Promise)
], TurnosPublicController.prototype, "crearTurnoPublico", null);
exports.TurnosPublicController = TurnosPublicController = __decorate([
    (0, common_1.Controller)('turnos/public'),
    __metadata("design:paramtypes", [turnos_service_1.TurnosService])
], TurnosPublicController);
//# sourceMappingURL=turnos-public.controller.js.map