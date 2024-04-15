/*
  Warnings:

  - Added the required column `userId` to the `Bot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bot" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "github_id" TEXT,
ADD COLUMN     "username" TEXT;
