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
const client_1 = require("@prisma/client");
const turnos_gateway_1 = require("./turnos.gateway");
let TurnosService = class TurnosService {
    prisma;
    gateway;
    constructor(prisma, gateway) {
        this.prisma = prisma;
        this.gateway = gateway;
    }
    async crearTurno(tipoTurnoId, idempotencyKey) {
        if (!tipoTurnoId) {
            throw new common_1.BadRequestException('ID de tipo de turno no proporcionado');
        }
        const tipo = await this.prisma.tipoTurno.findUnique({
            where: { id: tipoTurnoId },
        });
        if (!tipo) {
            throw new common_1.NotFoundException('Tipo de turno no encontrado');
        }
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const turno = await this.prisma.$transaction(async (tx) => {
            const existingKey = await tx.idempotencyKey.findUnique({
                where: { key: idempotencyKey },
                include: { turno: true },
            });
            if (existingKey) {
                return existingKey.turno;
            }
            const key = await tx.idempotencyKey.create({
                data: { key: idempotencyKey },
            });
            let contador = await tx.contadorTurno.findFirst({
                where: { tipoTurnoId, fecha: hoy },
            });
            if (!contador) {
                contador = await tx.contadorTurno.create({
                    data: {
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
            const codigo = `${tipo.prefijo}${String(nuevoNumero).padStart(3, '0')}`;
            const turno = await tx.turno.create({
                data: {
                    numero: nuevoNumero,
                    codigo,
                    tipoTurnoId,
                    duracionEstimada: tipo.duracionMin,
                },
            });
            await tx.idempotencyKey.update({
                where: { id: key.id },
                data: { turnoId: turno.id },
            });
            return turno;
        });
        this.gateway.emitirTurnoCreado(turno);
        return turno;
    }
    async obtenerTurnos(estado, tipoTurnoId) {
        return this.prisma.turno.findMany({
            where: {
                estado,
                ...(tipoTurnoId && { tipoTurnoId }),
            },
            include: {
                tipoTurno: true,
                empleado: { select: { id: true, nombre: true } },
                caja: { select: { id: true, nombre: true } },
            },
            orderBy: { horaCreacion: 'asc' },
        });
    }
    async listarTurnosHoy() {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        return this.prisma.turno.findMany({
            where: {
                horaCreacion: { gte: hoy },
            },
            include: {
                tipoTurno: true,
                empleado: { select: { id: true, nombre: true } },
                caja: { select: { id: true, nombre: true } },
            },
            orderBy: { numero: 'asc' },
        });
    }
    async llamarTurno(turnoId, empleadoId, cajaId) {
        const turno = await this.prisma.$transaction(async (tx) => {
            const existing = await tx.turno.findUnique({
                where: { id: turnoId },
            });
            if (!existing) {
                throw new common_1.NotFoundException('Turno no encontrado');
            }
            if (existing.estado === client_1.EstadoTurno.ATENDIDO ||
                existing.estado === client_1.EstadoTurno.CANCELADO) {
                throw new common_1.BadRequestException('El turno ya fue atendido o cancelado');
            }
            if (empleadoId && cajaId) {
                await this.validarEmpleadoEnCaja(tx, empleadoId, cajaId);
            }
            return tx.turno.update({
                where: { id: turnoId },
                data: {
                    estado: client_1.EstadoTurno.LLAMADO,
                    horaLlamado: new Date(),
                    ...(empleadoId && { empleadoId }),
                    ...(cajaId && { cajaId }),
                },
                include: {
                    tipoTurno: true,
                    empleado: { select: { id: true, nombre: true } },
                    caja: { select: { id: true, nombre: true } },
                },
            });
        });
        this.gateway.emitirTurnoLlamado(turno);
        return turno;
    }
    async derivarTurno(turnoId, empleadoId) {
        const turno = await this.prisma.$transaction(async (tx) => {
            const existing = await tx.turno.findUnique({
                where: { id: turnoId },
            });
            if (!existing) {
                throw new common_1.NotFoundException('Turno no encontrado');
            }
            if (existing.estado === client_1.EstadoTurno.ATENDIDO ||
                existing.estado === client_1.EstadoTurno.CANCELADO) {
                throw new common_1.BadRequestException('No se puede derivar un turno atendido o cancelado');
            }
            const empleado = await tx.usuario.findUnique({
                where: { id: empleadoId },
            });
            if (!empleado) {
                throw new common_1.NotFoundException('Empleado no encontrado');
            }
            return tx.turno.update({
                where: { id: turnoId },
                data: { empleadoId },
                include: {
                    tipoTurno: true,
                    empleado: { select: { id: true, nombre: true } },
                    caja: { select: { id: true, nombre: true } },
                },
            });
        });
        this.gateway.emitirTurnoDerivado(turno);
        return turno;
    }
    async iniciarAtencion(turnoId, empleadoId, cajaId) {
        const turno = await this.prisma.$transaction(async (tx) => {
            const existing = await tx.turno.findUnique({
                where: { id: turnoId },
            });
            if (!existing) {
                throw new common_1.NotFoundException('Turno no encontrado');
            }
            if (existing.estado === client_1.EstadoTurno.ATENDIDO ||
                existing.estado === client_1.EstadoTurno.CANCELADO) {
                throw new common_1.BadRequestException('El turno ya fue atendido o cancelado');
            }
            if (existing.estado === client_1.EstadoTurno.EN_ATENCION) {
                throw new common_1.BadRequestException('El turno ya está en atención');
            }
            if (empleadoId && cajaId) {
                await this.validarEmpleadoEnCaja(tx, empleadoId, cajaId);
            }
            return tx.turno.update({
                where: { id: turnoId },
                data: {
                    estado: client_1.EstadoTurno.EN_ATENCION,
                    horaInicioAtencion: new Date(),
                    ...(empleadoId && { empleadoId }),
                    ...(cajaId && { cajaId }),
                },
                include: {
                    tipoTurno: true,
                    empleado: { select: { id: true, nombre: true } },
                    caja: { select: { id: true, nombre: true } },
                },
            });
        });
        this.gateway.emitirTurnoEnAtencion(turno);
        return turno;
    }
    async finalizarTurno(turnoId) {
        const turno = await this.prisma.$transaction(async (tx) => {
            const existing = await tx.turno.findUnique({
                where: { id: turnoId },
            });
            if (!existing) {
                throw new common_1.NotFoundException('Turno no encontrado');
            }
            if (!existing.horaInicioAtencion) {
                throw new common_1.BadRequestException('El turno no tiene hora de inicio de atención');
            }
            return tx.turno.update({
                where: { id: turnoId },
                data: {
                    estado: client_1.EstadoTurno.ATENDIDO,
                    horaFinAtencion: new Date(),
                },
                include: {
                    tipoTurno: true,
                    empleado: { select: { id: true, nombre: true } },
                    caja: { select: { id: true, nombre: true } },
                },
            });
        });
        this.gateway.emitirTurnoFinalizado(turno);
        return turno;
    }
    async cancelarTurno(turnoId, motivo) {
        const turno = await this.prisma.$transaction(async (tx) => {
            const existing = await tx.turno.findUnique({ where: { id: turnoId } });
            if (!existing)
                throw new common_1.NotFoundException('Turno no encontrado');
            return tx.turno.update({
                where: { id: turnoId },
                data: {
                    estado: client_1.EstadoTurno.CANCELADO,
                    ...(motivo ? { motivoCancelacion: motivo } : {}),
                },
                include: {
                    tipoTurno: true,
                    empleado: { select: { id: true, nombre: true } },
                    caja: { select: { id: true, nombre: true } },
                },
            });
        });
        this.gateway.emitirTurnoCancelado(turno);
        return turno;
    }
    async turnoActual() {
        return this.prisma.turno.findFirst({
            where: { estado: client_1.EstadoTurno.LLAMADO },
            orderBy: { horaLlamado: 'desc' },
            include: {
                tipoTurno: true,
                empleado: { select: { id: true, nombre: true } },
                caja: { select: { id: true, nombre: true } },
            },
        });
    }
    async llamarSiguiente(tipoTurnoId, empleadoId, cajaId) {
        const resultado = await this.prisma.$transaction(async (tx) => {
            if (empleadoId && cajaId) {
                await this.validarEmpleadoEnCaja(tx, empleadoId, cajaId);
            }
            const turno = await tx.turno.findFirst({
                where: {
                    estado: client_1.EstadoTurno.PENDIENTE,
                    ...(tipoTurnoId && { tipoTurnoId }),
                },
                orderBy: { numero: 'asc' },
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
                    ...(empleadoId && { empleadoId }),
                    ...(cajaId && { cajaId }),
                },
            });
            if (updated.count === 0) {
                throw new common_1.BadRequestException('Otro empleado ya tomó este turno');
            }
            return tx.turno.findUnique({
                where: { id: turno.id },
                include: {
                    tipoTurno: true,
                    empleado: { select: { id: true, nombre: true } },
                    caja: { select: { id: true, nombre: true } },
                },
            });
        });
        this.gateway.emitirTurnoLlamado(resultado);
        return resultado;
    }
    async crearTurnoPublico(tipoTurnoId, idempotencyKey) {
        if (!tipoTurnoId) {
            throw new common_1.BadRequestException('Datos inválidos');
        }
        const tipo = await this.prisma.tipoTurno.findFirst({
            where: {
                id: tipoTurnoId,
                activo: true,
            },
        });
        if (!tipo) {
            throw new common_1.BadRequestException('Tipo de turno inválido');
        }
        return this.crearTurno(tipoTurnoId, idempotencyKey);
    }
    async obtenerEstadisticasTurno(turnoId) {
        const turno = await this.prisma.turno.findUnique({
            where: { id: turnoId },
            include: {
                tipoTurno: true,
                empleado: { select: { id: true, nombre: true } },
                caja: { select: { id: true, nombre: true } },
            },
        });
        if (!turno) {
            throw new common_1.NotFoundException('Turno no encontrado');
        }
        let tiempoEspera = null;
        let tiempoAtencion = null;
        if (turno.horaLlamado && turno.horaCreacion) {
            tiempoEspera = Math.round((turno.horaLlamado.getTime() - turno.horaCreacion.getTime()) /
                1000 /
                60);
        }
        if (turno.horaFinAtencion && turno.horaInicioAtencion) {
            tiempoAtencion = Math.round((turno.horaFinAtencion.getTime() - turno.horaInicioAtencion.getTime()) /
                1000 /
                60);
        }
        return {
            ...turno,
            tiempoEsperaMinutos: tiempoEspera,
            tiempoAtencionMinutos: tiempoAtencion,
        };
    }
    async validarEmpleadoEnCaja(tx, empleadoId, cajaId) {
        const empleado = await tx.usuario.findUnique({
            where: { id: empleadoId },
        });
        if (!empleado) {
            throw new common_1.NotFoundException('Empleado no encontrado');
        }
        if (empleado.cajaId && empleado.cajaId !== cajaId) {
            throw new common_1.ForbiddenException('El empleado no pertenece a esa caja');
        }
        const caja = await tx.caja.findUnique({
            where: { id: cajaId },
        });
        if (!caja) {
            throw new common_1.NotFoundException('Caja no encontrada');
        }
        if (!caja.activo) {
            throw new common_1.BadRequestException('La caja no está activa');
        }
    }
};
exports.TurnosService = TurnosService;
exports.TurnosService = TurnosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        turnos_gateway_1.TurnosGateway])
], TurnosService);
//# sourceMappingURL=turnos.service.js.map