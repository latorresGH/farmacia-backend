import { AnotacionesService } from './anotaciones.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class AnotacionesController {
    private readonly anotacionesService;
    private readonly prisma;
    constructor(anotacionesService: AnotacionesService, prisma: PrismaService);
    listar(turnoId: number): Promise<{
        id: number;
        turnoId: number;
        usuarioId: number;
        contenido: string;
        usuarioNombre: string;
        esAdmin: boolean;
        creadoEn: Date;
    }[]>;
    crear(turnoId: number, contenido: string, req: any): Promise<{
        id: number;
        turnoId: number;
        usuarioId: number;
        contenido: string;
        usuarioNombre: string;
        esAdmin: boolean;
        creadoEn: Date;
    }>;
    eliminar(id: number, req: any): Promise<{
        id: number;
        turnoId: number;
        usuarioId: number;
        contenido: string;
        usuarioNombre: string;
        esAdmin: boolean;
        creadoEn: Date;
    }>;
}
