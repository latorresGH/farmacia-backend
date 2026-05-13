import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getResumen(): Promise<{
        turnosHoy: number;
        totalEmpleados: number;
        totalCajas: number;
        tiempoPromedioAtencionHoy: number;
    }>;
    getPicoHora(fecha?: string): Promise<{
        hora: string;
        cantidad: number;
    }[]>;
    getRendimiento(desde?: string, hasta?: string): Promise<{
        id: number;
        nombre: string;
        rol: import("@prisma/client").$Enums.Rol;
        caja: {
            id: number;
            nombre: string;
        } | null;
        totalTurnos: number;
        atendidos: number;
        cancelados: number;
        tiempoEsperaPromedio: number;
        tiempoAtencionPromedio: number;
        tasaAtencion: number;
    }[]>;
    getCancelaciones(desde?: string, hasta?: string): Promise<{
        total: number;
        porcentaje: number;
        porMotivo: {
            motivo: string;
            cantidad: number;
        }[];
        detalle: {
            tipoTurno: {
                nombre: string;
            };
            horaCreacion: Date;
            motivoCancelacion: string | null;
            empleado: {
                id: number;
                nombre: string;
            } | null;
        }[];
    }>;
    getComparativa(): Promise<{
        actual: {
            dia: string;
            cantidad: number;
        }[];
        anterior: {
            dia: string;
            cantidad: number;
        }[];
        totalActual: number;
        totalAnterior: number;
        variacion: number;
    }>;
    getTiempoEsperaPorTipo(desde?: string, hasta?: string): Promise<{
        id: number;
        nombre: string;
        prefijo: string;
        totalAtendidos: number;
        tiempoEsperaPromedio: number;
        tiempoAtencionPromedio: number;
    }[]>;
    getEvolucionDiaria(desde?: string, hasta?: string): Promise<{
        total: number;
        atendidos: number;
        cancelados: number;
        fecha: string;
    }[]>;
}
