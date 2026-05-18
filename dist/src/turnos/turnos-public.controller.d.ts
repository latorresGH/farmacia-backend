import { TurnosService } from './turnos.service';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';
export declare class TurnosPublicController {
    private readonly turnosService;
    constructor(turnosService: TurnosService);
    crearTurnoPublico(idempotencyKey: string, dto: CrearTurnoDto): Promise<{
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
    estadoActual(): Promise<{
        cajas: {
            id: number;
            nombre: string;
            turnoActual: {
                tipoTurno: {
                    id: number;
                    nombre: string;
                    prefijo: string;
                    duracionMin: number;
                    activo: boolean;
                };
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
            };
        }[];
        pendientes: ({
            tipoTurno: {
                id: number;
                nombre: string;
                prefijo: string;
                duracionMin: number;
                activo: boolean;
            };
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
        })[];
    }>;
}
