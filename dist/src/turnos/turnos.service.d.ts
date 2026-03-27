import { PrismaService } from '../prisma/prisma.service';
import { EstadoTurno } from '@prisma/client';
import { TurnosGateway } from './turnos.gateway';
export declare class TurnosService {
    private prisma;
    private gateway;
    constructor(prisma: PrismaService, gateway: TurnosGateway);
    crearTurno(farmaciaId: number, tipoTurnoId: number, idempotencyKey: string): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
    obtenerTurnos(farmaciaId: number, estado?: EstadoTurno, tipoTurnoId?: number): Promise<({
        tipoTurno: {
            id: number;
            farmaciaId: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        };
    } & {
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    })[]>;
    listarTurnosHoy(farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }[]>;
    llamarTurno(turnoId: number, farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    finalizarTurno(turnoId: number, farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    cancelarTurno(turnoId: number, farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    turnoActual(farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
    llamarSiguiente(farmaciaId: number, tipoTurnoId?: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
    crearTurnoPublico(farmaciaId: number, tipoTurnoId: number, idempotencyKey: string): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
}
