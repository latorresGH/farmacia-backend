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
exports.CajaController = void 0;
const common_1 = require("@nestjs/common");
const caja_service_1 = require("./caja.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let CajaController = class CajaController {
    cajaService;
    constructor(cajaService) {
        this.cajaService = cajaService;
    }
    crearCaja(body) {
        return this.cajaService.crearCaja(body);
    }
    obtenerCajas() {
        return this.cajaService.obtenerCajas();
    }
    obtenerCaja(id) {
        return this.cajaService.obtenerCaja(id);
    }
    actualizarCaja(id, body) {
        return this.cajaService.actualizarCaja(id, body);
    }
    eliminarCaja(id) {
        return this.cajaService.eliminarCaja(id);
    }
    asignarUsuario(cajaId, usuarioId) {
        return this.cajaService.asignarUsuario(cajaId, usuarioId);
    }
    desasignarUsuario(usuarioId) {
        return this.cajaService.desasignarUsuario(usuarioId);
    }
    asignarTiposTurno(id, body) {
        return this.cajaService.asignarTiposTurno(id, body.tipoTurnoIds);
    }
};
exports.CajaController = CajaController;
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "crearCaja", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "obtenerCajas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "obtenerCaja", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "actualizarCaja", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "eliminarCaja", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(':cajaId/asignar/:usuarioId'),
    __param(0, (0, common_1.Param)('cajaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "asignarUsuario", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)('desasignar/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "desasignarUsuario", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id/tipos-turno'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CajaController.prototype, "asignarTiposTurno", null);
exports.CajaController = CajaController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('cajas'),
    __metadata("design:paramtypes", [caja_service_1.CajaService])
], CajaController);
//# sourceMappingURL=caja.controller.js.map