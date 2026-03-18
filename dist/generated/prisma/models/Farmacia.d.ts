import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FarmaciaModel = runtime.Types.Result.DefaultSelection<Prisma.$FarmaciaPayload>;
export type AggregateFarmacia = {
    _count: FarmaciaCountAggregateOutputType | null;
    _avg: FarmaciaAvgAggregateOutputType | null;
    _sum: FarmaciaSumAggregateOutputType | null;
    _min: FarmaciaMinAggregateOutputType | null;
    _max: FarmaciaMaxAggregateOutputType | null;
};
export type FarmaciaAvgAggregateOutputType = {
    id: number | null;
};
export type FarmaciaSumAggregateOutputType = {
    id: number | null;
};
export type FarmaciaMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    direccion: string | null;
    telefono: string | null;
    email: string | null;
    createdAt: Date | null;
};
export type FarmaciaMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    direccion: string | null;
    telefono: string | null;
    email: string | null;
    createdAt: Date | null;
};
export type FarmaciaCountAggregateOutputType = {
    id: number;
    nombre: number;
    direccion: number;
    telefono: number;
    email: number;
    createdAt: number;
    _all: number;
};
export type FarmaciaAvgAggregateInputType = {
    id?: true;
};
export type FarmaciaSumAggregateInputType = {
    id?: true;
};
export type FarmaciaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    direccion?: true;
    telefono?: true;
    email?: true;
    createdAt?: true;
};
export type FarmaciaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    direccion?: true;
    telefono?: true;
    email?: true;
    createdAt?: true;
};
export type FarmaciaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    direccion?: true;
    telefono?: true;
    email?: true;
    createdAt?: true;
    _all?: true;
};
export type FarmaciaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmaciaWhereInput;
    orderBy?: Prisma.FarmaciaOrderByWithRelationInput | Prisma.FarmaciaOrderByWithRelationInput[];
    cursor?: Prisma.FarmaciaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FarmaciaCountAggregateInputType;
    _avg?: FarmaciaAvgAggregateInputType;
    _sum?: FarmaciaSumAggregateInputType;
    _min?: FarmaciaMinAggregateInputType;
    _max?: FarmaciaMaxAggregateInputType;
};
export type GetFarmaciaAggregateType<T extends FarmaciaAggregateArgs> = {
    [P in keyof T & keyof AggregateFarmacia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFarmacia[P]> : Prisma.GetScalarType<T[P], AggregateFarmacia[P]>;
};
export type FarmaciaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmaciaWhereInput;
    orderBy?: Prisma.FarmaciaOrderByWithAggregationInput | Prisma.FarmaciaOrderByWithAggregationInput[];
    by: Prisma.FarmaciaScalarFieldEnum[] | Prisma.FarmaciaScalarFieldEnum;
    having?: Prisma.FarmaciaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarmaciaCountAggregateInputType | true;
    _avg?: FarmaciaAvgAggregateInputType;
    _sum?: FarmaciaSumAggregateInputType;
    _min?: FarmaciaMinAggregateInputType;
    _max?: FarmaciaMaxAggregateInputType;
};
export type FarmaciaGroupByOutputType = {
    id: number;
    nombre: string;
    direccion: string | null;
    telefono: string | null;
    email: string | null;
    createdAt: Date;
    _count: FarmaciaCountAggregateOutputType | null;
    _avg: FarmaciaAvgAggregateOutputType | null;
    _sum: FarmaciaSumAggregateOutputType | null;
    _min: FarmaciaMinAggregateOutputType | null;
    _max: FarmaciaMaxAggregateOutputType | null;
};
type GetFarmaciaGroupByPayload<T extends FarmaciaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FarmaciaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FarmaciaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FarmaciaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FarmaciaGroupByOutputType[P]>;
}>>;
export type FarmaciaWhereInput = {
    AND?: Prisma.FarmaciaWhereInput | Prisma.FarmaciaWhereInput[];
    OR?: Prisma.FarmaciaWhereInput[];
    NOT?: Prisma.FarmaciaWhereInput | Prisma.FarmaciaWhereInput[];
    id?: Prisma.IntFilter<"Farmacia"> | number;
    nombre?: Prisma.StringFilter<"Farmacia"> | string;
    direccion?: Prisma.StringNullableFilter<"Farmacia"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Farmacia"> | string | null;
    email?: Prisma.StringNullableFilter<"Farmacia"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Farmacia"> | Date | string;
    usuarios?: Prisma.UsuarioListRelationFilter;
    turnos?: Prisma.TurnoListRelationFilter;
    tipos?: Prisma.TipoTurnoListRelationFilter;
    contadores?: Prisma.ContadorTurnoListRelationFilter;
    idempotencyKeys?: Prisma.IdempotencyKeyListRelationFilter;
};
export type FarmaciaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    usuarios?: Prisma.UsuarioOrderByRelationAggregateInput;
    turnos?: Prisma.TurnoOrderByRelationAggregateInput;
    tipos?: Prisma.TipoTurnoOrderByRelationAggregateInput;
    contadores?: Prisma.ContadorTurnoOrderByRelationAggregateInput;
    idempotencyKeys?: Prisma.IdempotencyKeyOrderByRelationAggregateInput;
};
export type FarmaciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FarmaciaWhereInput | Prisma.FarmaciaWhereInput[];
    OR?: Prisma.FarmaciaWhereInput[];
    NOT?: Prisma.FarmaciaWhereInput | Prisma.FarmaciaWhereInput[];
    nombre?: Prisma.StringFilter<"Farmacia"> | string;
    direccion?: Prisma.StringNullableFilter<"Farmacia"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Farmacia"> | string | null;
    email?: Prisma.StringNullableFilter<"Farmacia"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Farmacia"> | Date | string;
    usuarios?: Prisma.UsuarioListRelationFilter;
    turnos?: Prisma.TurnoListRelationFilter;
    tipos?: Prisma.TipoTurnoListRelationFilter;
    contadores?: Prisma.ContadorTurnoListRelationFilter;
    idempotencyKeys?: Prisma.IdempotencyKeyListRelationFilter;
}, "id">;
export type FarmaciaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FarmaciaCountOrderByAggregateInput;
    _avg?: Prisma.FarmaciaAvgOrderByAggregateInput;
    _max?: Prisma.FarmaciaMaxOrderByAggregateInput;
    _min?: Prisma.FarmaciaMinOrderByAggregateInput;
    _sum?: Prisma.FarmaciaSumOrderByAggregateInput;
};
export type FarmaciaScalarWhereWithAggregatesInput = {
    AND?: Prisma.FarmaciaScalarWhereWithAggregatesInput | Prisma.FarmaciaScalarWhereWithAggregatesInput[];
    OR?: Prisma.FarmaciaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FarmaciaScalarWhereWithAggregatesInput | Prisma.FarmaciaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Farmacia"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Farmacia"> | string;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"Farmacia"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Farmacia"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Farmacia"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Farmacia"> | Date | string;
};
export type FarmaciaCreateInput = {
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUncheckedCreateInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaCreateManyInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
};
export type FarmaciaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmaciaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmaciaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FarmaciaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FarmaciaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FarmaciaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FarmaciaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FarmaciaScalarRelationFilter = {
    is?: Prisma.FarmaciaWhereInput;
    isNot?: Prisma.FarmaciaWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FarmaciaCreateNestedOneWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutUsuariosInput, Prisma.FarmaciaUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutUsuariosInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutUsuariosInput, Prisma.FarmaciaUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutUsuariosInput;
    upsert?: Prisma.FarmaciaUpsertWithoutUsuariosInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmaciaUpdateToOneWithWhereWithoutUsuariosInput, Prisma.FarmaciaUpdateWithoutUsuariosInput>, Prisma.FarmaciaUncheckedUpdateWithoutUsuariosInput>;
};
export type FarmaciaCreateNestedOneWithoutTiposInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutTiposInput, Prisma.FarmaciaUncheckedCreateWithoutTiposInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutTiposInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaUpdateOneRequiredWithoutTiposNestedInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutTiposInput, Prisma.FarmaciaUncheckedCreateWithoutTiposInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutTiposInput;
    upsert?: Prisma.FarmaciaUpsertWithoutTiposInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmaciaUpdateToOneWithWhereWithoutTiposInput, Prisma.FarmaciaUpdateWithoutTiposInput>, Prisma.FarmaciaUncheckedUpdateWithoutTiposInput>;
};
export type FarmaciaCreateNestedOneWithoutTurnosInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutTurnosInput, Prisma.FarmaciaUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutTurnosInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutTurnosInput, Prisma.FarmaciaUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutTurnosInput;
    upsert?: Prisma.FarmaciaUpsertWithoutTurnosInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmaciaUpdateToOneWithWhereWithoutTurnosInput, Prisma.FarmaciaUpdateWithoutTurnosInput>, Prisma.FarmaciaUncheckedUpdateWithoutTurnosInput>;
};
export type FarmaciaCreateNestedOneWithoutContadoresInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutContadoresInput, Prisma.FarmaciaUncheckedCreateWithoutContadoresInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutContadoresInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaUpdateOneRequiredWithoutContadoresNestedInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutContadoresInput, Prisma.FarmaciaUncheckedCreateWithoutContadoresInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutContadoresInput;
    upsert?: Prisma.FarmaciaUpsertWithoutContadoresInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmaciaUpdateToOneWithWhereWithoutContadoresInput, Prisma.FarmaciaUpdateWithoutContadoresInput>, Prisma.FarmaciaUncheckedUpdateWithoutContadoresInput>;
};
export type FarmaciaCreateNestedOneWithoutIdempotencyKeysInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutIdempotencyKeysInput, Prisma.FarmaciaUncheckedCreateWithoutIdempotencyKeysInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutIdempotencyKeysInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaUpdateOneRequiredWithoutIdempotencyKeysNestedInput = {
    create?: Prisma.XOR<Prisma.FarmaciaCreateWithoutIdempotencyKeysInput, Prisma.FarmaciaUncheckedCreateWithoutIdempotencyKeysInput>;
    connectOrCreate?: Prisma.FarmaciaCreateOrConnectWithoutIdempotencyKeysInput;
    upsert?: Prisma.FarmaciaUpsertWithoutIdempotencyKeysInput;
    connect?: Prisma.FarmaciaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmaciaUpdateToOneWithWhereWithoutIdempotencyKeysInput, Prisma.FarmaciaUpdateWithoutIdempotencyKeysInput>, Prisma.FarmaciaUncheckedUpdateWithoutIdempotencyKeysInput>;
};
export type FarmaciaCreateWithoutUsuariosInput = {
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    turnos?: Prisma.TurnoCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUncheckedCreateWithoutUsuariosInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.FarmaciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutUsuariosInput, Prisma.FarmaciaUncheckedCreateWithoutUsuariosInput>;
};
export type FarmaciaUpsertWithoutUsuariosInput = {
    update: Prisma.XOR<Prisma.FarmaciaUpdateWithoutUsuariosInput, Prisma.FarmaciaUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutUsuariosInput, Prisma.FarmaciaUncheckedCreateWithoutUsuariosInput>;
    where?: Prisma.FarmaciaWhereInput;
};
export type FarmaciaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: Prisma.FarmaciaWhereInput;
    data: Prisma.XOR<Prisma.FarmaciaUpdateWithoutUsuariosInput, Prisma.FarmaciaUncheckedUpdateWithoutUsuariosInput>;
};
export type FarmaciaUpdateWithoutUsuariosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaUncheckedUpdateWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaCreateWithoutTiposInput = {
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUncheckedCreateWithoutTiposInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaCreateOrConnectWithoutTiposInput = {
    where: Prisma.FarmaciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutTiposInput, Prisma.FarmaciaUncheckedCreateWithoutTiposInput>;
};
export type FarmaciaUpsertWithoutTiposInput = {
    update: Prisma.XOR<Prisma.FarmaciaUpdateWithoutTiposInput, Prisma.FarmaciaUncheckedUpdateWithoutTiposInput>;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutTiposInput, Prisma.FarmaciaUncheckedCreateWithoutTiposInput>;
    where?: Prisma.FarmaciaWhereInput;
};
export type FarmaciaUpdateToOneWithWhereWithoutTiposInput = {
    where?: Prisma.FarmaciaWhereInput;
    data: Prisma.XOR<Prisma.FarmaciaUpdateWithoutTiposInput, Prisma.FarmaciaUncheckedUpdateWithoutTiposInput>;
};
export type FarmaciaUpdateWithoutTiposInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaUncheckedUpdateWithoutTiposInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaCreateWithoutTurnosInput = {
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUncheckedCreateWithoutTurnosInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaCreateOrConnectWithoutTurnosInput = {
    where: Prisma.FarmaciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutTurnosInput, Prisma.FarmaciaUncheckedCreateWithoutTurnosInput>;
};
export type FarmaciaUpsertWithoutTurnosInput = {
    update: Prisma.XOR<Prisma.FarmaciaUpdateWithoutTurnosInput, Prisma.FarmaciaUncheckedUpdateWithoutTurnosInput>;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutTurnosInput, Prisma.FarmaciaUncheckedCreateWithoutTurnosInput>;
    where?: Prisma.FarmaciaWhereInput;
};
export type FarmaciaUpdateToOneWithWhereWithoutTurnosInput = {
    where?: Prisma.FarmaciaWhereInput;
    data: Prisma.XOR<Prisma.FarmaciaUpdateWithoutTurnosInput, Prisma.FarmaciaUncheckedUpdateWithoutTurnosInput>;
};
export type FarmaciaUpdateWithoutTurnosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaUncheckedUpdateWithoutTurnosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaCreateWithoutContadoresInput = {
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUncheckedCreateWithoutContadoresInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaCreateOrConnectWithoutContadoresInput = {
    where: Prisma.FarmaciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutContadoresInput, Prisma.FarmaciaUncheckedCreateWithoutContadoresInput>;
};
export type FarmaciaUpsertWithoutContadoresInput = {
    update: Prisma.XOR<Prisma.FarmaciaUpdateWithoutContadoresInput, Prisma.FarmaciaUncheckedUpdateWithoutContadoresInput>;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutContadoresInput, Prisma.FarmaciaUncheckedCreateWithoutContadoresInput>;
    where?: Prisma.FarmaciaWhereInput;
};
export type FarmaciaUpdateToOneWithWhereWithoutContadoresInput = {
    where?: Prisma.FarmaciaWhereInput;
    data: Prisma.XOR<Prisma.FarmaciaUpdateWithoutContadoresInput, Prisma.FarmaciaUncheckedUpdateWithoutContadoresInput>;
};
export type FarmaciaUpdateWithoutContadoresInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaUncheckedUpdateWithoutContadoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaCreateWithoutIdempotencyKeysInput = {
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaUncheckedCreateWithoutIdempotencyKeysInput = {
    id?: number;
    nombre: string;
    direccion?: string | null;
    telefono?: string | null;
    email?: string | null;
    createdAt?: Date | string;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutFarmaciaInput;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    tipos?: Prisma.TipoTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutFarmaciaInput;
};
export type FarmaciaCreateOrConnectWithoutIdempotencyKeysInput = {
    where: Prisma.FarmaciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutIdempotencyKeysInput, Prisma.FarmaciaUncheckedCreateWithoutIdempotencyKeysInput>;
};
export type FarmaciaUpsertWithoutIdempotencyKeysInput = {
    update: Prisma.XOR<Prisma.FarmaciaUpdateWithoutIdempotencyKeysInput, Prisma.FarmaciaUncheckedUpdateWithoutIdempotencyKeysInput>;
    create: Prisma.XOR<Prisma.FarmaciaCreateWithoutIdempotencyKeysInput, Prisma.FarmaciaUncheckedCreateWithoutIdempotencyKeysInput>;
    where?: Prisma.FarmaciaWhereInput;
};
export type FarmaciaUpdateToOneWithWhereWithoutIdempotencyKeysInput = {
    where?: Prisma.FarmaciaWhereInput;
    data: Prisma.XOR<Prisma.FarmaciaUpdateWithoutIdempotencyKeysInput, Prisma.FarmaciaUncheckedUpdateWithoutIdempotencyKeysInput>;
};
export type FarmaciaUpdateWithoutIdempotencyKeysInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaUncheckedUpdateWithoutIdempotencyKeysInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutFarmaciaNestedInput;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    tipos?: Prisma.TipoTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput;
};
export type FarmaciaCountOutputType = {
    usuarios: number;
    turnos: number;
    tipos: number;
    contadores: number;
    idempotencyKeys: number;
};
export type FarmaciaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | FarmaciaCountOutputTypeCountUsuariosArgs;
    turnos?: boolean | FarmaciaCountOutputTypeCountTurnosArgs;
    tipos?: boolean | FarmaciaCountOutputTypeCountTiposArgs;
    contadores?: boolean | FarmaciaCountOutputTypeCountContadoresArgs;
    idempotencyKeys?: boolean | FarmaciaCountOutputTypeCountIdempotencyKeysArgs;
};
export type FarmaciaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaCountOutputTypeSelect<ExtArgs> | null;
};
export type FarmaciaCountOutputTypeCountUsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
};
export type FarmaciaCountOutputTypeCountTurnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
};
export type FarmaciaCountOutputTypeCountTiposArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoTurnoWhereInput;
};
export type FarmaciaCountOutputTypeCountContadoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContadorTurnoWhereInput;
};
export type FarmaciaCountOutputTypeCountIdempotencyKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
};
export type FarmaciaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    telefono?: boolean;
    email?: boolean;
    createdAt?: boolean;
    usuarios?: boolean | Prisma.Farmacia$usuariosArgs<ExtArgs>;
    turnos?: boolean | Prisma.Farmacia$turnosArgs<ExtArgs>;
    tipos?: boolean | Prisma.Farmacia$tiposArgs<ExtArgs>;
    contadores?: boolean | Prisma.Farmacia$contadoresArgs<ExtArgs>;
    idempotencyKeys?: boolean | Prisma.Farmacia$idempotencyKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.FarmaciaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farmacia"]>;
