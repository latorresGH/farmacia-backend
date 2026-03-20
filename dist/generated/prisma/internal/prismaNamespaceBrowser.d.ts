import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Farmacia: "Farmacia";
    readonly Usuario: "Usuario";
    readonly TipoTurno: "TipoTurno";
    readonly Turno: "Turno";
    readonly ContadorTurno: "ContadorTurno";
    readonly IdempotencyKey: "IdempotencyKey";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const FarmaciaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly direccion: "direccion";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly createdAt: "createdAt";
};
export type FarmaciaScalarFieldEnum = (typeof FarmaciaScalarFieldEnum)[keyof typeof FarmaciaScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly email: "email";
    readonly password: "password";
    readonly rol: "rol";
    readonly farmaciaId: "farmaciaId";
    readonly createdAt: "createdAt";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const TipoTurnoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly prefijo: "prefijo";
    readonly duracionMin: "duracionMin";
    readonly farmaciaId: "farmaciaId";
};
export type TipoTurnoScalarFieldEnum = (typeof TipoTurnoScalarFieldEnum)[keyof typeof TipoTurnoScalarFieldEnum];
export declare const TurnoScalarFieldEnum: {
    readonly id: "id";
    readonly numero: "numero";
    readonly codigo: "codigo";
    readonly estado: "estado";
    readonly tipoTurnoId: "tipoTurnoId";
    readonly farmaciaId: "farmaciaId";
    readonly horaCreacion: "horaCreacion";
    readonly horaLlamado: "horaLlamado";
};
export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum];
export declare const ContadorTurnoScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly ultimoNumero: "ultimoNumero";
    readonly farmaciaId: "farmaciaId";
    readonly tipoTurnoId: "tipoTurnoId";
};
export type ContadorTurnoScalarFieldEnum = (typeof ContadorTurnoScalarFieldEnum)[keyof typeof ContadorTurnoScalarFieldEnum];
export declare const IdempotencyKeyScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly turnoId: "turnoId";
    readonly farmaciaId: "farmaciaId";
    readonly createdAt: "createdAt";
};
export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
