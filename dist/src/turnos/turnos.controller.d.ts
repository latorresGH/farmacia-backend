import { TurnosService } from './turnos.service';
import { EstadoTurno } from '@prisma/client';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';
import { LlamarSiguienteDto } from './dtos/LlamarSiguienteDto';
import { DerivarTurnoDto } from './dtos/DerivarTurnoDto';
import { PrismaService } from '../prisma/prisma.service';
import type { Request } from 'express';
export declare class TurnosController {
    private readonly turnosService;
    private readonly prisma;
    constructor(turnosService: TurnosService, prisma: PrismaService);
    crearTurno(req: Request, dto: CrearTurnoDto, idempotencyKey: string): Promise<{
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    } | null>;
    listarHoy(): Promise<({
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    })[]>;
    obtenerTodos(estado?: EstadoTurno, tipoTurnoId?: string): Promise<({
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    })[]>;
    llamarTurno(req: Request, id: number): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }>;
    derivarTurno(id: number, dto: DerivarTurnoDto): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }>;
    iniciarAtencion(req: Request, id: number): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }>;
    finalizarTurno(id: number): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }>;
    cancelarTurno(id: number, body: {
        motivo?: string;
    }): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }>;
    turnoActual(): Promise<({
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }) | null>;
    llamarSiguiente(req: Request, dto: LlamarSiguienteDto): Promise<({
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
    } & {
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }) | null>;
    obtenerEstadisticas(id: number): Promise<{
        tiempoEsperaMinutos: number | null;
        tiempoAtencionMinutos: number | null;
        caja: {
            id: number;
            nombre: string;
        } | null;
        tipoTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
        empleado: {
            id: number;
            nombre: string;
        } | null;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        duracionEstimada: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
        horaInicioAtencion: Date | null;
        horaFinAtencion: Date | null;
        motivoCancelacion: string | null;
        empleadoId: number | null;
        cajaId: number | null;
    }>;
}
