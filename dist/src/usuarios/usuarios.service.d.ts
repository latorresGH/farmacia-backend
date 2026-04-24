import { PrismaService } from '../prisma/prisma.service';
import { Rol } from '@prisma/client';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    listarEmpleados(): Promise<{
        id: number;
        nombre: string;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
        createdAt: Date;
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
    }[]>;
    obtenerEmpleado(id: number): Promise<{
        id: number;
        nombre: string;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
        createdAt: Date;
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
    }>;
    actualizarEmpleado(id: number, data: {
        nombre?: string;
        email?: string;
        rol?: Rol;
    }): Promise<{
        id: number;
        nombre: string;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
    }>;
    asignarCaja(id: number, cajaId: number | null): Promise<{
        id: number;
        nombre: string;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
    }>;
    turnosHoyPorEmpleado(fecha?: Date): Promise<{
        id: number;
        nombre: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
        caja: {
            id: number;
            nombre: string;
        } | null;
        turnosAsignados: ({
            caja: {
                id: number;
                nombre: string;
            } | null;
            tipoTurno: {
                id: number;
                nombre: string;
                activo: boolean;
                prefijo: string;
                duracionMin: number;
            };
        } & {
            id: number;
            cajaId: number | null;
            horaCreacion: Date;
            numero: number;
            codigo: string;
            estado: import("@prisma/client").$Enums.EstadoTurno;
            tipoTurnoId: number;
            duracionEstimada: number;
            horaLlamado: Date | null;
            horaInicioAtencion: Date | null;
            horaFinAtencion: Date | null;
            empleadoId: number | null;
        })[];
    }[]>;
    turnosSemanaPorEmpleado(fecha?: Date): Promise<{
        id: number;
        nombre: string;
        rol: import("@prisma/client").$Enums.Rol;
        cajaId: number | null;
        caja: {
            id: number;
            nombre: string;
        } | null;
        turnosAsignados: ({
            caja: {
                id: number;
                nombre: string;
            } | null;
            tipoTurno: {
                id: number;
                nombre: string;
                activo: boolean;
                prefijo: string;
                duracionMin: number;
            };
        } & {
            id: number;
            cajaId: number | null;
            horaCreacion: Date;
            numero: number;
            codigo: string;
            estado: import("@prisma/client").$Enums.EstadoTurno;
            tipoTurnoId: number;
            duracionEstimada: number;
            horaLlamado: Date | null;
            horaInicioAtencion: Date | null;
            horaFinAtencion: Date | null;
            empleadoId: number | null;
        })[];
    }[]>;
}
