/*
  Warnings:

  - You are about to drop the column `activo` on the `Turno` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Turno" DROP COLUMN "activo";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;
