export declare const EstadoTurno: {
    readonly PENDIENTE: "PENDIENTE";
    readonly LLAMADO: "LLAMADO";
    readonly ATENDIDO: "ATENDIDO";
    readonly CANCELADO: "CANCELADO";
};
export type EstadoTurno = (typeof EstadoTurno)[keyof typeof EstadoTurno];
export declare const Rol: {
    readonly ADMIN: "ADMIN";
    readonly EMPLEADO: "EMPLEADO";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
