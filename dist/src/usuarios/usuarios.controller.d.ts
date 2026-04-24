import { UsuariosService } from './usuarios.service';
import { Rol } from '@prisma/client';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
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
    turnosHoy(fecha?: string): Promise<{
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
    turnosSemana(fecha?: string): Promise<{
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
    actualizarEmpleado(id: number, body: {
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
    asignarCaja(id: number, body: {
        cajaId: number | null;
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
}
