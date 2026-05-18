import { CajaService } from './caja.service';
export declare class CajaController {
    private readonly cajaService;
    constructor(cajaService: CajaService);
    crearCaja(body: {
        nombre: string;
    }): Promise<{
        nombre: string;
        activo: boolean;
        createdAt: Date;
        id: number;
    }>;
    obtenerCajas(): Promise<({
        usuarios: {
            nombre: string;
            id: number;
            email: string;
            rol: import("@prisma/client").$Enums.Rol;
        }[];
        tiposTurno: {
            nombre: string;
            activo: boolean;
            id: number;
            prefijo: string;
            duracionMin: number;
        }[];
    } & {
        nombre: string;
        activo: boolean;
        createdAt: Date;
        id: number;
    })[]>;
    obtenerCaja(id: number): Promise<{
        usuarios: {
            nombre: string;
            id: number;
            email: string;
            rol: import("@prisma/client").$Enums.Rol;
        }[];
    } & {
        nombre: string;
        activo: boolean;
        createdAt: Date;
        id: number;
    }>;
    actualizarCaja(id: number, body: {
        nombre?: string;
    }): Promise<{
        nombre: string;
        activo: boolean;
        createdAt: Date;
        id: number;
    }>;
    eliminarCaja(id: number): Promise<{
        nombre: string;
        activo: boolean;
        createdAt: Date;
        id: number;
    }>;
    asignarUsuario(cajaId: number, usuarioId: number): Promise<{
        nombre: string;
        id: number;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
    }>;
    desasignarUsuario(usuarioId: number): Promise<{
        nombre: string;
        id: number;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
    }>;
    asignarTiposTurno(id: number, body: {
        tipoTurnoIds: number[];
    }): Promise<{
        usuarios: {
            nombre: string;
            id: number;
        }[];
        tiposTurno: {
            nombre: string;
            activo: boolean;
            id: number;
            prefijo: string;
            duracionMin: number;
        }[];
    } & {
        nombre: string;
        activo: boolean;
        createdAt: Date;
        id: number;
    }>;
}
