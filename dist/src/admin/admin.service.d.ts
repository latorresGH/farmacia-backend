import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getPicoHora(fecha?: string): Promise<{
        hora: string;
        cantidad: number;
    }[]>;
    getRendimientoEmpleados(desde?: string, hasta?: string): Promise<{
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
    getComparativaSemanal(): Promise<{
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
    getResumenGeneral(): Promise<{
        turnosHoy: number;
        totalEmpleados: number;
        totalCajas: number;
        tiempoPromedioAtencionHoy: number;
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
