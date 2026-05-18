import { PrismaService } from '../prisma/prisma.service';
import { Rol } from '@prisma/client';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    listarEmpleados(): Promise<{
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
        id: number;
        nombre: string;
        activo: boolean;
        createdAt: Date;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }[]>;
    obtenerEmpleado(id: number): Promise<{
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
        id: number;
        nombre: string;
        createdAt: Date;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    actualizarEmpleado(id: number, data: {
        nombre?: string;
        email?: string;
        rol?: Rol;
    }): Promise<{
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
        id: number;
        nombre: string;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    asignarCaja(id: number, cajaId: number | null): Promise<{
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
        id: number;
        nombre: string;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    turnosHoyPorEmpleado(fecha?: Date): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        id: number;
        nombre: string;
        cajaId: number | null;
        rol: import("@prisma/client").$Enums.Rol;
        turnosAsignados: ({
            caja: {
                id: number;
                nombre: string;
            } | null;
            tipoTurno: {
                id: number;
                nombre: string;
                prefijo: string;
                duracionMin: number;
                activo: boolean;
            };
        } & {
            id: number;
            numero: number;
            codigo: string;
            estado: import("@prisma/client").$Enums.EstadoTurno;
            tipoTurnoId: number;
            duracionEstimada: number;
            horaCreacion: Date;
            horaLlamado: Date | null;
            horaInicioAtencion: Date | null;
            horaFinAtencion: Date | null;
            motivoCancelacion: string | null;
            empleadoId: number | null;
            cajaId: number | null;
        })[];
    }[]>;
    desactivarEmpleado(id: number): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    activarEmpleado(id: number): Promise<{
        id: number;
        nombre: string;
        activo: boolean;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    resetearPassword(id: number, nuevaPassword: string): Promise<{
        id: number;
        nombre: string;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    turnosSemanaPorEmpleado(fecha?: Date): Promise<{
        caja: {
            id: number;
            nombre: string;
        } | null;
        id: number;
        nombre: string;
        cajaId: number | null;
        rol: import("@prisma/client").$Enums.Rol;
        turnosAsignados: ({
            caja: {
                id: number;
                nombre: string;
            } | null;
            tipoTurno: {
                id: number;
                nombre: string;
                prefijo: string;
                duracionMin: number;
                activo: boolean;
            };
        } & {
            id: number;
            numero: number;
            codigo: string;
            estado: import("@prisma/client").$Enums.EstadoTurno;
            tipoTurnoId: number;
            duracionEstimada: number;
            horaCreacion: Date;
            horaLlamado: Date | null;
            horaInicioAtencion: Date | null;
            horaFinAtencion: Date | null;
            motivoCancelacion: string | null;
            empleadoId: number | null;
            cajaId: number | null;
        })[];
    }[]>;
    crearEmpleado(data: {
        nombre: string;
        email: string;
        password: string;
        rol?: Rol;
    }): Promise<{
        caja: {
            id: number;
            nombre: string;
            activo: boolean;
        } | null;
        id: number;
        nombre: string;
        createdAt: Date;
        cajaId: number | null;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
}
