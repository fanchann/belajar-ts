-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_shopId_fkey`;

-- DropIndex
DROP INDEX `products_shopId_key` ON `products`;

-- AlterTable
ALTER TABLE `shop` ADD COLUMN `productsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
