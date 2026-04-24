/*
  Warnings:

  - Added the required column `duracionEstimada` to the `Turno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "EstadoTurno" ADD VALUE 'EN_ATENCION';

-- AlterTable
ALTER TABLE "Turno" ADD COLUMN     "cajaId" INTEGER,
ADD COLUMN     "duracionEstimada" INTEGER NOT NULL,
ADD COLUMN     "empleadoId" INTEGER,
ADD COLUMN     "horaFinAtencion" TIMESTAMP(3),
ADD COLUMN     "horaInicioAtencion" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "cajaId" INTEGER;

-- CreateTable
CREATE TABLE "Caja" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Caja_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Turno_estado_idx" ON "Turno"("estado");

-- CreateIndex
CREATE INDEX "Turno_tipoTurnoId_idx" ON "Turno"("tipoTurnoId");

-- CreateIndex
CREATE INDEX "Turno_empleadoId_idx" ON "Turno"("empleadoId");

-- CreateIndex
CREATE INDEX "Turno_horaCreacion_idx" ON "Turno"("horaCreacion");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_cajaId_fkey" FOREIGN KEY ("cajaId") REFERENCES "Caja"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_cajaId_fkey" FOREIGN KEY ("cajaId") REFERENCES "Caja"("id") ON DELETE SET NULL ON UPDATE CASCADE;
