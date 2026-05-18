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
exports.TiposTurnoController = void 0;
const common_1 = require("@nestjs/common");
const tipos_turno_service_1 = require("./tipos-turno.service");
let TiposTurnoController = class TiposTurnoController {
    tiposService;
    constructor(tiposService) {
        this.tiposService = tiposService;
    }
    async crearTipo(body) {
        return this.tiposService.crearTipoTurno(body);
    }
    async listarPublico(soloActivos) {
        return this.tiposService.obtenerTipos(soloActivos !== 'false');
    }
    async obtenerTipo(id) {
        return this.tiposService.obtenerTipo(id);
    }
    async actualizarTipo(id, body) {
        return this.tiposService.actualizarTipo(id, body);
    }
    async eliminarTipo(id) {
        return this.tiposService.eliminarTipo(id);
    }
};
exports.TiposTurnoController = TiposTurnoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TiposTurnoController.prototype, "crearTipo", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('soloActivos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiposTurnoController.prototype, "listarPublico", null);
__decorate([
    (0, common_1.Get)('detalle/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TiposTurnoController.prototype, "obtenerTipo", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TiposTurnoController.prototype, "actualizarTipo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TiposTurnoController.prototype, "eliminarTipo", null);
exports.TiposTurnoController = TiposTurnoController = __decorate([
    (0, common_1.Controller)('tipos-turno'),
    __metadata("design:paramtypes", [tipos_turno_service_1.TiposTurnoService])
], TiposTurnoController);
//# sourceMappingURL=tipos-turno.controller.js.map