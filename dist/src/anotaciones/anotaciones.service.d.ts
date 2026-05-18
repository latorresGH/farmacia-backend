import { PrismaService } from '../prisma/prisma.service';
export declare class AnotacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    crearAnotacion(turnoId: number, contenido: string, usuarioId: number, usuarioNombre: string, esAdmin: boolean): Promise<{
        id: number;
        turnoId: number;
        usuarioId: number;
        contenido: string;
        usuarioNombre: string;
        esAdmin: boolean;
        creadoEn: Date;
    }>;
    obtenerAnotaciones(turnoId: number): Promise<{
        id: number;
        turnoId: number;
        usuarioId: number;
        contenido: string;
        usuarioNombre: string;
        esAdmin: boolean;
        creadoEn: Date;
    }[]>;
    eliminarAnotacion(id: number, usuarioId: number, esAdmin: boolean): Promise<{
        id: number;
        turnoId: number;
        usuarioId: number;
        contenido: string;
        usuarioNombre: string;
        esAdmin: boolean;
        creadoEn: Date;
    }>;
}
