/*
  Warnings:

  - You are about to drop the `Impresora` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `codigo` to the `Turno` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `numero` on the `Turno` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Impresora" DROP CONSTRAINT "Impresora_farmaciaId_fkey";

-- AlterTable
ALTER TABLE "Turno" ADD COLUMN     "codigo" TEXT NOT NULL,
DROP COLUMN "numero",
ADD COLUMN     "numero" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Impresora";

-- CreateTable
CREATE TABLE "ContadorTurno" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "ultimoNumero" INTEGER NOT NULL DEFAULT 0,
    "farmaciaId" INTEGER NOT NULL,
    "tipoTurnoId" INTEGER NOT NULL,

    CONSTRAINT "ContadorTurno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdempotencyKey" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "farmaciaId" INTEGER NOT NULL,

    CONSTRAINT "IdempotencyKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContadorTurno_farmaciaId_tipoTurnoId_fecha_key" ON "ContadorTurno"("farmaciaId", "tipoTurnoId", "fecha");

-- CreateIndex
CREATE UNIQUE INDEX "IdempotencyKey_key_key" ON "IdempotencyKey"("key");

-- AddForeignKey
ALTER TABLE "ContadorTurno" ADD CONSTRAINT "ContadorTurno_farmaciaId_fkey" FOREIGN KEY ("farmaciaId") REFERENCES "Farmacia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContadorTurno" ADD CONSTRAINT "ContadorTurno_tipoTurnoId_fkey" FOREIGN KEY ("tipoTurnoId") REFERENCES "TipoTurno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdempotencyKey" ADD CONSTRAINT "IdempotencyKey_farmaciaId_fkey" FOREIGN KEY ("farmaciaId") REFERENCES "Farmacia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
