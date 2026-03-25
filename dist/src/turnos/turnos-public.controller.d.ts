import { TurnosService } from './turnos.service';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';
export declare class TurnosPublicController {
    private readonly turnosService;
    constructor(turnosService: TurnosService);
    crearTurnoPublico(idempotencyKey: string, dto: CrearTurnoDto): Promise<{
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