export type FarmaciaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    telefono?: boolean;
    email?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["farmacia"]>;
export type FarmaciaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    telefono?: boolean;
    email?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["farmacia"]>;
export type FarmaciaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    telefono?: boolean;
    email?: boolean;
    createdAt?: boolean;
};
export type FarmaciaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "direccion" | "telefono" | "email" | "createdAt", ExtArgs["result"]["farmacia"]>;
export type FarmaciaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | Prisma.Farmacia$usuariosArgs<ExtArgs>;
    turnos?: boolean | Prisma.Farmacia$turnosArgs<ExtArgs>;
    tipos?: boolean | Prisma.Farmacia$tiposArgs<ExtArgs>;
    contadores?: boolean | Prisma.Farmacia$contadoresArgs<ExtArgs>;
    idempotencyKeys?: boolean | Prisma.Farmacia$idempotencyKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.FarmaciaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FarmaciaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type FarmaciaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $FarmaciaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Farmacia";
    objects: {
        usuarios: Prisma.$UsuarioPayload<ExtArgs>[];
        turnos: Prisma.$TurnoPayload<ExtArgs>[];
        tipos: Prisma.$TipoTurnoPayload<ExtArgs>[];
        contadores: Prisma.$ContadorTurnoPayload<ExtArgs>[];
        idempotencyKeys: Prisma.$IdempotencyKeyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        direccion: string | null;
        telefono: string | null;
        email: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["farmacia"]>;
    composites: {};
};
export type FarmaciaGetPayload<S extends boolean | null | undefined | FarmaciaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload, S>;
export type FarmaciaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FarmaciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FarmaciaCountAggregateInputType | true;
};
export interface FarmaciaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Farmacia'];
        meta: {
            name: 'Farmacia';
        };
    };
    findUnique<T extends FarmaciaFindUniqueArgs>(args: Prisma.SelectSubset<T, FarmaciaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FarmaciaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FarmaciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FarmaciaFindFirstArgs>(args?: Prisma.SelectSubset<T, FarmaciaFindFirstArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FarmaciaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FarmaciaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FarmaciaFindManyArgs>(args?: Prisma.SelectSubset<T, FarmaciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FarmaciaCreateArgs>(args: Prisma.SelectSubset<T, FarmaciaCreateArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FarmaciaCreateManyArgs>(args?: Prisma.SelectSubset<T, FarmaciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FarmaciaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FarmaciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FarmaciaDeleteArgs>(args: Prisma.SelectSubset<T, FarmaciaDeleteArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FarmaciaUpdateArgs>(args: Prisma.SelectSubset<T, FarmaciaUpdateArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FarmaciaDeleteManyArgs>(args?: Prisma.SelectSubset<T, FarmaciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FarmaciaUpdateManyArgs>(args: Prisma.SelectSubset<T, FarmaciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FarmaciaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FarmaciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FarmaciaUpsertArgs>(args: Prisma.SelectSubset<T, FarmaciaUpsertArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FarmaciaCountArgs>(args?: Prisma.Subset<T, FarmaciaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FarmaciaCountAggregateOutputType> : number>;
    aggregate<T extends FarmaciaAggregateArgs>(args: Prisma.Subset<T, FarmaciaAggregateArgs>): Prisma.PrismaPromise<GetFarmaciaAggregateType<T>>;
    groupBy<T extends FarmaciaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FarmaciaGroupByArgs['orderBy'];
    } : {
        orderBy?: FarmaciaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FarmaciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmaciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FarmaciaFieldRefs;
}
export interface Prisma__FarmaciaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuarios<T extends Prisma.Farmacia$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmacia$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    turnos<T extends Prisma.Farmacia$turnosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmacia$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tipos<T extends Prisma.Farmacia$tiposArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmacia$tiposArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contadores<T extends Prisma.Farmacia$contadoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmacia$contadoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    idempotencyKeys<T extends Prisma.Farmacia$idempotencyKeysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farmacia$idempotencyKeysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FarmaciaFieldRefs {
    readonly id: Prisma.FieldRef<"Farmacia", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Farmacia", 'String'>;
    readonly direccion: Prisma.FieldRef<"Farmacia", 'String'>;
    readonly telefono: Prisma.FieldRef<"Farmacia", 'String'>;
    readonly email: Prisma.FieldRef<"Farmacia", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Farmacia", 'DateTime'>;
}
export type FarmaciaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where?: Prisma.FarmaciaWhereInput;
    orderBy?: Prisma.FarmaciaOrderByWithRelationInput | Prisma.FarmaciaOrderByWithRelationInput[];
    cursor?: Prisma.FarmaciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FarmaciaScalarFieldEnum | Prisma.FarmaciaScalarFieldEnum[];
};
export type FarmaciaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where?: Prisma.FarmaciaWhereInput;
    orderBy?: Prisma.FarmaciaOrderByWithRelationInput | Prisma.FarmaciaOrderByWithRelationInput[];
    cursor?: Prisma.FarmaciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FarmaciaScalarFieldEnum | Prisma.FarmaciaScalarFieldEnum[];
};
export type FarmaciaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where?: Prisma.FarmaciaWhereInput;
    orderBy?: Prisma.FarmaciaOrderByWithRelationInput | Prisma.FarmaciaOrderByWithRelationInput[];
    cursor?: Prisma.FarmaciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FarmaciaScalarFieldEnum | Prisma.FarmaciaScalarFieldEnum[];
};
export type FarmaciaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FarmaciaCreateInput, Prisma.FarmaciaUncheckedCreateInput>;
};
export type FarmaciaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FarmaciaCreateManyInput | Prisma.FarmaciaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FarmaciaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    data: Prisma.FarmaciaCreateManyInput | Prisma.FarmaciaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FarmaciaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FarmaciaUpdateInput, Prisma.FarmaciaUncheckedUpdateInput>;
    where: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FarmaciaUpdateManyMutationInput, Prisma.FarmaciaUncheckedUpdateManyInput>;
    where?: Prisma.FarmaciaWhereInput;
    limit?: number;
};
export type FarmaciaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FarmaciaUpdateManyMutationInput, Prisma.FarmaciaUncheckedUpdateManyInput>;
    where?: Prisma.FarmaciaWhereInput;
    limit?: number;
};
export type FarmaciaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where: Prisma.FarmaciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmaciaCreateInput, Prisma.FarmaciaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FarmaciaUpdateInput, Prisma.FarmaciaUncheckedUpdateInput>;
};
export type FarmaciaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
    where: Prisma.FarmaciaWhereUniqueInput;
};
export type FarmaciaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmaciaWhereInput;
    limit?: number;
};
export type Farmacia$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type Farmacia$turnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithRelationInput | Prisma.TurnoOrderByWithRelationInput[];
    cursor?: Prisma.TurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TurnoScalarFieldEnum | Prisma.TurnoScalarFieldEnum[];
};
export type Farmacia$tiposArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    where?: Prisma.TipoTurnoWhereInput;
    orderBy?: Prisma.TipoTurnoOrderByWithRelationInput | Prisma.TipoTurnoOrderByWithRelationInput[];
    cursor?: Prisma.TipoTurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TipoTurnoScalarFieldEnum | Prisma.TipoTurnoScalarFieldEnum[];
};
export type Farmacia$contadoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    where?: Prisma.ContadorTurnoWhereInput;
    orderBy?: Prisma.ContadorTurnoOrderByWithRelationInput | Prisma.ContadorTurnoOrderByWithRelationInput[];
    cursor?: Prisma.ContadorTurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContadorTurnoScalarFieldEnum | Prisma.ContadorTurnoScalarFieldEnum[];
};
export type Farmacia$idempotencyKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where?: Prisma.IdempotencyKeyWhereInput;
    orderBy?: Prisma.IdempotencyKeyOrderByWithRelationInput | Prisma.IdempotencyKeyOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdempotencyKeyScalarFieldEnum | Prisma.IdempotencyKeyScalarFieldEnum[];
};
export type FarmaciaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FarmaciaSelect<ExtArgs> | null;
    omit?: Prisma.FarmaciaOmit<ExtArgs> | null;
    include?: Prisma.FarmaciaInclude<ExtArgs> | null;
};
export {};
