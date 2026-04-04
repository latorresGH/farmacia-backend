/*
  Warnings:

  - You are about to drop the column `farmaciaId` on the `ContadorTurno` table. All the data in the column will be lost.
  - You are about to drop the column `farmaciaId` on the `IdempotencyKey` table. All the data in the column will be lost.
  - You are about to drop the column `farmaciaId` on the `TipoTurno` table. All the data in the column will be lost.
  - You are about to drop the column `farmaciaId` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the column `farmaciaId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Farmacia` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tipoTurnoId,fecha]` on the table `ContadorTurno` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ContadorTurno" DROP CONSTRAINT "ContadorTurno_farmaciaId_fkey";

-- DropForeignKey
ALTER TABLE "IdempotencyKey" DROP CONSTRAINT "IdempotencyKey_farmaciaId_fkey";

-- DropForeignKey
ALTER TABLE "TipoTurno" DROP CONSTRAINT "TipoTurno_farmaciaId_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_farmaciaId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_farmaciaId_fkey";

-- DropIndex
DROP INDEX "ContadorTurno_farmaciaId_tipoTurnoId_fecha_key";

-- AlterTable
ALTER TABLE "ContadorTurno" DROP COLUMN "farmaciaId";

-- AlterTable
ALTER TABLE "IdempotencyKey" DROP COLUMN "farmaciaId";

-- AlterTable
ALTER TABLE "TipoTurno" DROP COLUMN "farmaciaId";

-- AlterTable
ALTER TABLE "Turno" DROP COLUMN "farmaciaId";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "farmaciaId";

-- DropTable
DROP TABLE "Farmacia";

-- CreateIndex
CREATE UNIQUE INDEX "ContadorTurno_tipoTurnoId_fecha_key" ON "ContadorTurno"("tipoTurnoId", "fecha");
