-- CreateTable
CREATE TABLE "_CajaToTipoTurno" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CajaToTipoTurno_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CajaToTipoTurno_B_index" ON "_CajaToTipoTurno"("B");

-- AddForeignKey
ALTER TABLE "_CajaToTipoTurno" ADD CONSTRAINT "_CajaToTipoTurno_A_fkey" FOREIGN KEY ("A") REFERENCES "Caja"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CajaToTipoTurno" ADD CONSTRAINT "_CajaToTipoTurno_B_fkey" FOREIGN KEY ("B") REFERENCES "TipoTurno"("id") ON DELETE CASCADE ON UPDATE CASCADE;
