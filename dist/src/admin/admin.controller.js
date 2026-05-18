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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    getResumen() {
        return this.adminService.getResumenGeneral();
    }
    getPicoHora(fecha, hasta) {
        return this.adminService.getPicoHora(fecha, hasta);
    }
    getRendimiento(desde, hasta) {
        return this.adminService.getRendimientoEmpleados(desde, hasta);
    }
    getCancelaciones(desde, hasta) {
        return this.adminService.getCancelaciones(desde, hasta);
    }
    getComparativa() {
        return this.adminService.getComparativaSemanal();
    }
    getTiempoEsperaPorTipo(desde, hasta) {
        return this.adminService.getTiempoEsperaPorTipo(desde, hasta);
    }
    getEvolucionDiaria(desde, hasta) {
        return this.adminService.getEvolucionDiaria(desde, hasta);
    }
    getRendimientoCajas(desde, hasta) {
        return this.adminService.getRendimientoCajas(desde, hasta);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('resumen'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getResumen", null);
__decorate([
    (0, common_1.Get)('pico-hora'),
    __param(0, (0, common_1.Query)('fecha')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getPicoHora", null);
__decorate([
    (0, common_1.Get)('rendimiento-empleados'),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getRendimiento", null);
__decorate([
    (0, common_1.Get)('cancelaciones'),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getCancelaciones", null);
__decorate([
    (0, common_1.Get)('comparativa-semanal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getComparativa", null);
__decorate([
    (0, common_1.Get)('tiempo-espera-por-tipo'),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getTiempoEsperaPorTipo", null);
__decorate([
    (0, common_1.Get)('evolucion-diaria'),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getEvolucionDiaria", null);
__decorate([
    (0, common_1.Get)('rendimiento-cajas'),
    __param(0, (0, common_1.Query)('desde')),
    __param(1, (0, common_1.Query)('hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getRendimientoCajas", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map