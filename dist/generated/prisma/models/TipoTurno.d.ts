import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TipoTurnoModel = runtime.Types.Result.DefaultSelection<Prisma.$TipoTurnoPayload>;
export type AggregateTipoTurno = {
    _count: TipoTurnoCountAggregateOutputType | null;
    _avg: TipoTurnoAvgAggregateOutputType | null;
    _sum: TipoTurnoSumAggregateOutputType | null;
    _min: TipoTurnoMinAggregateOutputType | null;
    _max: TipoTurnoMaxAggregateOutputType | null;
};
export type TipoTurnoAvgAggregateOutputType = {
    id: number | null;
    duracionMin: number | null;
    farmaciaId: number | null;
};
export type TipoTurnoSumAggregateOutputType = {
    id: number | null;
    duracionMin: number | null;
    farmaciaId: number | null;
};
export type TipoTurnoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    prefijo: string | null;
    duracionMin: number | null;
    farmaciaId: number | null;
};
export type TipoTurnoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    prefijo: string | null;
    duracionMin: number | null;
    farmaciaId: number | null;
};
export type TipoTurnoCountAggregateOutputType = {
    id: number;
    nombre: number;
    prefijo: number;
    duracionMin: number;
    farmaciaId: number;
    _all: number;
};
export type TipoTurnoAvgAggregateInputType = {
    id?: true;
    duracionMin?: true;
    farmaciaId?: true;
};
export type TipoTurnoSumAggregateInputType = {
    id?: true;
    duracionMin?: true;
    farmaciaId?: true;
};
export type TipoTurnoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    prefijo?: true;
    duracionMin?: true;
    farmaciaId?: true;
};
export type TipoTurnoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    prefijo?: true;
    duracionMin?: true;
    farmaciaId?: true;
};
export type TipoTurnoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    prefijo?: true;
    duracionMin?: true;
    farmaciaId?: true;
    _all?: true;
};
export type TipoTurnoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoTurnoWhereInput;
    orderBy?: Prisma.TipoTurnoOrderByWithRelationInput | Prisma.TipoTurnoOrderByWithRelationInput[];
    cursor?: Prisma.TipoTurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TipoTurnoCountAggregateInputType;
    _avg?: TipoTurnoAvgAggregateInputType;
    _sum?: TipoTurnoSumAggregateInputType;
    _min?: TipoTurnoMinAggregateInputType;
    _max?: TipoTurnoMaxAggregateInputType;
};
export type GetTipoTurnoAggregateType<T extends TipoTurnoAggregateArgs> = {
    [P in keyof T & keyof AggregateTipoTurno]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTipoTurno[P]> : Prisma.GetScalarType<T[P], AggregateTipoTurno[P]>;
};
export type TipoTurnoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoTurnoWhereInput;
    orderBy?: Prisma.TipoTurnoOrderByWithAggregationInput | Prisma.TipoTurnoOrderByWithAggregationInput[];
    by: Prisma.TipoTurnoScalarFieldEnum[] | Prisma.TipoTurnoScalarFieldEnum;
    having?: Prisma.TipoTurnoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TipoTurnoCountAggregateInputType | true;
    _avg?: TipoTurnoAvgAggregateInputType;
    _sum?: TipoTurnoSumAggregateInputType;
    _min?: TipoTurnoMinAggregateInputType;
    _max?: TipoTurnoMaxAggregateInputType;
};
export type TipoTurnoGroupByOutputType = {
    id: number;
    nombre: string;
    prefijo: string;
    duracionMin: number;
    farmaciaId: number;
    _count: TipoTurnoCountAggregateOutputType | null;
    _avg: TipoTurnoAvgAggregateOutputType | null;
    _sum: TipoTurnoSumAggregateOutputType | null;
    _min: TipoTurnoMinAggregateOutputType | null;
    _max: TipoTurnoMaxAggregateOutputType | null;
};
type GetTipoTurnoGroupByPayload<T extends TipoTurnoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TipoTurnoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TipoTurnoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TipoTurnoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TipoTurnoGroupByOutputType[P]>;
}>>;
export type TipoTurnoWhereInput = {
    AND?: Prisma.TipoTurnoWhereInput | Prisma.TipoTurnoWhereInput[];
    OR?: Prisma.TipoTurnoWhereInput[];
    NOT?: Prisma.TipoTurnoWhereInput | Prisma.TipoTurnoWhereInput[];
    id?: Prisma.IntFilter<"TipoTurno"> | number;
    nombre?: Prisma.StringFilter<"TipoTurno"> | string;
    prefijo?: Prisma.StringFilter<"TipoTurno"> | string;
    duracionMin?: Prisma.IntFilter<"TipoTurno"> | number;
    farmaciaId?: Prisma.IntFilter<"TipoTurno"> | number;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
    turnos?: Prisma.TurnoListRelationFilter;
    contadores?: Prisma.ContadorTurnoListRelationFilter;
};
export type TipoTurnoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    prefijo?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    farmacia?: Prisma.FarmaciaOrderByWithRelationInput;
    turnos?: Prisma.TurnoOrderByRelationAggregateInput;
    contadores?: Prisma.ContadorTurnoOrderByRelationAggregateInput;
};
export type TipoTurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TipoTurnoWhereInput | Prisma.TipoTurnoWhereInput[];
    OR?: Prisma.TipoTurnoWhereInput[];
    NOT?: Prisma.TipoTurnoWhereInput | Prisma.TipoTurnoWhereInput[];
    nombre?: Prisma.StringFilter<"TipoTurno"> | string;
    prefijo?: Prisma.StringFilter<"TipoTurno"> | string;
    duracionMin?: Prisma.IntFilter<"TipoTurno"> | number;
    farmaciaId?: Prisma.IntFilter<"TipoTurno"> | number;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
    turnos?: Prisma.TurnoListRelationFilter;
    contadores?: Prisma.ContadorTurnoListRelationFilter;
}, "id">;
export type TipoTurnoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    prefijo?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    _count?: Prisma.TipoTurnoCountOrderByAggregateInput;
    _avg?: Prisma.TipoTurnoAvgOrderByAggregateInput;
    _max?: Prisma.TipoTurnoMaxOrderByAggregateInput;
    _min?: Prisma.TipoTurnoMinOrderByAggregateInput;
    _sum?: Prisma.TipoTurnoSumOrderByAggregateInput;
};
export type TipoTurnoScalarWhereWithAggregatesInput = {
    AND?: Prisma.TipoTurnoScalarWhereWithAggregatesInput | Prisma.TipoTurnoScalarWhereWithAggregatesInput[];
    OR?: Prisma.TipoTurnoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TipoTurnoScalarWhereWithAggregatesInput | Prisma.TipoTurnoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TipoTurno"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"TipoTurno"> | string;
    prefijo?: Prisma.StringWithAggregatesFilter<"TipoTurno"> | string;
    duracionMin?: Prisma.IntWithAggregatesFilter<"TipoTurno"> | number;
    farmaciaId?: Prisma.IntWithAggregatesFilter<"TipoTurno"> | number;
};
export type TipoTurnoCreateInput = {
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutTiposInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutTipoTurnoInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmaciaId: number;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutTipoTurnoInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutTiposNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutTipoTurnoNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoCreateManyInput = {
    id?: number;
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmaciaId: number;
};
export type TipoTurnoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TipoTurnoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TipoTurnoListRelationFilter = {
    every?: Prisma.TipoTurnoWhereInput;
    some?: Prisma.TipoTurnoWhereInput;
    none?: Prisma.TipoTurnoWhereInput;
};
export type TipoTurnoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TipoTurnoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    prefijo?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TipoTurnoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TipoTurnoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    prefijo?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TipoTurnoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    prefijo?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TipoTurnoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
};
export type TipoTurnoScalarRelationFilter = {
    is?: Prisma.TipoTurnoWhereInput;
    isNot?: Prisma.TipoTurnoWhereInput;
};
export type TipoTurnoCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TipoTurnoCreateWithoutFarmaciaInput[] | Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.TipoTurnoCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
};
export type TipoTurnoUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TipoTurnoCreateWithoutFarmaciaInput[] | Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.TipoTurnoCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
};
export type TipoTurnoUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TipoTurnoCreateWithoutFarmaciaInput[] | Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.TipoTurnoUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.TipoTurnoUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.TipoTurnoCreateManyFarmaciaInputEnvelope;
    set?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    disconnect?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    delete?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    connect?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    update?: Prisma.TipoTurnoUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.TipoTurnoUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.TipoTurnoUpdateManyWithWhereWithoutFarmaciaInput | Prisma.TipoTurnoUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.TipoTurnoScalarWhereInput | Prisma.TipoTurnoScalarWhereInput[];
};
export type TipoTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.TipoTurnoCreateWithoutFarmaciaInput[] | Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.TipoTurnoCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.TipoTurnoUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.TipoTurnoUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.TipoTurnoCreateManyFarmaciaInputEnvelope;
    set?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    disconnect?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    delete?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    connect?: Prisma.TipoTurnoWhereUniqueInput | Prisma.TipoTurnoWhereUniqueInput[];
    update?: Prisma.TipoTurnoUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.TipoTurnoUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.TipoTurnoUpdateManyWithWhereWithoutFarmaciaInput | Prisma.TipoTurnoUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.TipoTurnoScalarWhereInput | Prisma.TipoTurnoScalarWhereInput[];
};
export type TipoTurnoCreateNestedOneWithoutTurnosInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutTurnosInput, Prisma.TipoTurnoUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutTurnosInput;
    connect?: Prisma.TipoTurnoWhereUniqueInput;
};
export type TipoTurnoUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutTurnosInput, Prisma.TipoTurnoUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutTurnosInput;
    upsert?: Prisma.TipoTurnoUpsertWithoutTurnosInput;
    connect?: Prisma.TipoTurnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TipoTurnoUpdateToOneWithWhereWithoutTurnosInput, Prisma.TipoTurnoUpdateWithoutTurnosInput>, Prisma.TipoTurnoUncheckedUpdateWithoutTurnosInput>;
};
export type TipoTurnoCreateNestedOneWithoutContadoresInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutContadoresInput, Prisma.TipoTurnoUncheckedCreateWithoutContadoresInput>;
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutContadoresInput;
    connect?: Prisma.TipoTurnoWhereUniqueInput;
};
export type TipoTurnoUpdateOneRequiredWithoutContadoresNestedInput = {
    create?: Prisma.XOR<Prisma.TipoTurnoCreateWithoutContadoresInput, Prisma.TipoTurnoUncheckedCreateWithoutContadoresInput>;
    connectOrCreate?: Prisma.TipoTurnoCreateOrConnectWithoutContadoresInput;
    upsert?: Prisma.TipoTurnoUpsertWithoutContadoresInput;
    connect?: Prisma.TipoTurnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TipoTurnoUpdateToOneWithWhereWithoutContadoresInput, Prisma.TipoTurnoUpdateWithoutContadoresInput>, Prisma.TipoTurnoUncheckedUpdateWithoutContadoresInput>;
};
export type TipoTurnoCreateWithoutFarmaciaInput = {
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    turnos?: Prisma.TurnoCreateNestedManyWithoutTipoTurnoInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoUncheckedCreateWithoutFarmaciaInput = {
    id?: number;
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutTipoTurnoInput;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoCreateOrConnectWithoutFarmaciaInput = {
    where: Prisma.TipoTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoTurnoCreateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput>;
};
export type TipoTurnoCreateManyFarmaciaInputEnvelope = {
    data: Prisma.TipoTurnoCreateManyFarmaciaInput | Prisma.TipoTurnoCreateManyFarmaciaInput[];
    skipDuplicates?: boolean;
};
export type TipoTurnoUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.TipoTurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TipoTurnoUpdateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedUpdateWithoutFarmaciaInput>;
    create: Prisma.XOR<Prisma.TipoTurnoCreateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedCreateWithoutFarmaciaInput>;
};
export type TipoTurnoUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.TipoTurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TipoTurnoUpdateWithoutFarmaciaInput, Prisma.TipoTurnoUncheckedUpdateWithoutFarmaciaInput>;
};
export type TipoTurnoUpdateManyWithWhereWithoutFarmaciaInput = {
    where: Prisma.TipoTurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.TipoTurnoUpdateManyMutationInput, Prisma.TipoTurnoUncheckedUpdateManyWithoutFarmaciaInput>;
};
export type TipoTurnoScalarWhereInput = {
    AND?: Prisma.TipoTurnoScalarWhereInput | Prisma.TipoTurnoScalarWhereInput[];
    OR?: Prisma.TipoTurnoScalarWhereInput[];
    NOT?: Prisma.TipoTurnoScalarWhereInput | Prisma.TipoTurnoScalarWhereInput[];
    id?: Prisma.IntFilter<"TipoTurno"> | number;
    nombre?: Prisma.StringFilter<"TipoTurno"> | string;
    prefijo?: Prisma.StringFilter<"TipoTurno"> | string;
    duracionMin?: Prisma.IntFilter<"TipoTurno"> | number;
    farmaciaId?: Prisma.IntFilter<"TipoTurno"> | number;
};
export type TipoTurnoCreateWithoutTurnosInput = {
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutTiposInput;
    contadores?: Prisma.ContadorTurnoCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoUncheckedCreateWithoutTurnosInput = {
    id?: number;
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmaciaId: number;
    contadores?: Prisma.ContadorTurnoUncheckedCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoCreateOrConnectWithoutTurnosInput = {
    where: Prisma.TipoTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoTurnoCreateWithoutTurnosInput, Prisma.TipoTurnoUncheckedCreateWithoutTurnosInput>;
};
export type TipoTurnoUpsertWithoutTurnosInput = {
    update: Prisma.XOR<Prisma.TipoTurnoUpdateWithoutTurnosInput, Prisma.TipoTurnoUncheckedUpdateWithoutTurnosInput>;
    create: Prisma.XOR<Prisma.TipoTurnoCreateWithoutTurnosInput, Prisma.TipoTurnoUncheckedCreateWithoutTurnosInput>;
    where?: Prisma.TipoTurnoWhereInput;
};
export type TipoTurnoUpdateToOneWithWhereWithoutTurnosInput = {
    where?: Prisma.TipoTurnoWhereInput;
    data: Prisma.XOR<Prisma.TipoTurnoUpdateWithoutTurnosInput, Prisma.TipoTurnoUncheckedUpdateWithoutTurnosInput>;
};
export type TipoTurnoUpdateWithoutTurnosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutTiposNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoUncheckedUpdateWithoutTurnosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoCreateWithoutContadoresInput = {
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutTiposInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoUncheckedCreateWithoutContadoresInput = {
    id?: number;
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
    farmaciaId: number;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutTipoTurnoInput;
};
export type TipoTurnoCreateOrConnectWithoutContadoresInput = {
    where: Prisma.TipoTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoTurnoCreateWithoutContadoresInput, Prisma.TipoTurnoUncheckedCreateWithoutContadoresInput>;
};
export type TipoTurnoUpsertWithoutContadoresInput = {
    update: Prisma.XOR<Prisma.TipoTurnoUpdateWithoutContadoresInput, Prisma.TipoTurnoUncheckedUpdateWithoutContadoresInput>;
    create: Prisma.XOR<Prisma.TipoTurnoCreateWithoutContadoresInput, Prisma.TipoTurnoUncheckedCreateWithoutContadoresInput>;
    where?: Prisma.TipoTurnoWhereInput;
};
export type TipoTurnoUpdateToOneWithWhereWithoutContadoresInput = {
    where?: Prisma.TipoTurnoWhereInput;
    data: Prisma.XOR<Prisma.TipoTurnoUpdateWithoutContadoresInput, Prisma.TipoTurnoUncheckedUpdateWithoutContadoresInput>;
};
export type TipoTurnoUpdateWithoutContadoresInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutTiposNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoUncheckedUpdateWithoutContadoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoCreateManyFarmaciaInput = {
    id?: number;
    nombre: string;
    prefijo?: string;
    duracionMin?: number;
};
export type TipoTurnoUpdateWithoutFarmaciaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    turnos?: Prisma.TurnoUpdateManyWithoutTipoTurnoNestedInput;
    contadores?: Prisma.ContadorTurnoUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoUncheckedUpdateWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput;
    contadores?: Prisma.ContadorTurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput;
};
export type TipoTurnoUncheckedUpdateManyWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    prefijo?: Prisma.StringFieldUpdateOperationsInput | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TipoTurnoCountOutputType = {
    turnos: number;
    contadores: number;
};
export type TipoTurnoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turnos?: boolean | TipoTurnoCountOutputTypeCountTurnosArgs;
    contadores?: boolean | TipoTurnoCountOutputTypeCountContadoresArgs;
};
export type TipoTurnoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoCountOutputTypeSelect<ExtArgs> | null;
};
export type TipoTurnoCountOutputTypeCountTurnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
};
export type TipoTurnoCountOutputTypeCountContadoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContadorTurnoWhereInput;
};
export type TipoTurnoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    prefijo?: boolean;
    duracionMin?: boolean;
    farmaciaId?: boolean;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    turnos?: boolean | Prisma.TipoTurno$turnosArgs<ExtArgs>;
    contadores?: boolean | Prisma.TipoTurno$contadoresArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoTurnoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipoTurno"]>;
