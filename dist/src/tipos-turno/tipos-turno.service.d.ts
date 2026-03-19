import { PrismaService } from '../prisma/prisma.service';
export declare class TiposTurnoService {
    private prisma;
    constructor(prisma: PrismaService);
    crearTipoTurno(data: {
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
    actualizarTipo(id: number, data: {
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
