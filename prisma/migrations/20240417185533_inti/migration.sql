/*
  Warnings:

  - You are about to drop the column `botInterations` on the `Bot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bot" DROP COLUMN "botInterations",
ADD COLUMN     "botInteractions" INTEGER NOT NULL DEFAULT 0;
