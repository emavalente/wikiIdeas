-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `Article_id_thumbnail_fkey`;

-- AlterTable
ALTER TABLE `article` MODIFY `id_thumbnail` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_id_thumbnail_fkey` FOREIGN KEY (`id_thumbnail`) REFERENCES `Thumbnail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