export type TipoTurnoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    prefijo?: boolean;
    duracionMin?: boolean;
    farmaciaId?: boolean;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipoTurno"]>;
export type TipoTurnoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    prefijo?: boolean;
    duracionMin?: boolean;
    farmaciaId?: boolean;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipoTurno"]>;
export type TipoTurnoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    prefijo?: boolean;
    duracionMin?: boolean;
    farmaciaId?: boolean;
};
export type TipoTurnoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "prefijo" | "duracionMin" | "farmaciaId", ExtArgs["result"]["tipoTurno"]>;
export type TipoTurnoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    turnos?: boolean | Prisma.TipoTurno$turnosArgs<ExtArgs>;
    contadores?: boolean | Prisma.TipoTurno$contadoresArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoTurnoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TipoTurnoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type TipoTurnoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
};
export type $TipoTurnoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TipoTurno";
    objects: {
        farmacia: Prisma.$FarmaciaPayload<ExtArgs>;
        turnos: Prisma.$TurnoPayload<ExtArgs>[];
        contadores: Prisma.$ContadorTurnoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        prefijo: string;
        duracionMin: number;
        farmaciaId: number;
    }, ExtArgs["result"]["tipoTurno"]>;
    composites: {};
};
export type TipoTurnoGetPayload<S extends boolean | null | undefined | TipoTurnoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload, S>;
export type TipoTurnoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TipoTurnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TipoTurnoCountAggregateInputType | true;
};
export interface TipoTurnoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TipoTurno'];
        meta: {
            name: 'TipoTurno';
        };
    };
    findUnique<T extends TipoTurnoFindUniqueArgs>(args: Prisma.SelectSubset<T, TipoTurnoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TipoTurnoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TipoTurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TipoTurnoFindFirstArgs>(args?: Prisma.SelectSubset<T, TipoTurnoFindFirstArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TipoTurnoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TipoTurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TipoTurnoFindManyArgs>(args?: Prisma.SelectSubset<T, TipoTurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TipoTurnoCreateArgs>(args: Prisma.SelectSubset<T, TipoTurnoCreateArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TipoTurnoCreateManyArgs>(args?: Prisma.SelectSubset<T, TipoTurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TipoTurnoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TipoTurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TipoTurnoDeleteArgs>(args: Prisma.SelectSubset<T, TipoTurnoDeleteArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TipoTurnoUpdateArgs>(args: Prisma.SelectSubset<T, TipoTurnoUpdateArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TipoTurnoDeleteManyArgs>(args?: Prisma.SelectSubset<T, TipoTurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TipoTurnoUpdateManyArgs>(args: Prisma.SelectSubset<T, TipoTurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TipoTurnoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TipoTurnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TipoTurnoUpsertArgs>(args: Prisma.SelectSubset<T, TipoTurnoUpsertArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TipoTurnoCountArgs>(args?: Prisma.Subset<T, TipoTurnoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TipoTurnoCountAggregateOutputType> : number>;
    aggregate<T extends TipoTurnoAggregateArgs>(args: Prisma.Subset<T, TipoTurnoAggregateArgs>): Prisma.PrismaPromise<GetTipoTurnoAggregateType<T>>;
    groupBy<T extends TipoTurnoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TipoTurnoGroupByArgs['orderBy'];
    } : {
        orderBy?: TipoTurnoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TipoTurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TipoTurnoFieldRefs;
}
export interface Prisma__TipoTurnoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farmacia<T extends Prisma.FarmaciaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmaciaDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    turnos<T extends Prisma.TipoTurno$turnosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoTurno$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contadores<T extends Prisma.TipoTurno$contadoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoTurno$contadoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TipoTurnoFieldRefs {
    readonly id: Prisma.FieldRef<"TipoTurno", 'Int'>;
    readonly nombre: Prisma.FieldRef<"TipoTurno", 'String'>;
    readonly prefijo: Prisma.FieldRef<"TipoTurno", 'String'>;
    readonly duracionMin: Prisma.FieldRef<"TipoTurno", 'Int'>;
    readonly farmaciaId: Prisma.FieldRef<"TipoTurno", 'Int'>;
}
export type TipoTurnoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    where: Prisma.TipoTurnoWhereUniqueInput;
};
export type TipoTurnoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    where: Prisma.TipoTurnoWhereUniqueInput;
};
export type TipoTurnoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoTurnoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoTurnoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoTurnoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoTurnoCreateInput, Prisma.TipoTurnoUncheckedCreateInput>;
};
export type TipoTurnoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TipoTurnoCreateManyInput | Prisma.TipoTurnoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TipoTurnoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    data: Prisma.TipoTurnoCreateManyInput | Prisma.TipoTurnoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TipoTurnoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TipoTurnoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoTurnoUpdateInput, Prisma.TipoTurnoUncheckedUpdateInput>;
    where: Prisma.TipoTurnoWhereUniqueInput;
};
export type TipoTurnoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TipoTurnoUpdateManyMutationInput, Prisma.TipoTurnoUncheckedUpdateManyInput>;
    where?: Prisma.TipoTurnoWhereInput;
    limit?: number;
};
export type TipoTurnoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TipoTurnoUpdateManyMutationInput, Prisma.TipoTurnoUncheckedUpdateManyInput>;
    where?: Prisma.TipoTurnoWhereInput;
    limit?: number;
    include?: Prisma.TipoTurnoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TipoTurnoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    where: Prisma.TipoTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoTurnoCreateInput, Prisma.TipoTurnoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TipoTurnoUpdateInput, Prisma.TipoTurnoUncheckedUpdateInput>;
};
export type TipoTurnoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
    where: Prisma.TipoTurnoWhereUniqueInput;
};
export type TipoTurnoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoTurnoWhereInput;
    limit?: number;
};
export type TipoTurno$turnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoTurno$contadoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TipoTurnoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TipoTurnoSelect<ExtArgs> | null;
    omit?: Prisma.TipoTurnoOmit<ExtArgs> | null;
    include?: Prisma.TipoTurnoInclude<ExtArgs> | null;
};
export {};
