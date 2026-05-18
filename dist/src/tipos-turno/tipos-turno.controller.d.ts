import { TiposTurnoService } from './tipos-turno.service';
export declare class TiposTurnoController {
    private readonly tiposService;
    constructor(tiposService: TiposTurnoService);
    crearTipo(body: {
        nombre: string;
        prefijo: string;
        duracionMin?: number;
    }): Promise<{
        id: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
        activo: boolean;
    }>;
    listarPublico(soloActivos?: string): Promise<{
        id: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
        activo: boolean;
    }[]>;
    obtenerTipo(id: number): Promise<{
        id: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
        activo: boolean;
    }>;
    actualizarTipo(id: number, body: {
        nombre?: string;
        prefijo?: string;
        duracionMin?: number;
    }): Promise<{
        id: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
        activo: boolean;
    }>;
    eliminarTipo(id: number): Promise<{
        id: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
        activo: boolean;
    }>;
}
