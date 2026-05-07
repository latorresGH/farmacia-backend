import { PrismaService } from '../prisma/prisma.service';
export declare class CajaService {
    private prisma;
    constructor(prisma: PrismaService);
    crearCaja(data: {
        nombre: string;
    }): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
    }>;
    asignarTiposTurno(cajaId: number, tipoTurnoIds: number[]): Promise<{
        usuarios: {
            id: number;
            nombre: string;
        }[];
        tiposTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
        }[];
    } & {
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
        tiposTurno: {
            id: number;
            nombre: string;
            prefijo: string;
            duracionMin: number;
            activo: boolean;
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
    actualizarCaja(id: number, data: {
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
