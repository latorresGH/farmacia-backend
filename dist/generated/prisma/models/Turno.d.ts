import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TurnoModel = runtime.Types.Result.DefaultSelection<Prisma.$TurnoPayload>;
export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null;
    _avg: TurnoAvgAggregateOutputType | null;
    _sum: TurnoSumAggregateOutputType | null;
    _min: TurnoMinAggregateOutputType | null;
    _max: TurnoMaxAggregateOutputType | null;
};
export type TurnoAvgAggregateOutputType = {
    id: number | null;
    numero: number | null;
    tipoTurnoId: number | null;
    farmaciaId: number | null;
};
export type TurnoSumAggregateOutputType = {
    id: number | null;
    numero: number | null;
    tipoTurnoId: number | null;
    farmaciaId: number | null;
};
export type TurnoMinAggregateOutputType = {
    id: number | null;
    numero: number | null;
    codigo: string | null;
    estado: $Enums.EstadoTurno | null;
    tipoTurnoId: number | null;
    farmaciaId: number | null;
    horaCreacion: Date | null;
    horaLlamado: Date | null;
};
export type TurnoMaxAggregateOutputType = {
    id: number | null;
    numero: number | null;
    codigo: string | null;
    estado: $Enums.EstadoTurno | null;
    tipoTurnoId: number | null;
    farmaciaId: number | null;
    horaCreacion: Date | null;
    horaLlamado: Date | null;
};
export type TurnoCountAggregateOutputType = {
    id: number;
    numero: number;
    codigo: number;
    estado: number;
    tipoTurnoId: number;
    farmaciaId: number;
    horaCreacion: number;
    horaLlamado: number;
    _all: number;
};
export type TurnoAvgAggregateInputType = {
    id?: true;
    numero?: true;
    tipoTurnoId?: true;
    farmaciaId?: true;
};
export type TurnoSumAggregateInputType = {
    id?: true;
    numero?: true;
    tipoTurnoId?: true;
    farmaciaId?: true;
};
export type TurnoMinAggregateInputType = {
    id?: true;
    numero?: true;
    codigo?: true;
    estado?: true;
    tipoTurnoId?: true;
    farmaciaId?: true;
    horaCreacion?: true;
    horaLlamado?: true;
};
export type TurnoMaxAggregateInputType = {
    id?: true;
    numero?: true;
    codigo?: true;
    estado?: true;
    tipoTurnoId?: true;
    farmaciaId?: true;
    horaCreacion?: true;
    horaLlamado?: true;
};
export type TurnoCountAggregateInputType = {
    id?: true;
    numero?: true;
    codigo?: true;
    estado?: true;
    tipoTurnoId?: true;
    farmaciaId?: true;
    horaCreacion?: true;
    horaLlamado?: true;
    _all?: true;
};
export type TurnoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithRelationInput | Prisma.TurnoOrderByWithRelationInput[];
    cursor?: Prisma.TurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TurnoCountAggregateInputType;
    _avg?: TurnoAvgAggregateInputType;
    _sum?: TurnoSumAggregateInputType;
    _min?: TurnoMinAggregateInputType;
    _max?: TurnoMaxAggregateInputType;
};
export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
    [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTurno[P]> : Prisma.GetScalarType<T[P], AggregateTurno[P]>;
};
export type TurnoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithAggregationInput | Prisma.TurnoOrderByWithAggregationInput[];
    by: Prisma.TurnoScalarFieldEnum[] | Prisma.TurnoScalarFieldEnum;
    having?: Prisma.TurnoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TurnoCountAggregateInputType | true;
    _avg?: TurnoAvgAggregateInputType;
    _sum?: TurnoSumAggregateInputType;
    _min?: TurnoMinAggregateInputType;
    _max?: TurnoMaxAggregateInputType;
};
export type TurnoGroupByOutputType = {
    id: number;
    numero: number;
    codigo: string;
    estado: $Enums.EstadoTurno;
    tipoTurnoId: number;
    farmaciaId: number;
    horaCreacion: Date;
    horaLlamado: Date | null;
    _count: TurnoCountAggregateOutputType | null;
    _avg: TurnoAvgAggregateOutputType | null;
    _sum: TurnoSumAggregateOutputType | null;
    _min: TurnoMinAggregateOutputType | null;
    _max: TurnoMaxAggregateOutputType | null;
};
type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TurnoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TurnoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TurnoGroupByOutputType[P]>;
}>>;
export type TurnoWhereInput = {
    AND?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    OR?: Prisma.TurnoWhereInput[];
    NOT?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    id?: Prisma.IntFilter<"Turno"> | number;
    numero?: Prisma.IntFilter<"Turno"> | number;
    codigo?: Prisma.StringFilter<"Turno"> | string;
    estado?: Prisma.EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFilter<"Turno"> | number;
    farmaciaId?: Prisma.IntFilter<"Turno"> | number;
    horaCreacion?: Prisma.DateTimeFilter<"Turno"> | Date | string;
    horaLlamado?: Prisma.DateTimeNullableFilter<"Turno"> | Date | string | null;
    tipoTurno?: Prisma.XOR<Prisma.TipoTurnoScalarRelationFilter, Prisma.TipoTurnoWhereInput>;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
    idempotencyKeys?: Prisma.IdempotencyKeyListRelationFilter;
};
export type TurnoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    horaCreacion?: Prisma.SortOrder;
    horaLlamado?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipoTurno?: Prisma.TipoTurnoOrderByWithRelationInput;
    farmacia?: Prisma.FarmaciaOrderByWithRelationInput;
    idempotencyKeys?: Prisma.IdempotencyKeyOrderByRelationAggregateInput;
};
export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    OR?: Prisma.TurnoWhereInput[];
    NOT?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    numero?: Prisma.IntFilter<"Turno"> | number;
    codigo?: Prisma.StringFilter<"Turno"> | string;
    estado?: Prisma.EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFilter<"Turno"> | number;
    farmaciaId?: Prisma.IntFilter<"Turno"> | number;
    horaCreacion?: Prisma.DateTimeFilter<"Turno"> | Date | string;
    horaLlamado?: Prisma.DateTimeNullableFilter<"Turno"> | Date | string | null;
    tipoTurno?: Prisma.XOR<Prisma.TipoTurnoScalarRelationFilter, Prisma.TipoTurnoWhereInput>;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
    idempotencyKeys?: Prisma.IdempotencyKeyListRelationFilter;
}, "id">;
export type TurnoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    horaCreacion?: Prisma.SortOrder;
    horaLlamado?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TurnoCountOrderByAggregateInput;
    _avg?: Prisma.TurnoAvgOrderByAggregateInput;
    _max?: Prisma.TurnoMaxOrderByAggregateInput;
    _min?: Prisma.TurnoMinOrderByAggregateInput;
    _sum?: Prisma.TurnoSumOrderByAggregateInput;
};
export type TurnoScalarWhereWithAggregatesInput = {
    AND?: Prisma.TurnoScalarWhereWithAggregatesInput | Prisma.TurnoScalarWhereWithAggregatesInput[];
    OR?: Prisma.TurnoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TurnoScalarWhereWithAggregatesInput | Prisma.TurnoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    numero?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    codigo?: Prisma.StringWithAggregatesFilter<"Turno"> | string;
    estado?: Prisma.EnumEstadoTurnoWithAggregatesFilter<"Turno"> | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    farmaciaId?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    horaCreacion?: Prisma.DateTimeWithAggregatesFilter<"Turno"> | Date | string;
    horaLlamado?: Prisma.DateTimeNullableWithAggregatesFilter<"Turno"> | Date | string | null;
};
export type TurnoCreateInput = {
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    tipoTurno: Prisma.TipoTurnoCreateNestedOneWithoutTurnosInput;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutTurnosInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutTurnoInput;
};
export type TurnoUncheckedCreateInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    tipoTurnoId: number;
    farmaciaId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutTurnoInput;
};
export type TurnoUpdateInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tipoTurno?: Prisma.TipoTurnoUpdateOneRequiredWithoutTurnosNestedInput;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutTurnosNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutTurnoNestedInput;
};
export type TurnoCreateManyInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    tipoTurnoId: number;
    farmaciaId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
};
export type TurnoUpdateManyMutationInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TurnoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TurnoListRelationFilter = {
    every?: Prisma.TurnoWhereInput;
    some?: Prisma.TurnoWhereInput;
    none?: Prisma.TurnoWhereInput;
};
export type TurnoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TurnoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    horaCreacion?: Prisma.SortOrder;
    horaLlamado?: Prisma.SortOrder;
};
export type TurnoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TurnoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    horaCreacion?: Prisma.SortOrder;
    horaLlamado?: Prisma.SortOrder;
};
export type TurnoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    horaCreacion?: Prisma.SortOrder;
    horaLlamado?: Prisma.SortOrder;
};
export type TurnoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TurnoNullableScalarRelationFilter = {
    is?: Prisma.TurnoWhereInput | null;
    isNot?: Prisma.TurnoWhereInput | null;
};
export type TurnoCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutFarmaciaInput, Prisma.TurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TurnoCreateWithoutFarmaciaInput[] | Prisma.TurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TurnoCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.TurnoCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutFarmaciaInput, Prisma.TurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TurnoCreateWithoutFarmaciaInput[] | Prisma.TurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TurnoCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.TurnoCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutFarmaciaInput, Prisma.TurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TurnoCreateWithoutFarmaciaInput[] | Prisma.TurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TurnoCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.TurnoUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.TurnoCreateManyFarmaciaInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.TurnoUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutFarmaciaInput | Prisma.TurnoUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutFarmaciaInput, Prisma.TurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TurnoCreateWithoutFarmaciaInput[] | Prisma.TurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TurnoCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.TurnoUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.TurnoCreateManyFarmaciaInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.TurnoUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutFarmaciaInput | Prisma.TurnoUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoCreateNestedManyWithoutTipoTurnoInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutTipoTurnoInput, Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.TurnoCreateWithoutTipoTurnoInput[] | Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput[];
    createMany?: Prisma.TurnoCreateManyTipoTurnoInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUncheckedCreateNestedManyWithoutTipoTurnoInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutTipoTurnoInput, Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.TurnoCreateWithoutTipoTurnoInput[] | Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput[];
    createMany?: Prisma.TurnoCreateManyTipoTurnoInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUpdateManyWithoutTipoTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutTipoTurnoInput, Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.TurnoCreateWithoutTipoTurnoInput[] | Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutTipoTurnoInput | Prisma.TurnoUpsertWithWhereUniqueWithoutTipoTurnoInput[];
    createMany?: Prisma.TurnoCreateManyTipoTurnoInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutTipoTurnoInput | Prisma.TurnoUpdateWithWhereUniqueWithoutTipoTurnoInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutTipoTurnoInput | Prisma.TurnoUpdateManyWithWhereWithoutTipoTurnoInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutTipoTurnoInput, Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.TurnoCreateWithoutTipoTurnoInput[] | Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.TurnoCreateOrConnectWithoutTipoTurnoInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutTipoTurnoInput | Prisma.TurnoUpsertWithWhereUniqueWithoutTipoTurnoInput[];
    createMany?: Prisma.TurnoCreateManyTipoTurnoInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutTipoTurnoInput | Prisma.TurnoUpdateWithWhereUniqueWithoutTipoTurnoInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutTipoTurnoInput | Prisma.TurnoUpdateManyWithWhereWithoutTipoTurnoInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type EnumEstadoTurnoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTurno;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type TurnoCreateNestedOneWithoutIdempotencyKeysInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutIdempotencyKeysInput, Prisma.TurnoUncheckedCreateWithoutIdempotencyKeysInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutIdempotencyKeysInput;
    connect?: Prisma.TurnoWhereUniqueInput;
};
export type TurnoUpdateOneWithoutIdempotencyKeysNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutIdempotencyKeysInput, Prisma.TurnoUncheckedCreateWithoutIdempotencyKeysInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutIdempotencyKeysInput;
    upsert?: Prisma.TurnoUpsertWithoutIdempotencyKeysInput;
    disconnect?: Prisma.TurnoWhereInput | boolean;
    delete?: Prisma.TurnoWhereInput | boolean;
    connect?: Prisma.TurnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TurnoUpdateToOneWithWhereWithoutIdempotencyKeysInput, Prisma.TurnoUpdateWithoutIdempotencyKeysInput>, Prisma.TurnoUncheckedUpdateWithoutIdempotencyKeysInput>;
};
export type TurnoCreateWithoutFarmaciaInput = {
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    tipoTurno: Prisma.TipoTurnoCreateNestedOneWithoutTurnosInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutFarmaciaInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    tipoTurnoId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutFarmaciaInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutFarmaciaInput, Prisma.TurnoUncheckedCreateWithoutFarmaciaInput>;
};
export type TurnoCreateManyFarmaciaInputEnvelope = {
    data: Prisma.TurnoCreateManyFarmaciaInput | Prisma.TurnoCreateManyFarmaciaInput[];
    skipDuplicates?: boolean;
};
export type TurnoUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.TurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutFarmaciaInput, Prisma.TurnoUncheckedUpdateWithoutFarmaciaInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutFarmaciaInput, Prisma.TurnoUncheckedCreateWithoutFarmaciaInput>;
};
export type TurnoUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.TurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutFarmaciaInput, Prisma.TurnoUncheckedUpdateWithoutFarmaciaInput>;
};
export type TurnoUpdateManyWithWhereWithoutFarmaciaInput = {
    where: Prisma.TurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyWithoutFarmaciaInput>;
};
export type TurnoScalarWhereInput = {
    AND?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
    OR?: Prisma.TurnoScalarWhereInput[];
    NOT?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
    id?: Prisma.IntFilter<"Turno"> | number;
    numero?: Prisma.IntFilter<"Turno"> | number;
    codigo?: Prisma.StringFilter<"Turno"> | string;
    estado?: Prisma.EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFilter<"Turno"> | number;
    farmaciaId?: Prisma.IntFilter<"Turno"> | number;
    horaCreacion?: Prisma.DateTimeFilter<"Turno"> | Date | string;
    horaLlamado?: Prisma.DateTimeNullableFilter<"Turno"> | Date | string | null;
};
export type TurnoCreateWithoutTipoTurnoInput = {
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutTurnosInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutTipoTurnoInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    farmaciaId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutTipoTurnoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutTipoTurnoInput, Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput>;
};
export type TurnoCreateManyTipoTurnoInputEnvelope = {
    data: Prisma.TurnoCreateManyTipoTurnoInput | Prisma.TurnoCreateManyTipoTurnoInput[];
    skipDuplicates?: boolean;
};
export type TurnoUpsertWithWhereUniqueWithoutTipoTurnoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutTipoTurnoInput, Prisma.TurnoUncheckedUpdateWithoutTipoTurnoInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutTipoTurnoInput, Prisma.TurnoUncheckedCreateWithoutTipoTurnoInput>;
};
export type TurnoUpdateWithWhereUniqueWithoutTipoTurnoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutTipoTurnoInput, Prisma.TurnoUncheckedUpdateWithoutTipoTurnoInput>;
};
export type TurnoUpdateManyWithWhereWithoutTipoTurnoInput = {
    where: Prisma.TurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyWithoutTipoTurnoInput>;
};
export type TurnoCreateWithoutIdempotencyKeysInput = {
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
    tipoTurno: Prisma.TipoTurnoCreateNestedOneWithoutTurnosInput;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutTurnosInput;
};
export type TurnoUncheckedCreateWithoutIdempotencyKeysInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    tipoTurnoId: number;
    farmaciaId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
};
export type TurnoCreateOrConnectWithoutIdempotencyKeysInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutIdempotencyKeysInput, Prisma.TurnoUncheckedCreateWithoutIdempotencyKeysInput>;
};
export type TurnoUpsertWithoutIdempotencyKeysInput = {
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutIdempotencyKeysInput, Prisma.TurnoUncheckedUpdateWithoutIdempotencyKeysInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutIdempotencyKeysInput, Prisma.TurnoUncheckedCreateWithoutIdempotencyKeysInput>;
    where?: Prisma.TurnoWhereInput;
};
export type TurnoUpdateToOneWithWhereWithoutIdempotencyKeysInput = {
    where?: Prisma.TurnoWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutIdempotencyKeysInput, Prisma.TurnoUncheckedUpdateWithoutIdempotencyKeysInput>;
};
export type TurnoUpdateWithoutIdempotencyKeysInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tipoTurno?: Prisma.TipoTurnoUpdateOneRequiredWithoutTurnosNestedInput;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutTurnosNestedInput;
};
export type TurnoUncheckedUpdateWithoutIdempotencyKeysInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TurnoCreateManyFarmaciaInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    tipoTurnoId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
};
export type TurnoUpdateWithoutFarmaciaInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tipoTurno?: Prisma.TipoTurnoUpdateOneRequiredWithoutTurnosNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateManyWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TurnoCreateManyTipoTurnoInput = {
    id?: number;
    numero: number;
    codigo: string;
    estado?: $Enums.EstadoTurno;
    farmaciaId: number;
    horaCreacion?: Date | string;
    horaLlamado?: Date | string | null;
};
export type TurnoUpdateWithoutTipoTurnoInput = {
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutTurnosNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutTipoTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateManyWithoutTipoTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    horaCreacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaLlamado?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TurnoCountOutputType = {
    idempotencyKeys: number;
};
export type TurnoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    idempotencyKeys?: boolean | TurnoCountOutputTypeCountIdempotencyKeysArgs;
};
export type TurnoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoCountOutputTypeSelect<ExtArgs> | null;
};
export type TurnoCountOutputTypeCountIdempotencyKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
};
export type TurnoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    codigo?: boolean;
    estado?: boolean;
    tipoTurnoId?: boolean;
    farmaciaId?: boolean;
    horaCreacion?: boolean;
    horaLlamado?: boolean;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    idempotencyKeys?: boolean | Prisma.Turno$idempotencyKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.TurnoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["turno"]>;
