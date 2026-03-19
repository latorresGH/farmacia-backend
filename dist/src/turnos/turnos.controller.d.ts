import { TurnosService } from './turnos.service';
import { EstadoTurno } from '@prisma/client';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';
import { LlamarSiguienteDto } from './dtos/LlamarSiguienteDto';
export declare class TurnosController {
    private readonly turnosService;
    constructor(turnosService: TurnosService);
    crearTurno(dto: CrearTurnoDto, idempotencyKey: string): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
    listarHoy(farmaciaId: number): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }[]>;
    obtenerTodos(farmaciaId: number, estado?: EstadoTurno): Promise<({
        tipoTurno: {
            farmaciaId: number;
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
        };
    } & {
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    })[]>;
    llamarTurno(id: number): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    finalizarTurno(id: number): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    cancelarTurno(id: number): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }>;
    turnoActual(farmaciaId: number): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
    llamarSiguiente(farmaciaId: number, dto: LlamarSiguienteDto): Promise<{
        farmaciaId: number;
        tipoTurnoId: number;
        id: number;
        numero: number;
        codigo: string;
        estado: import("@prisma/client").$Enums.EstadoTurno;
        horaCreacion: Date;
        horaLlamado: Date | null;
    } | null>;
}
