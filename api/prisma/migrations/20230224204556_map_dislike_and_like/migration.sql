/*
  Warnings:

  - You are about to drop the column `dislike` on the `article` table. All the data in the column will be lost.
  - You are about to drop the column `like` on the `article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `article` DROP COLUMN `dislike`,
    DROP COLUMN `like`,
    ADD COLUMN `dislikes` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `likes` INTEGER NOT NULL DEFAULT 0;