export type TurnoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    codigo?: boolean;
    estado?: boolean;
    tipoTurnoId?: boolean;
    farmaciaId?: boolean;
    horaCreacion?: boolean;
    horaLlamado?: boolean;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["turno"]>;
export type TurnoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    codigo?: boolean;
    estado?: boolean;
    tipoTurnoId?: boolean;
    farmaciaId?: boolean;
    horaCreacion?: boolean;
    horaLlamado?: boolean;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["turno"]>;
export type TurnoSelectScalar = {
    id?: boolean;
    numero?: boolean;
    codigo?: boolean;
    estado?: boolean;
    tipoTurnoId?: boolean;
    farmaciaId?: boolean;
    horaCreacion?: boolean;
    horaLlamado?: boolean;
};
export type TurnoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numero" | "codigo" | "estado" | "tipoTurnoId" | "farmaciaId" | "horaCreacion" | "horaLlamado", ExtArgs["result"]["turno"]>;
export type TurnoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    idempotencyKeys?: boolean | Prisma.Turno$idempotencyKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.TurnoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TurnoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type TurnoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type $TurnoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Turno";
    objects: {
        tipoTurno: Prisma.$TipoTurnoPayload<ExtArgs>;
        farmacia: Prisma.$FarmaciaPayload<ExtArgs>;
        idempotencyKeys: Prisma.$IdempotencyKeyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        numero: number;
        codigo: string;
        estado: $Enums.EstadoTurno;
        tipoTurnoId: number;
        farmaciaId: number;
        horaCreacion: Date;
        horaLlamado: Date | null;
    }, ExtArgs["result"]["turno"]>;
    composites: {};
};
export type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TurnoPayload, S>;
export type TurnoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TurnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TurnoCountAggregateInputType | true;
};
export interface TurnoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Turno'];
        meta: {
            name: 'Turno';
        };
    };
    findUnique<T extends TurnoFindUniqueArgs>(args: Prisma.SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TurnoFindFirstArgs>(args?: Prisma.SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TurnoFindManyArgs>(args?: Prisma.SelectSubset<T, TurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TurnoCreateArgs>(args: Prisma.SelectSubset<T, TurnoCreateArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TurnoCreateManyArgs>(args?: Prisma.SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TurnoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TurnoDeleteArgs>(args: Prisma.SelectSubset<T, TurnoDeleteArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TurnoUpdateArgs>(args: Prisma.SelectSubset<T, TurnoUpdateArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TurnoDeleteManyArgs>(args?: Prisma.SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TurnoUpdateManyArgs>(args: Prisma.SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TurnoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TurnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TurnoUpsertArgs>(args: Prisma.SelectSubset<T, TurnoUpsertArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TurnoCountArgs>(args?: Prisma.Subset<T, TurnoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TurnoCountAggregateOutputType> : number>;
    aggregate<T extends TurnoAggregateArgs>(args: Prisma.Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>;
    groupBy<T extends TurnoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TurnoGroupByArgs['orderBy'];
    } : {
        orderBy?: TurnoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TurnoFieldRefs;
}
export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tipoTurno<T extends Prisma.TipoTurnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoTurnoDefaultArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    farmacia<T extends Prisma.FarmaciaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmaciaDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    idempotencyKeys<T extends Prisma.Turno$idempotencyKeysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Turno$idempotencyKeysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TurnoFieldRefs {
    readonly id: Prisma.FieldRef<"Turno", 'Int'>;
    readonly numero: Prisma.FieldRef<"Turno", 'Int'>;
    readonly codigo: Prisma.FieldRef<"Turno", 'String'>;
    readonly estado: Prisma.FieldRef<"Turno", 'EstadoTurno'>;
    readonly tipoTurnoId: Prisma.FieldRef<"Turno", 'Int'>;
    readonly farmaciaId: Prisma.FieldRef<"Turno", 'Int'>;
    readonly horaCreacion: Prisma.FieldRef<"Turno", 'DateTime'>;
    readonly horaLlamado: Prisma.FieldRef<"Turno", 'DateTime'>;
}
export type TurnoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TurnoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TurnoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TurnoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TurnoCreateInput, Prisma.TurnoUncheckedCreateInput>;
};
export type TurnoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TurnoCreateManyInput | Prisma.TurnoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TurnoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    data: Prisma.TurnoCreateManyInput | Prisma.TurnoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TurnoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TurnoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TurnoUpdateInput, Prisma.TurnoUncheckedUpdateInput>;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyInput>;
    where?: Prisma.TurnoWhereInput;
    limit?: number;
};
export type TurnoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyInput>;
    where?: Prisma.TurnoWhereInput;
    limit?: number;
    include?: Prisma.TurnoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TurnoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateInput, Prisma.TurnoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TurnoUpdateInput, Prisma.TurnoUncheckedUpdateInput>;
};
export type TurnoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
    limit?: number;
};
export type Turno$idempotencyKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TurnoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
};
export {};
