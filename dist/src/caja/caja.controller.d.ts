import { CajaService } from './caja.service';
export declare class CajaController {
    private readonly cajaService;
    constructor(cajaService: CajaService);
    crearCaja(body: {
        nombre: string;
    }): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
    }>;
    obtenerCajas(): Promise<({
        usuarios: {
            id: number;
            nombre: string;
            email: string;
            rol: import("@prisma/client").$Enums.Rol;
        }[];
    } & {
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
    })[]>;
    obtenerCaja(id: number): Promise<{
        usuarios: {
            id: number;
            nombre: string;
            email: string;
            rol: import("@prisma/client").$Enums.Rol;
        }[];
    } & {
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
    }>;
    actualizarCaja(id: number, body: {
        nombre?: string;
    }): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
    }>;
    eliminarCaja(id: number): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
    }>;
    asignarUsuario(cajaId: number, usuarioId: number): Promise<{
        id: number;
        nombre: string;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    desasignarUsuario(usuarioId: number): Promise<{
        id: number;
        nombre: string;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
}
