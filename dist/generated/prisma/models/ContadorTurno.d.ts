import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContadorTurnoModel = runtime.Types.Result.DefaultSelection<Prisma.$ContadorTurnoPayload>;
export type AggregateContadorTurno = {
    _count: ContadorTurnoCountAggregateOutputType | null;
    _avg: ContadorTurnoAvgAggregateOutputType | null;
    _sum: ContadorTurnoSumAggregateOutputType | null;
    _min: ContadorTurnoMinAggregateOutputType | null;
    _max: ContadorTurnoMaxAggregateOutputType | null;
};
export type ContadorTurnoAvgAggregateOutputType = {
    id: number | null;
    ultimoNumero: number | null;
    farmaciaId: number | null;
    tipoTurnoId: number | null;
};
export type ContadorTurnoSumAggregateOutputType = {
    id: number | null;
    ultimoNumero: number | null;
    farmaciaId: number | null;
    tipoTurnoId: number | null;
};
export type ContadorTurnoMinAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    ultimoNumero: number | null;
    farmaciaId: number | null;
    tipoTurnoId: number | null;
};
export type ContadorTurnoMaxAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    ultimoNumero: number | null;
    farmaciaId: number | null;
    tipoTurnoId: number | null;
};
export type ContadorTurnoCountAggregateOutputType = {
    id: number;
    fecha: number;
    ultimoNumero: number;
    farmaciaId: number;
    tipoTurnoId: number;
    _all: number;
};
export type ContadorTurnoAvgAggregateInputType = {
    id?: true;
    ultimoNumero?: true;
    farmaciaId?: true;
    tipoTurnoId?: true;
};
export type ContadorTurnoSumAggregateInputType = {
    id?: true;
    ultimoNumero?: true;
    farmaciaId?: true;
    tipoTurnoId?: true;
};
export type ContadorTurnoMinAggregateInputType = {
    id?: true;
    fecha?: true;
    ultimoNumero?: true;
    farmaciaId?: true;
    tipoTurnoId?: true;
};
export type ContadorTurnoMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    ultimoNumero?: true;
    farmaciaId?: true;
    tipoTurnoId?: true;
};
export type ContadorTurnoCountAggregateInputType = {
    id?: true;
    fecha?: true;
    ultimoNumero?: true;
    farmaciaId?: true;
    tipoTurnoId?: true;
    _all?: true;
};
export type ContadorTurnoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContadorTurnoWhereInput;
    orderBy?: Prisma.ContadorTurnoOrderByWithRelationInput | Prisma.ContadorTurnoOrderByWithRelationInput[];
    cursor?: Prisma.ContadorTurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContadorTurnoCountAggregateInputType;
    _avg?: ContadorTurnoAvgAggregateInputType;
    _sum?: ContadorTurnoSumAggregateInputType;
    _min?: ContadorTurnoMinAggregateInputType;
    _max?: ContadorTurnoMaxAggregateInputType;
};
export type GetContadorTurnoAggregateType<T extends ContadorTurnoAggregateArgs> = {
    [P in keyof T & keyof AggregateContadorTurno]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContadorTurno[P]> : Prisma.GetScalarType<T[P], AggregateContadorTurno[P]>;
};
export type ContadorTurnoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContadorTurnoWhereInput;
    orderBy?: Prisma.ContadorTurnoOrderByWithAggregationInput | Prisma.ContadorTurnoOrderByWithAggregationInput[];
    by: Prisma.ContadorTurnoScalarFieldEnum[] | Prisma.ContadorTurnoScalarFieldEnum;
    having?: Prisma.ContadorTurnoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContadorTurnoCountAggregateInputType | true;
    _avg?: ContadorTurnoAvgAggregateInputType;
    _sum?: ContadorTurnoSumAggregateInputType;
    _min?: ContadorTurnoMinAggregateInputType;
    _max?: ContadorTurnoMaxAggregateInputType;
};
export type ContadorTurnoGroupByOutputType = {
    id: number;
    fecha: Date;
    ultimoNumero: number;
    farmaciaId: number;
    tipoTurnoId: number;
    _count: ContadorTurnoCountAggregateOutputType | null;
    _avg: ContadorTurnoAvgAggregateOutputType | null;
    _sum: ContadorTurnoSumAggregateOutputType | null;
    _min: ContadorTurnoMinAggregateOutputType | null;
    _max: ContadorTurnoMaxAggregateOutputType | null;
};
type GetContadorTurnoGroupByPayload<T extends ContadorTurnoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContadorTurnoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContadorTurnoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContadorTurnoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContadorTurnoGroupByOutputType[P]>;
}>>;
export type ContadorTurnoWhereInput = {
    AND?: Prisma.ContadorTurnoWhereInput | Prisma.ContadorTurnoWhereInput[];
    OR?: Prisma.ContadorTurnoWhereInput[];
    NOT?: Prisma.ContadorTurnoWhereInput | Prisma.ContadorTurnoWhereInput[];
    id?: Prisma.IntFilter<"ContadorTurno"> | number;
    fecha?: Prisma.DateTimeFilter<"ContadorTurno"> | Date | string;
    ultimoNumero?: Prisma.IntFilter<"ContadorTurno"> | number;
    farmaciaId?: Prisma.IntFilter<"ContadorTurno"> | number;
    tipoTurnoId?: Prisma.IntFilter<"ContadorTurno"> | number;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
    tipoTurno?: Prisma.XOR<Prisma.TipoTurnoScalarRelationFilter, Prisma.TipoTurnoWhereInput>;
};
export type ContadorTurnoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    farmacia?: Prisma.FarmaciaOrderByWithRelationInput;
    tipoTurno?: Prisma.TipoTurnoOrderByWithRelationInput;
};
export type ContadorTurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    farmaciaId_tipoTurnoId_fecha?: Prisma.ContadorTurnoFarmaciaIdTipoTurnoIdFechaCompoundUniqueInput;
    AND?: Prisma.ContadorTurnoWhereInput | Prisma.ContadorTurnoWhereInput[];
    OR?: Prisma.ContadorTurnoWhereInput[];
    NOT?: Prisma.ContadorTurnoWhereInput | Prisma.ContadorTurnoWhereInput[];
    fecha?: Prisma.DateTimeFilter<"ContadorTurno"> | Date | string;
    ultimoNumero?: Prisma.IntFilter<"ContadorTurno"> | number;
    farmaciaId?: Prisma.IntFilter<"ContadorTurno"> | number;
    tipoTurnoId?: Prisma.IntFilter<"ContadorTurno"> | number;
    farmacia?: Prisma.XOR<Prisma.FarmaciaScalarRelationFilter, Prisma.FarmaciaWhereInput>;
    tipoTurno?: Prisma.XOR<Prisma.TipoTurnoScalarRelationFilter, Prisma.TipoTurnoWhereInput>;
}, "id" | "farmaciaId_tipoTurnoId_fecha">;
export type ContadorTurnoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
    _count?: Prisma.ContadorTurnoCountOrderByAggregateInput;
    _avg?: Prisma.ContadorTurnoAvgOrderByAggregateInput;
    _max?: Prisma.ContadorTurnoMaxOrderByAggregateInput;
    _min?: Prisma.ContadorTurnoMinOrderByAggregateInput;
    _sum?: Prisma.ContadorTurnoSumOrderByAggregateInput;
};
export type ContadorTurnoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContadorTurnoScalarWhereWithAggregatesInput | Prisma.ContadorTurnoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContadorTurnoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContadorTurnoScalarWhereWithAggregatesInput | Prisma.ContadorTurnoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ContadorTurno"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"ContadorTurno"> | Date | string;
    ultimoNumero?: Prisma.IntWithAggregatesFilter<"ContadorTurno"> | number;
    farmaciaId?: Prisma.IntWithAggregatesFilter<"ContadorTurno"> | number;
    tipoTurnoId?: Prisma.IntWithAggregatesFilter<"ContadorTurno"> | number;
};
export type ContadorTurnoCreateInput = {
    fecha: Date | string;
    ultimoNumero?: number;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutContadoresInput;
    tipoTurno: Prisma.TipoTurnoCreateNestedOneWithoutContadoresInput;
};
export type ContadorTurnoUncheckedCreateInput = {
    id?: number;
    fecha: Date | string;
    ultimoNumero?: number;
    farmaciaId: number;
    tipoTurnoId: number;
};
export type ContadorTurnoUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutContadoresNestedInput;
    tipoTurno?: Prisma.TipoTurnoUpdateOneRequiredWithoutContadoresNestedInput;
};
export type ContadorTurnoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoCreateManyInput = {
    id?: number;
    fecha: Date | string;
    ultimoNumero?: number;
    farmaciaId: number;
    tipoTurnoId: number;
};
export type ContadorTurnoUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoListRelationFilter = {
    every?: Prisma.ContadorTurnoWhereInput;
    some?: Prisma.ContadorTurnoWhereInput;
    none?: Prisma.ContadorTurnoWhereInput;
};
export type ContadorTurnoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContadorTurnoFarmaciaIdTipoTurnoIdFechaCompoundUniqueInput = {
    farmaciaId: number;
    tipoTurnoId: number;
    fecha: Date | string;
};
export type ContadorTurnoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
};
export type ContadorTurnoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
};
export type ContadorTurnoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
};
export type ContadorTurnoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
};
export type ContadorTurnoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ultimoNumero?: Prisma.SortOrder;
    farmaciaId?: Prisma.SortOrder;
    tipoTurnoId?: Prisma.SortOrder;
};
export type ContadorTurnoCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.ContadorTurnoCreateWithoutFarmaciaInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.ContadorTurnoCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
};
export type ContadorTurnoUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.ContadorTurnoCreateWithoutFarmaciaInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput[];
    createMany?: Prisma.ContadorTurnoCreateManyFarmaciaInputEnvelope;
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
};
export type ContadorTurnoUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.ContadorTurnoCreateWithoutFarmaciaInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.ContadorTurnoCreateManyFarmaciaInputEnvelope;
    set?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    disconnect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    delete?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    update?: Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.ContadorTurnoUpdateManyWithWhereWithoutFarmaciaInput | Prisma.ContadorTurnoUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.ContadorTurnoScalarWhereInput | Prisma.ContadorTurnoScalarWhereInput[];
};
export type ContadorTurnoUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput> | Prisma.ContadorTurnoCreateWithoutFarmaciaInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput | Prisma.ContadorTurnoCreateOrConnectWithoutFarmaciaInput[];
    upsert?: Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutFarmaciaInput | Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutFarmaciaInput[];
    createMany?: Prisma.ContadorTurnoCreateManyFarmaciaInputEnvelope;
    set?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    disconnect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    delete?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    update?: Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutFarmaciaInput | Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutFarmaciaInput[];
    updateMany?: Prisma.ContadorTurnoUpdateManyWithWhereWithoutFarmaciaInput | Prisma.ContadorTurnoUpdateManyWithWhereWithoutFarmaciaInput[];
    deleteMany?: Prisma.ContadorTurnoScalarWhereInput | Prisma.ContadorTurnoScalarWhereInput[];
};
export type ContadorTurnoCreateNestedManyWithoutTipoTurnoInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.ContadorTurnoCreateWithoutTipoTurnoInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput[];
    createMany?: Prisma.ContadorTurnoCreateManyTipoTurnoInputEnvelope;
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
};
export type ContadorTurnoUncheckedCreateNestedManyWithoutTipoTurnoInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.ContadorTurnoCreateWithoutTipoTurnoInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput[];
    createMany?: Prisma.ContadorTurnoCreateManyTipoTurnoInputEnvelope;
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
};
export type ContadorTurnoUpdateManyWithoutTipoTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.ContadorTurnoCreateWithoutTipoTurnoInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput[];
    upsert?: Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutTipoTurnoInput | Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutTipoTurnoInput[];
    createMany?: Prisma.ContadorTurnoCreateManyTipoTurnoInputEnvelope;
    set?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    disconnect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    delete?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    update?: Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutTipoTurnoInput | Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutTipoTurnoInput[];
    updateMany?: Prisma.ContadorTurnoUpdateManyWithWhereWithoutTipoTurnoInput | Prisma.ContadorTurnoUpdateManyWithWhereWithoutTipoTurnoInput[];
    deleteMany?: Prisma.ContadorTurnoScalarWhereInput | Prisma.ContadorTurnoScalarWhereInput[];
};
export type ContadorTurnoUncheckedUpdateManyWithoutTipoTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput> | Prisma.ContadorTurnoCreateWithoutTipoTurnoInput[] | Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput[];
    connectOrCreate?: Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput | Prisma.ContadorTurnoCreateOrConnectWithoutTipoTurnoInput[];
    upsert?: Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutTipoTurnoInput | Prisma.ContadorTurnoUpsertWithWhereUniqueWithoutTipoTurnoInput[];
    createMany?: Prisma.ContadorTurnoCreateManyTipoTurnoInputEnvelope;
    set?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    disconnect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    delete?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    connect?: Prisma.ContadorTurnoWhereUniqueInput | Prisma.ContadorTurnoWhereUniqueInput[];
    update?: Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutTipoTurnoInput | Prisma.ContadorTurnoUpdateWithWhereUniqueWithoutTipoTurnoInput[];
    updateMany?: Prisma.ContadorTurnoUpdateManyWithWhereWithoutTipoTurnoInput | Prisma.ContadorTurnoUpdateManyWithWhereWithoutTipoTurnoInput[];
    deleteMany?: Prisma.ContadorTurnoScalarWhereInput | Prisma.ContadorTurnoScalarWhereInput[];
};
export type ContadorTurnoCreateWithoutFarmaciaInput = {
    fecha: Date | string;
    ultimoNumero?: number;
    tipoTurno: Prisma.TipoTurnoCreateNestedOneWithoutContadoresInput;
};
export type ContadorTurnoUncheckedCreateWithoutFarmaciaInput = {
    id?: number;
    fecha: Date | string;
    ultimoNumero?: number;
    tipoTurnoId: number;
};
export type ContadorTurnoCreateOrConnectWithoutFarmaciaInput = {
    where: Prisma.ContadorTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput>;
};
export type ContadorTurnoCreateManyFarmaciaInputEnvelope = {
    data: Prisma.ContadorTurnoCreateManyFarmaciaInput | Prisma.ContadorTurnoCreateManyFarmaciaInput[];
    skipDuplicates?: boolean;
};
export type ContadorTurnoUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.ContadorTurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContadorTurnoUpdateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedUpdateWithoutFarmaciaInput>;
    create: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedCreateWithoutFarmaciaInput>;
};
export type ContadorTurnoUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: Prisma.ContadorTurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateWithoutFarmaciaInput, Prisma.ContadorTurnoUncheckedUpdateWithoutFarmaciaInput>;
};
export type ContadorTurnoUpdateManyWithWhereWithoutFarmaciaInput = {
    where: Prisma.ContadorTurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateManyMutationInput, Prisma.ContadorTurnoUncheckedUpdateManyWithoutFarmaciaInput>;
};
export type ContadorTurnoScalarWhereInput = {
    AND?: Prisma.ContadorTurnoScalarWhereInput | Prisma.ContadorTurnoScalarWhereInput[];
    OR?: Prisma.ContadorTurnoScalarWhereInput[];
    NOT?: Prisma.ContadorTurnoScalarWhereInput | Prisma.ContadorTurnoScalarWhereInput[];
    id?: Prisma.IntFilter<"ContadorTurno"> | number;
    fecha?: Prisma.DateTimeFilter<"ContadorTurno"> | Date | string;
    ultimoNumero?: Prisma.IntFilter<"ContadorTurno"> | number;
    farmaciaId?: Prisma.IntFilter<"ContadorTurno"> | number;
    tipoTurnoId?: Prisma.IntFilter<"ContadorTurno"> | number;
};
export type ContadorTurnoCreateWithoutTipoTurnoInput = {
    fecha: Date | string;
    ultimoNumero?: number;
    farmacia: Prisma.FarmaciaCreateNestedOneWithoutContadoresInput;
};
export type ContadorTurnoUncheckedCreateWithoutTipoTurnoInput = {
    id?: number;
    fecha: Date | string;
    ultimoNumero?: number;
    farmaciaId: number;
};
export type ContadorTurnoCreateOrConnectWithoutTipoTurnoInput = {
    where: Prisma.ContadorTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput>;
};
export type ContadorTurnoCreateManyTipoTurnoInputEnvelope = {
    data: Prisma.ContadorTurnoCreateManyTipoTurnoInput | Prisma.ContadorTurnoCreateManyTipoTurnoInput[];
    skipDuplicates?: boolean;
};
export type ContadorTurnoUpsertWithWhereUniqueWithoutTipoTurnoInput = {
    where: Prisma.ContadorTurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContadorTurnoUpdateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedUpdateWithoutTipoTurnoInput>;
    create: Prisma.XOR<Prisma.ContadorTurnoCreateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedCreateWithoutTipoTurnoInput>;
};
export type ContadorTurnoUpdateWithWhereUniqueWithoutTipoTurnoInput = {
    where: Prisma.ContadorTurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateWithoutTipoTurnoInput, Prisma.ContadorTurnoUncheckedUpdateWithoutTipoTurnoInput>;
};
export type ContadorTurnoUpdateManyWithWhereWithoutTipoTurnoInput = {
    where: Prisma.ContadorTurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateManyMutationInput, Prisma.ContadorTurnoUncheckedUpdateManyWithoutTipoTurnoInput>;
};
export type ContadorTurnoCreateManyFarmaciaInput = {
    id?: number;
    fecha: Date | string;
    ultimoNumero?: number;
    tipoTurnoId: number;
};
export type ContadorTurnoUpdateWithoutFarmaciaInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoTurno?: Prisma.TipoTurnoUpdateOneRequiredWithoutContadoresNestedInput;
};
export type ContadorTurnoUncheckedUpdateWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoUncheckedUpdateManyWithoutFarmaciaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoTurnoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoCreateManyTipoTurnoInput = {
    id?: number;
    fecha: Date | string;
    ultimoNumero?: number;
    farmaciaId: number;
};
export type ContadorTurnoUpdateWithoutTipoTurnoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    farmacia?: Prisma.FarmaciaUpdateOneRequiredWithoutContadoresNestedInput;
};
export type ContadorTurnoUncheckedUpdateWithoutTipoTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoUncheckedUpdateManyWithoutTipoTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoNumero?: Prisma.IntFieldUpdateOperationsInput | number;
    farmaciaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContadorTurnoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    ultimoNumero?: boolean;
    farmaciaId?: boolean;
    tipoTurnoId?: boolean;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contadorTurno"]>;
