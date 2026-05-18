import { PrismaService } from '../prisma/prisma.service';
export declare class TiposTurnoService {
    private prisma;
    constructor(prisma: PrismaService);
    crearTipoTurno(data: {
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
    obtenerTipos(soloActivos?: boolean): Promise<{
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
    actualizarTipo(id: number, data: {
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
