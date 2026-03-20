"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposTurnoModule = void 0;
const common_1 = require("@nestjs/common");
const tipos_turno_service_1 = require("./tipos-turno.service");
const tipos_turno_controller_1 = require("./tipos-turno.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let TiposTurnoModule = class TiposTurnoModule {
};
exports.TiposTurnoModule = TiposTurnoModule;
exports.TiposTurnoModule = TiposTurnoModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [tipos_turno_service_1.TiposTurnoService],
        controllers: [tipos_turno_controller_1.TiposTurnoController]
    })
], TiposTurnoModule);
//# sourceMappingURL=tipos-turno.module.js.map