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
exports.TurnosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const turnos_gateway_1 = require("./turnos.gateway");
let TurnosService = class TurnosService {
    prisma;
    gateway;
    constructor(prisma, gateway) {
        this.prisma = prisma;
        this.gateway = gateway;
    }
    async crearTurno(farmaciaId, tipoTurnoId, idempotencyKey) {
        if (!farmaciaId || !tipoTurnoId) {
            throw new common_2.BadRequestException('ID de farmacia y/o tipo de turno no proporcionados');
        }
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        return this.prisma.$transaction(async (tx) => {
            const existingKey = await tx.idempotencyKey.findUnique({
                where: { key: idempotencyKey },
                include: { turno: true },
            });
            if (existingKey) {
                return existingKey.turno;
            }
            const key = await tx.idempotencyKey.create({
                data: {
                    key: idempotencyKey,
                    farmaciaId,
                },
            });
            let contador = await tx.contadorTurno.findFirst({
                where: { farmaciaId, tipoTurnoId, fecha: hoy },
            });
            if (!contador) {
                contador = await tx.contadorTurno.create({
                    data: {
                        farmaciaId,
                        tipoTurnoId,
                        fecha: hoy,
                        ultimoNumero: 0,
                    },
                });
            }
            const nuevoNumero = contador.ultimoNumero + 1;
            await tx.contadorTurno.update({
                where: { id: contador.id },
                data: { ultimoNumero: nuevoNumero },
            });
            const tipo = await tx.tipoTurno.findUnique({
                where: { id: tipoTurnoId },
            });
            if (!tipo) {
                throw new common_1.NotFoundException('Tipo de turno no encontrado');
            }
            const codigo = `${tipo.prefijo}${String(nuevoNumero).padStart(3, '0')}`;
            const turno = await tx.turno.create({
                data: {
                    numero: nuevoNumero,
                    codigo,
                    farmaciaId,
                    tipoTurnoId,
                },
            });
            await tx.idempotencyKey.update({
                where: { id: key.id },
                data: { turnoId: turno.id },
            });
            return turno;
        });
    }
    async obtenerTurnos(farmaciaId, estado) {
        return this.prisma.turno.findMany({
            where: {
                farmaciaId,
                estado,
            },
            include: {
                tipoTurno: true,
            },
            orderBy: {
                horaCreacion: 'desc',
            },
        });
    }
    async listarTurnosHoy(farmaciaId) {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        return this.prisma.turno.findMany({
            where: {
                farmaciaId,
                horaCreacion: {
                    gte: hoy,
                },
            },
            orderBy: {
                numero: 'asc',
            },
        });
    }
    async llamarTurno(turnoId) {
        const turno = await this.prisma.turno.findUnique({
            where: { id: turnoId },
        });
        if (!turno) {
            throw new common_1.NotFoundException('Turno no encontrado');
        }
        return this.prisma.turno.update({
            where: { id: turnoId },
            data: {
                estado: client_1.EstadoTurno.LLAMADO,
                horaLlamado: new Date(),
            },
        });
    }
    async finalizarTurno(turnoId) {
        const turno = await this.prisma.turno.findUnique({
            where: { id: turnoId },
        });
        if (!turno) {
            throw new common_1.NotFoundException('Turno no encontrado');
        }
        return this.prisma.turno.update({
            where: { id: turnoId },
            data: {
                estado: client_1.EstadoTurno.ATENDIDO,
            },
        });
    }
    async cancelarTurno(turnoId) {
        const turno = await this.prisma.turno.findUnique({
            where: { id: turnoId },
        });
        if (!turno) {
            throw new common_1.NotFoundException('Turno no encontrado');
        }
        return this.prisma.turno.update({
            where: { id: turnoId },
            data: {
                estado: client_1.EstadoTurno.CANCELADO,
            },
        });
    }
    async turnoActual(farmaciaId) {
        return this.prisma.turno.findFirst({
            where: {
                farmaciaId,
                estado: client_1.EstadoTurno.LLAMADO,
            },
            orderBy: {
                horaLlamado: 'desc',
            },
        });
    }
    async llamarSiguiente(farmaciaId) {
        const resultado = await this.prisma.$transaction(async (tx) => {
            const turno = await tx.turno.findFirst({
                where: {
                    farmaciaId,
                    estado: client_1.EstadoTurno.PENDIENTE,
                },
                orderBy: {
                    numero: 'asc',
                },
            });
            if (!turno) {
                throw new common_1.NotFoundException('No hay turnos pendientes');
            }
            const updated = await tx.turno.updateMany({
                where: {
                    id: turno.id,
                    estado: client_1.EstadoTurno.PENDIENTE,
                },
                data: {
                    estado: client_1.EstadoTurno.LLAMADO,
                    horaLlamado: new Date(),
                },
            });
            if (updated.count === 0) {
                throw new common_2.BadRequestException('Otro empleado ya tomó este turno');
            }
            return tx.turno.findUnique({
                where: { id: turno.id },
            });
        });
        this.gateway.emitirTurnoLlamado(resultado);
        return resultado;
    }
};
exports.TurnosService = TurnosService;
exports.TurnosService = TurnosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, turnos_gateway_1.TurnosGateway])
], TurnosService);
//# sourceMappingURL=turnos.service.js.map