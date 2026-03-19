import { TiposTurnoService } from './tipos-turno.service';
export declare class TiposTurnoController {
    private readonly tiposService;
    constructor(tiposService: TiposTurnoService);
    crearTipo(body: {
        nombre: string;
        prefijo: string;
        duracionMin?: number;
        farmaciaId: number;
    }): Promise<{
        id: number;
        farmaciaId: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
    }>;
    obtenerTipos(farmaciaId: number): Promise<{
        id: number;
        farmaciaId: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
    }[]>;
    obtenerTipo(id: number): Promise<{
        id: number;
        farmaciaId: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
    }>;
    actualizarTipo(id: number, body: {
        nombre?: string;
        prefijo?: string;
        duracionMin?: number;
    }): Promise<{
        id: number;
        farmaciaId: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
    }>;
    eliminarTipo(id: number): Promise<{
        id: number;
        farmaciaId: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
    }>;
}
