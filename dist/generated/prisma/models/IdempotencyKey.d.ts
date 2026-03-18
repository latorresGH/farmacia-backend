import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IdempotencyKeyModel = runtime.Types.Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>;
export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null;
    _avg: IdempotencyKeyAvgAggregateOutputType | null;
    _sum: IdempotencyKeySumAggregateOutputType | null;
    _min: IdempotencyKeyMinAggregateOutputType | null;
    _max: IdempotencyKeyMaxAggregateOutputType | null;
};
export type IdempotencyKeyAvgAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    farmaciaId: number | null;
};
export type IdempotencyKeySumAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    farmaciaId: number | null;
};
export type IdempotencyKeyMinAggregateOutputType = {
    id: number | null;
    key: string | null;
    turnoId: number | null;
    farmaciaId: number | null;
    createdAt: Date | null;
};
export type IdempotencyKeyMaxAggregateOutputType = {
    id: number | null;
    key: string | null;
    turnoId: number | null;
    farmaciaId: number | null;
    createdAt: Date | null;
};
export type IdempotencyKeyCountAggregateOutputType = {
    id: number;
    key: number;
    turnoId: number;
    farmaciaId: number;
    createdAt: number;
    _all: number;
};
export type IdempotencyKeyAvgAggregateInputType = {
    id?: true;
    turnoId?: true;
    farmaciaId?: true;
};
export type IdempotencyKeySumAggregateInputType = {
    id?: true;
    turnoId?: true;
    farmaciaId?: true;
};
export type IdempotencyKeyMinAggregateInputType = {
    id?: true;
    key?: true;
    turnoId?: true;
    farmaciaId?: true;
    createdAt?: true;
};
export type IdempotencyKeyMaxAggregateInputType = {
    id?: true;
    key?: true;
    turnoId?: true;
    farmaciaId?: true;
    createdAt?: true;
};
export type IdempotencyKeyCountAggregateInputType = {
    id?: true;
    key?: true;
    turnoId?: true;
    farmaciaId?: true;
    createdAt?: true;
    _all?: true;
};
export type IdempotencyKeyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
    orderBy?: Prisma.IdempotencyKeyOrderByWithRelationInput | Prisma.IdempotencyKeyOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IdempotencyKeyCountAggregateInputType;
    _avg?: IdempotencyKeyAvgAggregateInputType;
    _sum?: IdempotencyKeySumAggregateInputType;
    _min?: IdempotencyKeyMinAggregateInputType;
    _max?: IdempotencyKeyMaxAggregateInputType;
};
export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
    [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIdempotencyKey[P]> : Prisma.GetScalarType<T[P], AggregateIdempotencyKey[P]>;
};
export type IdempotencyKeyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
    orderBy?: Prisma.IdempotencyKeyOrderByWithAggregationInput | Prisma.IdempotencyKeyOrderByWithAggregationInput[];
    by: Prisma.IdempotencyKeyScalarFieldEnum[] | Prisma.IdempotencyKeyScalarFieldEnum;
    having?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IdempotencyKeyCountAggregateInputType | true;
    _avg?: IdempotencyKeyAvgAggregateInputType;
    _sum?: IdempotencyKeySumAggregateInputType;
    _min?: IdempotencyKeyMinAggregateInputType;
    _max?: IdempotencyKeyMaxAggregateInputType;
};
export type IdempotencyKeyGroupByOutputType = {
    id: number;
    key: string;
    turnoId: number | null;
    farmaciaId: number;
    createdAt: Date;
    _count: IdempotencyKeyCountAggregateOutputType | null;
    _avg: IdempotencyKeyAvgAggregateOutputType | null;
    _sum: IdempotencyKeySumAggregateOutputType | null;
    _min: IdempotencyKeyMinAggregateOutputType | null;
    _max: IdempotencyKeyMaxAggregateOutputType | null;
};
type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>;
}>>;
export type IdempotencyKeyWhereInput = {
    AND?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    OR?: Prisma.IdempotencyKeyWhereInput[];
    NOT?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    id?: Prisma.IntFilter<"IdempotencyKey"> | number;
    key?: Prisma.StringFilter<"IdempotencyKey"> | string;
    turnoId?: Prisma.IntNullableFilter<"IdempotencyKey"> | number | null;
    farmaciaId?: Prisma.IntFilter<"IdempotencyKey"> | number;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyKey"> | Date | string;
    turno?: Prisma.XOR<Prisma.TurnoNullableScalarRelationFilter, Prisma.TurnoWhereInput> | null;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
};
export type IdempotencyKeyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    turno?: Prisma.TurnoOrderByWithRelationInput;
    farmacia?: Prisma.FarmaciaOrderByWithRelationInput;
};
export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    key?: string;
    AND?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    OR?: Prisma.IdempotencyKeyWhereInput[];
    NOT?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    turnoId?: Prisma.IntNullableFilter<"IdempotencyKey"> | number | null;
    farmaciaId?: Prisma.IntFilter<"IdempotencyKey"> | number;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyKey"> | Date | string;
    turno?: Prisma.XOR<Prisma.TurnoNullableScalarRelationFilter, Prisma.TurnoWhereInput> | null;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
}, "id" | "key">;
export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IdempotencyKeyCountOrderByAggregateInput;
    _avg?: Prisma.IdempotencyKeyAvgOrderByAggregateInput;
    _max?: Prisma.IdempotencyKeyMaxOrderByAggregateInput;
    _min?: Prisma.IdempotencyKeyMinOrderByAggregateInput;
    _sum?: Prisma.IdempotencyKeySumOrderByAggregateInput;
};
export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput | Prisma.IdempotencyKeyScalarWhereWithAggregatesInput[];
    OR?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput | Prisma.IdempotencyKeyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"IdempotencyKey"> | number;
    key?: Prisma.StringWithAggregatesFilter<"IdempotencyKey"> | string;
    turnoId?: Prisma.IntNullableWithAggregatesFilter<"IdempotencyKey"> | number | null;
    farmaciaId?: Prisma.IntWithAggregatesFilter<"IdempotencyKey"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string;
};
export type IdempotencyKeyCreateInput = {
    key: string;
    createdAt?: Date | string;
    turno?: Prisma.TurnoCreateNestedOneWithoutIdempotencyKeysInput;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutIdempotencyKeysInput;
};
export type IdempotencyKeyUncheckedCreateInput = {
    id?: number;
    key: string;
    turnoId?: number | null;
    farmaciaId: number;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneWithoutIdempotencyKeysNestedInput;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutIdempotencyKeysNestedInput;
};
export type IdempotencyKeyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    turnoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyCreateManyInput = {
    id?: number;
    key: string;
    turnoId?: number | null;
    farmaciaId: number;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    turnoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyListRelationFilter = {
    every?: Prisma.IdempotencyKeyWhereInput;
    some?: Prisma.IdempotencyKeyWhereInput;
    none?: Prisma.IdempotencyKeyWhereInput;
};
export type IdempotencyKeyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdempotencyKeyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type IdempotencyKeyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdempotencyKeySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type IdempotencyKeyCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput> | Prisma.IdempotencyKeyCreateWithoutFarmaciaInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput | Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
};
export type IdempotencyKeyUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput> | Prisma.IdempotencyKeyCreateWithoutFarmaciaInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput | Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
};
export type IdempotencyKeyUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput> | Prisma.IdempotencyKeyCreateWithoutFarmaciaInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput | Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyFarmaciaInputEnvelope;
    set?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    disconnect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    delete?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    update?: Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.IdempotencyKeyUpdateManyWithWhereWithoutFarmaciaInput | Prisma.IdempotencyKeyUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
};
export type IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput> | Prisma.IdempotencyKeyCreateWithoutFarmaciaInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput | Prisma.IdempotencyKeyCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyFarmaciaInputEnvelope;
    set?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    disconnect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    delete?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    update?: Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.IdempotencyKeyUpdateManyWithWhereWithoutFarmaciaInput | Prisma.IdempotencyKeyUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
};
export type IdempotencyKeyCreateNestedManyWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput> | Prisma.IdempotencyKeyCreateWithoutTurnoInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput | Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyTurnoInputEnvelope;
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
};
export type IdempotencyKeyUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput> | Prisma.IdempotencyKeyCreateWithoutTurnoInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput | Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyTurnoInputEnvelope;
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
};
export type IdempotencyKeyUpdateManyWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput> | Prisma.IdempotencyKeyCreateWithoutTurnoInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput | Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput[];
    upsert?: Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutTurnoInput | Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutTurnoInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyTurnoInputEnvelope;
    set?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    disconnect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    delete?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    update?: Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutTurnoInput | Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutTurnoInput[];
    updateMany?: Prisma.IdempotencyKeyUpdateManyWithWhereWithoutTurnoInput | Prisma.IdempotencyKeyUpdateManyWithWhereWithoutTurnoInput[];
    deleteMany?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
};
export type IdempotencyKeyUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput> | Prisma.IdempotencyKeyCreateWithoutTurnoInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput | Prisma.IdempotencyKeyCreateOrConnectWithoutTurnoInput[];
    upsert?: Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutTurnoInput | Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutTurnoInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyTurnoInputEnvelope;
    set?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    disconnect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    delete?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    update?: Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutTurnoInput | Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutTurnoInput[];
    updateMany?: Prisma.IdempotencyKeyUpdateManyWithWhereWithoutTurnoInput | Prisma.IdempotencyKeyUpdateManyWithWhereWithoutTurnoInput[];
    deleteMany?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IdempotencyKeyCreateWithoutFarmaciaInput = {
    key: string;
    createdAt?: Date | string;
    turno?: Prisma.TurnoCreateNestedOneWithoutIdempotencyKeysInput;
};
export type IdempotencyKeyUncheckedCreateWithoutFarmaciaInput = {
    id?: number;
    key: string;
    turnoId?: number | null;
    createdAt?: Date | string;
};
export type IdempotencyKeyCreateOrConnectWithoutFarmaciaInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput>;
};
export type IdempotencyKeyCreateManyFarmaciaInputEnvelope = {
    data: Prisma.IdempotencyKeyCreateManyFarmaciaInput | Prisma.IdempotencyKeyCreateManyFarmaciaInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyKeyUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    update: Prisma.XOR<Prisma.IdempotencyKeyUpdateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedUpdateWithoutFarmaciaInput>;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedCreateWithoutFarmaciaInput>;
};
export type IdempotencyKeyUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateWithoutFarmaciaInput, Prisma.IdempotencyKeyUncheckedUpdateWithoutFarmaciaInput>;
};
export type IdempotencyKeyUpdateManyWithWhereWithoutFarmaciaInput = {
    where: Prisma.IdempotencyKeyScalarWhereInput;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaInput>;
};
export type IdempotencyKeyScalarWhereInput = {
    AND?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
    OR?: Prisma.IdempotencyKeyScalarWhereInput[];
    NOT?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
    id?: Prisma.IntFilter<"IdempotencyKey"> | number;
    key?: Prisma.StringFilter<"IdempotencyKey"> | string;
    turnoId?: Prisma.IntNullableFilter<"IdempotencyKey"> | number | null;
    farmaciaId?: Prisma.IntFilter<"IdempotencyKey"> | number;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyKey"> | Date | string;
};
export type IdempotencyKeyCreateWithoutTurnoInput = {
    key: string;
    createdAt?: Date | string;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutIdempotencyKeysInput;
};
export type IdempotencyKeyUncheckedCreateWithoutTurnoInput = {
    id?: number;
    key: string;
    farmaciaId: number;
    createdAt?: Date | string;
};
export type IdempotencyKeyCreateOrConnectWithoutTurnoInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput>;
};
export type IdempotencyKeyCreateManyTurnoInputEnvelope = {
    data: Prisma.IdempotencyKeyCreateManyTurnoInput | Prisma.IdempotencyKeyCreateManyTurnoInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyKeyUpsertWithWhereUniqueWithoutTurnoInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    update: Prisma.XOR<Prisma.IdempotencyKeyUpdateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedUpdateWithoutTurnoInput>;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedCreateWithoutTurnoInput>;
};
export type IdempotencyKeyUpdateWithWhereUniqueWithoutTurnoInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateWithoutTurnoInput, Prisma.IdempotencyKeyUncheckedUpdateWithoutTurnoInput>;
};
export type IdempotencyKeyUpdateManyWithWhereWithoutTurnoInput = {
    where: Prisma.IdempotencyKeyScalarWhereInput;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyWithoutTurnoInput>;
};
export type IdempotencyKeyCreateManyFarmaciaInput = {
    id?: number;
    key: string;
    turnoId?: number | null;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateWithoutFarmaciaInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneWithoutIdempotencyKeysNestedInput;
};
export type IdempotencyKeyUncheckedUpdateWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    turnoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyUncheckedUpdateManyWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    turnoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyCreateManyTurnoInput = {
    id?: number;
    key: string;
    farmaciaId: number;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateWithoutTurnoInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutIdempotencyKeysNestedInput;
};
export type IdempotencyKeyUncheckedUpdateWithoutTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyUncheckedUpdateManyWithoutTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    turnoId?: boolean;
    farmaciaId?: boolean;
    createdAt?: boolean;
    turno?: boolean | Prisma.IdempotencyKey$turnoArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    turnoId?: boolean;
    farmaciaId?: boolean;
    createdAt?: boolean;
    turno?: boolean | Prisma.IdempotencyKey$turnoArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    turnoId?: boolean;
    farmaciaId?: boolean;
    createdAt?: boolean;
    turno?: boolean | Prisma.IdempotencyKey$turnoArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeySelectScalar = {
    id?: boolean;
    key?: boolean;
    turnoId?: boolean;
    farmaciaId?: boolean;
    createdAt?: boolean;
};
export type IdempotencyKeyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "turnoId" | "farmaciaId" | "createdAt", ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.IdempotencyKey$turnoArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type IdempotencyKeyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.IdempotencyKey$turnoArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type IdempotencyKeyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.IdempotencyKey$turnoArgs<ExtArgs>;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type $IdempotencyKeyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IdempotencyKey";
    objects: {
        turno: Prisma.$TurnoPayload<ExtArgs> | null;
        farmacia: Prisma.$FarmaciaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        key: string;
        turnoId: number | null;
        farmaciaId: number;
        createdAt: Date;
    }, ExtArgs["result"]["idempotencyKey"]>;
    composites: {};
};
export type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload, S>;
export type IdempotencyKeyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IdempotencyKeyCountAggregateInputType | true;
};
export interface IdempotencyKeyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'];
        meta: {
            name: 'IdempotencyKey';
        };
    };
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IdempotencyKeyCreateArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IdempotencyKeyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IdempotencyKeyDeleteArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IdempotencyKeyUpdateArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IdempotencyKeyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IdempotencyKeyUpsertArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IdempotencyKeyCountArgs>(args?: Prisma.Subset<T, IdempotencyKeyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType> : number>;
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Prisma.Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>;
    groupBy<T extends IdempotencyKeyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IdempotencyKeyGroupByArgs['orderBy'];
    } : {
        orderBy?: IdempotencyKeyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IdempotencyKeyFieldRefs;
}
export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    turno<T extends Prisma.IdempotencyKey$turnoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IdempotencyKey$turnoArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    farmacia<T extends Prisma.FarmaciaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmaciaDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IdempotencyKeyFieldRefs {
    readonly id: Prisma.FieldRef<"IdempotencyKey", 'Int'>;
    readonly key: Prisma.FieldRef<"IdempotencyKey", 'String'>;
    readonly turnoId: Prisma.FieldRef<"IdempotencyKey", 'Int'>;
    readonly farmaciaId: Prisma.FieldRef<"IdempotencyKey", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"IdempotencyKey", 'DateTime'>;
}
export type IdempotencyKeyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IdempotencyKeyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IdempotencyKeyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyKeyCreateInput, Prisma.IdempotencyKeyUncheckedCreateInput>;
};
export type IdempotencyKeyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IdempotencyKeyCreateManyInput | Prisma.IdempotencyKeyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyKeyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    data: Prisma.IdempotencyKeyCreateManyInput | Prisma.IdempotencyKeyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IdempotencyKeyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IdempotencyKeyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateInput, Prisma.IdempotencyKeyUncheckedUpdateInput>;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyInput>;
    where?: Prisma.IdempotencyKeyWhereInput;
    limit?: number;
};
export type IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyInput>;
    where?: Prisma.IdempotencyKeyWhereInput;
    limit?: number;
    include?: Prisma.IdempotencyKeyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IdempotencyKeyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateInput, Prisma.IdempotencyKeyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IdempotencyKeyUpdateInput, Prisma.IdempotencyKeyUncheckedUpdateInput>;
};
export type IdempotencyKeyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
    limit?: number;
};
export type IdempotencyKey$turnoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where?: Prisma.TurnoWhereInput;
};
export type IdempotencyKeyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
};
export {};
