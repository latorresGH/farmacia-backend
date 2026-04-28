import { PrismaService } from '../prisma/prisma.service';
import { EstadoTurno } from '@prisma/client';
import { TurnosGateway } from './turnos.gateway';
export declare class TurnosService {
    private prisma;
    private gateway;
    constructor(prisma: PrismaService, gateway: TurnosGateway);
    crearTurno(tipoTurnoId: number, idempotencyKey: string): Promise<{
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
    obtenerTurnos(estado?: EstadoTurno, tipoTurnoId?: number): Promise<({
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
    listarTurnosHoy(): Promise<({
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
    llamarTurno(turnoId: number, empleadoId?: number, cajaId?: number): Promise<{
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
    derivarTurno(turnoId: number, empleadoId: number): Promise<{
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
    iniciarAtencion(turnoId: number, empleadoId?: number, cajaId?: number): Promise<{
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
    finalizarTurno(turnoId: number): Promise<{
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
    cancelarTurno(turnoId: number, motivo?: string): Promise<{
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
    llamarSiguiente(tipoTurnoId?: number, empleadoId?: number, cajaId?: number): Promise<({
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
    crearTurnoPublico(tipoTurnoId: number, idempotencyKey: string): Promise<{
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
    obtenerEstadisticasTurno(turnoId: number): Promise<{
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
    private validarEmpleadoEnCaja;
}
