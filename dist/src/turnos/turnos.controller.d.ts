import { TurnosService } from './turnos.service';
import { EstadoTurno } from '@prisma/client';
export declare class TurnosController {
    private readonly turnosService;
    constructor(turnosService: TurnosService);
    crearTurno(body: {
        farmaciaId: number;
        tipoTurnoId: number;
    }, idempotencyKey: string): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
    listarHoy(farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }[]>;
    obtenerTodos(farmaciaId: number, estado?: EstadoTurno): Promise<({
        tipoTurno: {
            id: number;
            farmaciaId: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
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
    llamarTurno(id: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    finalizarTurno(id: number): Promise<{
        id: number;
        farmaciaId: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        tipoTurnoId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    cancelarTurno(id: number): Promise<{
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
    llamarSiguiente(farmaciaId: number): Promise<{
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