export type ContadorTurnoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    ultimoNumero?: boolean;
    farmaciaId?: boolean;
    tipoTurnoId?: boolean;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contadorTurno"]>;
export type ContadorTurnoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    ultimoNumero?: boolean;
    farmaciaId?: boolean;
    tipoTurnoId?: boolean;
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contadorTurno"]>;
export type ContadorTurnoSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    ultimoNumero?: boolean;
    farmaciaId?: boolean;
    tipoTurnoId?: boolean;
};
export type ContadorTurnoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "ultimoNumero" | "farmaciaId" | "tipoTurnoId", ExtArgs["result"]["contadorTurno"]>;
export type ContadorTurnoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
};
export type ContadorTurnoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
};
export type ContadorTurnoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farmacia?: boolean | Prisma.FarmaciaDefaultArgs<ExtArgs>;
    tipoTurno?: boolean | Prisma.TipoTurnoDefaultArgs<ExtArgs>;
};
export type $ContadorTurnoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContadorTurno";
    objects: {
        farmacia: Prisma.$FarmaciaPayload<ExtArgs>;
        tipoTurno: Prisma.$TipoTurnoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fecha: Date;
        ultimoNumero: number;
        farmaciaId: number;
        tipoTurnoId: number;
    }, ExtArgs["result"]["contadorTurno"]>;
    composites: {};
};
export type ContadorTurnoGetPayload<S extends boolean | null | undefined | ContadorTurnoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload, S>;
export type ContadorTurnoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContadorTurnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContadorTurnoCountAggregateInputType | true;
};
export interface ContadorTurnoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContadorTurno'];
        meta: {
            name: 'ContadorTurno';
        };
    };
    findUnique<T extends ContadorTurnoFindUniqueArgs>(args: Prisma.SelectSubset<T, ContadorTurnoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContadorTurnoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContadorTurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContadorTurnoFindFirstArgs>(args?: Prisma.SelectSubset<T, ContadorTurnoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContadorTurnoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContadorTurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContadorTurnoFindManyArgs>(args?: Prisma.SelectSubset<T, ContadorTurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContadorTurnoCreateArgs>(args: Prisma.SelectSubset<T, ContadorTurnoCreateArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContadorTurnoCreateManyArgs>(args?: Prisma.SelectSubset<T, ContadorTurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContadorTurnoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContadorTurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContadorTurnoDeleteArgs>(args: Prisma.SelectSubset<T, ContadorTurnoDeleteArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContadorTurnoUpdateArgs>(args: Prisma.SelectSubset<T, ContadorTurnoUpdateArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContadorTurnoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContadorTurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContadorTurnoUpdateManyArgs>(args: Prisma.SelectSubset<T, ContadorTurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContadorTurnoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContadorTurnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContadorTurnoUpsertArgs>(args: Prisma.SelectSubset<T, ContadorTurnoUpsertArgs<ExtArgs>>): Prisma.Prisma__ContadorTurnoClient<runtime.Types.Result.GetResult<Prisma.$ContadorTurnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContadorTurnoCountArgs>(args?: Prisma.Subset<T, ContadorTurnoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContadorTurnoCountAggregateOutputType> : number>;
    aggregate<T extends ContadorTurnoAggregateArgs>(args: Prisma.Subset<T, ContadorTurnoAggregateArgs>): Prisma.PrismaPromise<GetContadorTurnoAggregateType<T>>;
    groupBy<T extends ContadorTurnoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContadorTurnoGroupByArgs['orderBy'];
    } : {
        orderBy?: ContadorTurnoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContadorTurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContadorTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContadorTurnoFieldRefs;
}
export interface Prisma__ContadorTurnoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farmacia<T extends Prisma.FarmaciaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmaciaDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmaciaClient<runtime.Types.Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tipoTurno<T extends Prisma.TipoTurnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoTurnoDefaultArgs<ExtArgs>>): Prisma.Prisma__TipoTurnoClient<runtime.Types.Result.GetResult<Prisma.$TipoTurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContadorTurnoFieldRefs {
    readonly id: Prisma.FieldRef<"ContadorTurno", 'Int'>;
    readonly fecha: Prisma.FieldRef<"ContadorTurno", 'DateTime'>;
    readonly ultimoNumero: Prisma.FieldRef<"ContadorTurno", 'Int'>;
    readonly farmaciaId: Prisma.FieldRef<"ContadorTurno", 'Int'>;
    readonly tipoTurnoId: Prisma.FieldRef<"ContadorTurno", 'Int'>;
}
export type ContadorTurnoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    where: Prisma.ContadorTurnoWhereUniqueInput;
};
export type ContadorTurnoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    where: Prisma.ContadorTurnoWhereUniqueInput;
};
export type ContadorTurnoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContadorTurnoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContadorTurnoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContadorTurnoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContadorTurnoCreateInput, Prisma.ContadorTurnoUncheckedCreateInput>;
};
export type ContadorTurnoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContadorTurnoCreateManyInput | Prisma.ContadorTurnoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContadorTurnoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    data: Prisma.ContadorTurnoCreateManyInput | Prisma.ContadorTurnoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContadorTurnoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContadorTurnoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateInput, Prisma.ContadorTurnoUncheckedUpdateInput>;
    where: Prisma.ContadorTurnoWhereUniqueInput;
};
export type ContadorTurnoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateManyMutationInput, Prisma.ContadorTurnoUncheckedUpdateManyInput>;
    where?: Prisma.ContadorTurnoWhereInput;
    limit?: number;
};
export type ContadorTurnoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContadorTurnoUpdateManyMutationInput, Prisma.ContadorTurnoUncheckedUpdateManyInput>;
    where?: Prisma.ContadorTurnoWhereInput;
    limit?: number;
    include?: Prisma.ContadorTurnoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContadorTurnoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    where: Prisma.ContadorTurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContadorTurnoCreateInput, Prisma.ContadorTurnoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContadorTurnoUpdateInput, Prisma.ContadorTurnoUncheckedUpdateInput>;
};
export type ContadorTurnoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
    where: Prisma.ContadorTurnoWhereUniqueInput;
};
export type ContadorTurnoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContadorTurnoWhereInput;
    limit?: number;
};
export type ContadorTurnoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContadorTurnoSelect<ExtArgs> | null;
    omit?: Prisma.ContadorTurnoOmit<ExtArgs> | null;
    include?: Prisma.ContadorTurnoInclude<ExtArgs> | null;
};
export {};
