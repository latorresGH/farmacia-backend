import { UsuariosService } from './usuarios.service';
import { Rol } from '@prisma/client';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    listarEmpleados(): Promise<{
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
    }[]>;
    turnosHoy(): Promise<{
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
            empleadoId: number | null;
            cajaId: number | null;
        })[];
    }[]>;
    turnosSemana(): Promise<{
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
            empleadoId: number | null;
            cajaId: number | null;
        })[];
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
    actualizarEmpleado(id: number, body: {
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
    asignarCaja(id: number, body: {
        cajaId: number | null;
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
}
