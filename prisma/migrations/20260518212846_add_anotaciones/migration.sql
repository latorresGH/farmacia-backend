/*
  Warnings:

  - You are about to drop the column `notas` on the `Turno` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Turno" DROP COLUMN "notas";

-- CreateTable
CREATE TABLE "Anotacion" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "usuarioNombre" TEXT NOT NULL,
    "esAdmin" BOOLEAN NOT NULL DEFAULT false,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "turnoId" INTEGER NOT NULL,

    CONSTRAINT "Anotacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Anotacion_turnoId_idx" ON "Anotacion"("turnoId");

-- AddForeignKey
ALTER TABLE "Anotacion" ADD CONSTRAINT "Anotacion_turnoId_fkey" FOREIGN KEY ("turnoId") REFERENCES "Turno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
