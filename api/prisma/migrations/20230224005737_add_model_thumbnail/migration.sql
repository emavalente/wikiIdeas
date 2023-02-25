/*
  Warnings:

  - A unique constraint covering the columns `[id_thumbnail]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_thumbnail` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `id_thumbnail` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Thumbnail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Article_id_thumbnail_key` ON `Article`(`id_thumbnail`);

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_id_thumbnail_fkey` FOREIGN KEY (`id_thumbnail`) REFERENCES `Thumbnail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
