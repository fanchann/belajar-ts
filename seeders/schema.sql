/*M!999999\- enable the sandbox mode */
-- MariaDB dump 10.19  Distrib 10.11.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: e_thrift
-- ------------------------------------------------------
-- Server version	10.11.11-MariaDB-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES
('09254bfd-abac-4cb4-bd06-baa7c6cb5730','af0ca71113285fb0a16e70a80d5614143d275724433476324e480f52f0c7009d','2025-06-13 17:54:16.498','20250613172818_',NULL,NULL,'2025-06-13 17:54:16.409',1),
('1bc71de1-7468-45d2-9207-2bc9573cb7de','b9946f654399590bff1e5a287569c6c16076ea6fe554bdc1a0fc582bdcecebb0','2025-06-13 17:54:16.581','20250613173003_',NULL,NULL,'2025-06-13 17:54:16.540',1),
('5ad17a99-7959-4415-9412-63183cee94dd','5db7d92a2631bc4cba89768b94f3162a70495efa44ff76a5ef17e64c66cf51d8','2025-06-13 17:54:16.623','20250613174947_',NULL,NULL,'2025-06-13 17:54:16.582',1),
('aece7ac9-26fd-4147-baf9-219ab0e2dd9b','466ba919943419a030055c89da714076110691faa4a082a7f4ce8add03f3164b','2025-06-13 17:54:16.540','20250613172853_',NULL,NULL,'2025-06-13 17:54:16.499',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` longtext NOT NULL,
  `deskripsi` longtext DEFAULT NULL,
  `harga` int(11) NOT NULL DEFAULT 0,
  `stok` int(11) NOT NULL DEFAULT 0,
  `shopId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `deletedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES
(1,'voluptatem architecto','Voluptatem perferendis accusantium sit consequatur aut. Consequatur aut accusantium voluptatem perferendis sit. Accusantium voluptatem consequatur aut sit perferendis. Voluptatem aut accusantium consequatur sit perferendis. Perferendis consequatur accusantium voluptatem aut sit. Aut consequatur sit accusantium voluptatem perferendis. Consequatur sit accusantium aut voluptatem perferendis. Voluptatem accusantium perferendis sit consequatur aut.',2000,10,1,'2025-06-13 17:54:48.340',NULL,NULL),
(2,'sed et','Voluptatem consequatur sit aut accusantium perferendis. Consequatur perferendis voluptatem aut accusantium sit. Consequatur aut voluptatem perferendis sit accusantium. Accusantium voluptatem consequatur sit aut perferendis. Sit accusantium consequatur aut voluptatem perferendis. Sit aut accusantium voluptatem consequatur perferendis. Perferendis voluptatem sit aut accusantium consequatur.',3000,20,1,'2025-06-13 17:54:48.340',NULL,NULL),
(3,'blanditiis in','Accusantium consequatur sit aut voluptatem perferendis. Sit perferendis consequatur accusantium aut voluptatem. Perferendis aut sit voluptatem consequatur accusantium.',3000,10,2,'2025-06-13 17:54:48.399',NULL,NULL),
(4,'quis debitis','Accusantium consequatur aut perferendis sit voluptatem. Sit aut perferendis accusantium voluptatem consequatur. Consequatur accusantium aut perferendis sit voluptatem. Aut consequatur accusantium perferendis voluptatem sit.',4000,20,2,'2025-06-13 17:54:48.400',NULL,NULL),
(5,'accusamus alias','Consequatur aut sit perferendis accusantium voluptatem. Accusantium aut voluptatem sit perferendis consequatur. Aut perferendis sit voluptatem consequatur accusantium. Sit accusantium consequatur aut voluptatem perferendis. Voluptatem accusantium aut perferendis consequatur sit.',4000,10,3,'2025-06-13 17:54:48.457',NULL,NULL),
(6,'sunt eaque','Perferendis aut accusantium voluptatem consequatur sit. Consequatur voluptatem accusantium aut sit perferendis. Consequatur accusantium aut perferendis sit voluptatem. Perferendis consequatur sit voluptatem accusantium aut. Consequatur accusantium aut voluptatem perferendis sit. Accusantium consequatur sit voluptatem aut perferendis. Aut voluptatem sit accusantium consequatur perferendis. Voluptatem aut sit consequatur perferendis accusantium.',5000,20,3,'2025-06-13 17:54:48.458',NULL,NULL),
(7,'a occaecati','Perferendis sit voluptatem accusantium aut consequatur. Sit consequatur perferendis aut accusantium voluptatem. Sit voluptatem aut perferendis accusantium consequatur. Voluptatem perferendis sit consequatur accusantium aut. Voluptatem perferendis aut accusantium sit consequatur. Perferendis voluptatem consequatur aut sit accusantium. Voluptatem sit consequatur accusantium perferendis aut. Perferendis voluptatem sit accusantium consequatur aut. Voluptatem consequatur perferendis accusantium aut sit.',5000,10,4,'2025-06-13 17:54:48.514',NULL,NULL),
(8,'et quae','Consequatur sit aut perferendis accusantium voluptatem.',6000,20,4,'2025-06-13 17:54:48.515',NULL,NULL),
(9,'consequuntur numquam','Sit accusantium consequatur voluptatem aut perferendis.',6000,10,5,'2025-06-13 17:54:48.573',NULL,NULL),
(10,'eius distinctio','Perferendis consequatur aut sit accusantium voluptatem.',7000,20,5,'2025-06-13 17:54:48.573',NULL,NULL),
(11,'impedit ipsa','Voluptatem sit aut accusantium perferendis consequatur. Consequatur perferendis accusantium aut sit voluptatem. Sit voluptatem accusantium consequatur perferendis aut. Aut accusantium perferendis voluptatem sit consequatur. Sit voluptatem perferendis accusantium consequatur aut. Accusantium consequatur sit voluptatem perferendis aut. Aut sit voluptatem perferendis consequatur accusantium. Consequatur perferendis sit aut voluptatem accusantium.',7000,10,6,'2025-06-13 17:54:48.630',NULL,NULL),
(12,'aliquid dolorum','Accusantium perferendis voluptatem consequatur aut sit. Perferendis consequatur sit accusantium voluptatem aut. Consequatur perferendis sit aut voluptatem accusantium.',8000,20,6,'2025-06-13 17:54:48.631',NULL,NULL),
(13,'saepe nihil','Consequatur perferendis sit voluptatem aut accusantium. Accusantium perferendis sit consequatur aut voluptatem. Accusantium aut perferendis voluptatem sit consequatur. Perferendis aut accusantium voluptatem consequatur sit. Perferendis sit accusantium aut consequatur voluptatem.',8000,10,7,'2025-06-13 17:54:48.688',NULL,NULL),
(14,'nam rerum','Perferendis consequatur sit aut voluptatem accusantium. Accusantium sit aut perferendis consequatur voluptatem. Accusantium perferendis voluptatem aut consequatur sit. Voluptatem perferendis aut consequatur accusantium sit.',9000,20,7,'2025-06-13 17:54:48.689',NULL,NULL),
(15,'dolore delectus','Perferendis sit consequatur accusantium voluptatem aut. Voluptatem perferendis sit aut accusantium consequatur. Accusantium consequatur voluptatem sit aut perferendis. Accusantium voluptatem perferendis sit aut consequatur. Sit consequatur perferendis voluptatem aut accusantium. Voluptatem sit consequatur perferendis accusantium aut. Consequatur accusantium sit perferendis aut voluptatem.',9000,10,8,'2025-06-13 17:54:48.745',NULL,NULL),
(16,'illo vitae','Aut accusantium sit consequatur voluptatem perferendis. Voluptatem aut perferendis sit accusantium consequatur. Sit aut consequatur accusantium perferendis voluptatem. Sit accusantium perferendis aut voluptatem consequatur. Voluptatem perferendis aut sit consequatur accusantium. Perferendis voluptatem consequatur sit aut accusantium. Aut accusantium consequatur sit perferendis voluptatem. Consequatur accusantium aut voluptatem perferendis sit. Voluptatem perferendis aut sit consequatur accusantium.',10000,20,8,'2025-06-13 17:54:48.746',NULL,NULL),
(17,'ad aut','Aut sit accusantium consequatur voluptatem perferendis. Perferendis sit consequatur voluptatem accusantium aut. Aut perferendis consequatur sit accusantium voluptatem. Accusantium aut consequatur sit voluptatem perferendis. Consequatur voluptatem sit accusantium perferendis aut. Consequatur sit aut perferendis accusantium voluptatem. Aut voluptatem accusantium sit consequatur perferendis.',10000,10,9,'2025-06-13 17:54:48.804',NULL,NULL),
(18,'error culpa','Aut voluptatem consequatur sit accusantium perferendis. Consequatur perferendis accusantium sit aut voluptatem. Sit voluptatem aut consequatur perferendis accusantium. Consequatur aut perferendis voluptatem accusantium sit. Consequatur perferendis sit aut accusantium voluptatem. Voluptatem accusantium aut consequatur sit perferendis. Accusantium voluptatem sit consequatur perferendis aut. Voluptatem perferendis accusantium sit consequatur aut. Sit accusantium perferendis aut voluptatem consequatur. Voluptatem perferendis sit consequatur aut accusantium.',11000,20,9,'2025-06-13 17:54:48.805',NULL,NULL),
(19,'aperiam quia','Accusantium sit voluptatem perferendis aut consequatur. Voluptatem accusantium perferendis aut sit consequatur. Accusantium consequatur voluptatem sit aut perferendis. Accusantium aut voluptatem consequatur sit perferendis. Perferendis accusantium consequatur voluptatem aut sit. Accusantium voluptatem sit aut perferendis consequatur. Accusantium consequatur aut sit perferendis voluptatem. Consequatur perferendis sit aut voluptatem accusantium. Accusantium perferendis voluptatem aut consequatur sit. Voluptatem sit aut consequatur accusantium perferendis.',11000,10,10,'2025-06-13 17:54:48.863',NULL,NULL),
(20,'necessitatibus ratione','Aut consequatur accusantium voluptatem perferendis sit. Accusantium sit voluptatem consequatur aut perferendis. Perferendis consequatur aut voluptatem sit accusantium. Perferendis aut sit voluptatem accusantium consequatur. Aut accusantium voluptatem consequatur sit perferendis. Consequatur accusantium sit voluptatem aut perferendis. Perferendis voluptatem consequatur accusantium aut sit. Voluptatem consequatur perferendis sit accusantium aut. Accusantium consequatur voluptatem sit perferendis aut.',12000,20,10,'2025-06-13 17:54:48.864',NULL,NULL),
(21,'aut et','Consequatur sit accusantium voluptatem aut perferendis. Voluptatem consequatur accusantium perferendis sit aut. Accusantium aut consequatur perferendis sit voluptatem. Consequatur perferendis sit aut accusantium voluptatem. Voluptatem sit accusantium consequatur perferendis aut. Aut voluptatem consequatur sit accusantium perferendis. Aut perferendis sit voluptatem consequatur accusantium. Aut sit perferendis voluptatem consequatur accusantium. Accusantium voluptatem consequatur perferendis sit aut.',12000,10,11,'2025-06-13 17:54:48.921',NULL,NULL),
(22,'consequuntur rerum','Accusantium sit aut consequatur voluptatem perferendis. Accusantium sit perferendis aut consequatur voluptatem. Accusantium consequatur perferendis voluptatem aut sit. Sit voluptatem perferendis aut consequatur accusantium. Voluptatem consequatur aut sit perferendis accusantium. Consequatur sit accusantium perferendis voluptatem aut. Accusantium aut perferendis consequatur sit voluptatem.',13000,20,11,'2025-06-13 17:54:48.922',NULL,NULL),
(23,'velit magnam','Sit consequatur aut perferendis voluptatem accusantium. Perferendis sit aut consequatur voluptatem accusantium. Voluptatem aut consequatur accusantium sit perferendis. Consequatur aut sit perferendis accusantium voluptatem. Voluptatem perferendis accusantium sit consequatur aut. Accusantium voluptatem consequatur sit perferendis aut. Voluptatem perferendis aut consequatur accusantium sit. Aut perferendis consequatur voluptatem sit accusantium.',13000,10,12,'2025-06-13 17:54:48.978',NULL,NULL),
(24,'aut ducimus','Sit accusantium perferendis consequatur aut voluptatem. Accusantium aut voluptatem perferendis consequatur sit. Voluptatem consequatur aut perferendis sit accusantium. Voluptatem sit consequatur perferendis accusantium aut. Aut voluptatem perferendis consequatur sit accusantium. Aut voluptatem accusantium sit perferendis consequatur. Accusantium voluptatem consequatur aut perferendis sit.',14000,20,12,'2025-06-13 17:54:48.979',NULL,NULL),
(25,'quisquam quo','Voluptatem accusantium perferendis aut sit consequatur. Aut accusantium consequatur sit perferendis voluptatem. Voluptatem consequatur aut perferendis accusantium sit. Consequatur perferendis sit aut voluptatem accusantium. Perferendis aut accusantium sit voluptatem consequatur. Accusantium perferendis sit consequatur aut voluptatem. Accusantium sit aut consequatur perferendis voluptatem.',14000,10,13,'2025-06-13 17:54:49.035',NULL,NULL),
(26,'vero dicta','Perferendis aut consequatur voluptatem accusantium sit. Perferendis aut voluptatem sit consequatur accusantium. Consequatur aut sit voluptatem accusantium perferendis. Aut accusantium perferendis sit consequatur voluptatem. Aut accusantium consequatur voluptatem perferendis sit. Consequatur sit voluptatem accusantium aut perferendis. Aut sit accusantium perferendis voluptatem consequatur. Sit consequatur perferendis voluptatem aut accusantium. Consequatur perferendis voluptatem sit accusantium aut.',15000,20,13,'2025-06-13 17:54:49.036',NULL,NULL),
(27,'aut qui','Consequatur aut accusantium perferendis sit voluptatem. Aut sit voluptatem perferendis consequatur accusantium. Voluptatem perferendis sit aut consequatur accusantium. Perferendis aut consequatur voluptatem accusantium sit. Voluptatem aut perferendis accusantium consequatur sit. Consequatur voluptatem aut perferendis accusantium sit. Consequatur aut perferendis sit voluptatem accusantium. Consequatur voluptatem sit accusantium perferendis aut. Aut voluptatem accusantium perferendis consequatur sit.',15000,10,14,'2025-06-13 17:54:49.095',NULL,NULL),
(28,'non ea','Consequatur sit perferendis aut accusantium voluptatem.',16000,20,14,'2025-06-13 17:54:49.096',NULL,NULL),
(29,'occaecati autem','Voluptatem accusantium consequatur sit perferendis aut. Voluptatem perferendis aut consequatur sit accusantium. Perferendis accusantium aut consequatur voluptatem sit. Aut voluptatem accusantium consequatur perferendis sit. Voluptatem accusantium consequatur perferendis aut sit. Accusantium voluptatem sit aut perferendis consequatur. Sit consequatur accusantium aut voluptatem perferendis. Perferendis voluptatem accusantium consequatur sit aut. Voluptatem accusantium perferendis sit consequatur aut. Perferendis voluptatem consequatur sit accusantium aut.',16000,10,15,'2025-06-13 17:54:49.153',NULL,NULL),
(30,'et laboriosam','Accusantium perferendis voluptatem aut sit consequatur. Aut consequatur accusantium voluptatem sit perferendis. Accusantium sit voluptatem perferendis consequatur aut. Perferendis voluptatem aut consequatur sit accusantium. Voluptatem aut consequatur perferendis sit accusantium. Aut voluptatem accusantium sit perferendis consequatur. Perferendis consequatur aut accusantium voluptatem sit. Perferendis sit consequatur accusantium voluptatem aut. Voluptatem perferendis aut accusantium sit consequatur.',17000,20,15,'2025-06-13 17:54:49.153',NULL,NULL),
(31,'ea et','Consequatur sit perferendis aut accusantium voluptatem. Accusantium sit voluptatem consequatur aut perferendis. Perferendis consequatur voluptatem sit aut accusantium.',17000,10,16,'2025-06-13 17:54:49.210',NULL,NULL),
(32,'sint nam','Perferendis voluptatem accusantium consequatur aut sit. Voluptatem accusantium consequatur sit perferendis aut. Sit consequatur voluptatem accusantium aut perferendis. Voluptatem perferendis accusantium aut consequatur sit. Voluptatem sit aut accusantium consequatur perferendis.',18000,20,16,'2025-06-13 17:54:49.211',NULL,NULL),
(33,'commodi tenetur','Voluptatem perferendis sit aut consequatur accusantium. Perferendis sit voluptatem accusantium aut consequatur. Accusantium perferendis voluptatem aut sit consequatur. Accusantium consequatur aut voluptatem sit perferendis. Perferendis consequatur accusantium voluptatem sit aut. Accusantium perferendis voluptatem consequatur sit aut. Perferendis sit accusantium aut voluptatem consequatur. Perferendis consequatur voluptatem sit aut accusantium. Aut voluptatem perferendis consequatur sit accusantium.',18000,10,17,'2025-06-13 17:54:49.267',NULL,NULL),
(34,'itaque voluptatem','Voluptatem accusantium perferendis sit consequatur aut. Accusantium voluptatem perferendis consequatur sit aut. Accusantium voluptatem aut sit perferendis consequatur. Accusantium sit voluptatem consequatur perferendis aut. Accusantium voluptatem aut perferendis consequatur sit. Sit accusantium voluptatem consequatur aut perferendis. Sit consequatur voluptatem accusantium perferendis aut. Accusantium sit aut consequatur perferendis voluptatem. Sit perferendis accusantium consequatur voluptatem aut. Sit consequatur voluptatem aut perferendis accusantium.',19000,20,17,'2025-06-13 17:54:49.267',NULL,NULL),
(35,'et temporibus','Consequatur sit perferendis accusantium voluptatem aut.',19000,10,18,'2025-06-13 17:54:49.324',NULL,NULL),
(36,'consequatur et','Accusantium aut voluptatem consequatur sit perferendis. Aut consequatur voluptatem sit accusantium perferendis. Sit consequatur aut perferendis voluptatem accusantium. Consequatur aut sit perferendis accusantium voluptatem. Voluptatem aut sit consequatur perferendis accusantium. Accusantium consequatur aut perferendis sit voluptatem.',20000,20,18,'2025-06-13 17:54:49.325',NULL,NULL),
(37,'reprehenderit distinctio','Accusantium perferendis aut voluptatem sit consequatur. Consequatur sit perferendis voluptatem aut accusantium. Consequatur sit aut accusantium perferendis voluptatem.',20000,10,19,'2025-06-13 17:54:49.383',NULL,NULL),
(38,'nihil est','Consequatur aut perferendis sit accusantium voluptatem. Consequatur voluptatem perferendis aut accusantium sit. Sit accusantium perferendis aut voluptatem consequatur. Perferendis consequatur aut voluptatem accusantium sit.',21000,20,19,'2025-06-13 17:54:49.384',NULL,NULL),
(39,'et sed','Consequatur sit accusantium aut perferendis voluptatem. Perferendis voluptatem accusantium sit aut consequatur. Accusantium voluptatem sit consequatur perferendis aut. Aut sit perferendis consequatur voluptatem accusantium.',21000,10,20,'2025-06-13 17:54:49.442',NULL,NULL),
(40,'tenetur placeat','Sit aut perferendis consequatur accusantium voluptatem. Sit consequatur aut perferendis accusantium voluptatem. Aut voluptatem consequatur perferendis accusantium sit. Perferendis sit consequatur aut accusantium voluptatem. Sit accusantium voluptatem consequatur perferendis aut. Accusantium sit voluptatem aut consequatur perferendis.',22000,20,20,'2025-06-13 17:54:49.442',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refresh_tokens`
--

DROP TABLE IF EXISTS `refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `token` varchar(191) NOT NULL,
  `revoked` tinyint(1) NOT NULL DEFAULT 0,
  `expiresAt` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `refresh_tokens_token_key` (`token`),
  KEY `refreshTokens_userId_fkey` (`userId`),
  CONSTRAINT `refresh_tokens_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_tokens`
--

LOCK TABLES `refresh_tokens` WRITE;
/*!40000 ALTER TABLE `refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` longtext DEFAULT NULL,
  `deskripsi` longtext DEFAULT NULL,
  `ownerId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `deletedAt` timestamp(6) NULL DEFAULT NULL,
  `productsId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shop_ownerId_key` (`ownerId`),
  KEY `shop_productsId_fkey` (`productsId`),
  CONSTRAINT `shop_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `shop_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES
(1,'Toko nihil','Sit voluptatem accusantium aut consequatur perferendis.',1,'2025-06-13 17:54:48.339',NULL,NULL,NULL),
(2,'Toko inventore','Consequatur sit voluptatem aut accusantium perferendis.',2,'2025-06-13 17:54:48.397',NULL,NULL,NULL),
(3,'Toko ipsum','Consequatur voluptatem perferendis accusantium sit aut.',3,'2025-06-13 17:54:48.457',NULL,NULL,NULL),
(4,'Toko minima','Voluptatem consequatur perferendis aut accusantium sit.',4,'2025-06-13 17:54:48.513',NULL,NULL,NULL),
(5,'Toko architecto','Voluptatem sit accusantium aut perferendis consequatur.',5,'2025-06-13 17:54:48.572',NULL,NULL,NULL),
(6,'Toko ea','Perferendis sit accusantium voluptatem consequatur aut.',6,'2025-06-13 17:54:48.630',NULL,NULL,NULL),
(7,'Toko eius','Aut sit perferendis accusantium consequatur voluptatem.',7,'2025-06-13 17:54:48.687',NULL,NULL,NULL),
(8,'Toko laboriosam','Voluptatem consequatur perferendis aut accusantium sit.',8,'2025-06-13 17:54:48.745',NULL,NULL,NULL),
(9,'Toko aut','Aut accusantium perferendis consequatur sit voluptatem.',9,'2025-06-13 17:54:48.803',NULL,NULL,NULL),
(10,'Toko eos','Accusantium perferendis consequatur aut voluptatem sit.',10,'2025-06-13 17:54:48.862',NULL,NULL,NULL),
(11,'Toko dolor','Aut accusantium perferendis consequatur sit voluptatem.',11,'2025-06-13 17:54:48.921',NULL,NULL,NULL),
(12,'Toko rem','Sit voluptatem accusantium consequatur aut perferendis.',12,'2025-06-13 17:54:48.978',NULL,NULL,NULL),
(13,'Toko cumque','Accusantium perferendis aut consequatur voluptatem sit.',13,'2025-06-13 17:54:49.034',NULL,NULL,NULL),
(14,'Toko voluptatem','Aut accusantium sit consequatur voluptatem perferendis.',14,'2025-06-13 17:54:49.095',NULL,NULL,NULL),
(15,'Toko qui','Accusantium perferendis sit voluptatem consequatur aut.',15,'2025-06-13 17:54:49.152',NULL,NULL,NULL),
(16,'Toko et','Aut perferendis sit accusantium voluptatem consequatur.',16,'2025-06-13 17:54:49.209',NULL,NULL,NULL),
(17,'Toko omnis','Voluptatem aut sit accusantium consequatur perferendis.',17,'2025-06-13 17:54:49.266',NULL,NULL,NULL),
(18,'Toko aut','Perferendis sit aut accusantium consequatur voluptatem.',18,'2025-06-13 17:54:49.323',NULL,NULL,NULL),
(19,'Toko eligendi','Perferendis accusantium sit consequatur voluptatem aut.',19,'2025-06-13 17:54:49.383',NULL,NULL,NULL),
(20,'Toko sed','Accusantium voluptatem consequatur sit perferendis aut.',20,'2025-06-13 17:54:49.441',NULL,NULL,NULL);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `deletedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_key` (`username`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'tsYGnIS','TJEDXqr@AmFBcRj.org','$2a$10$CMKvuCjxM9.eCfqPyBt25.TVs/yTridcarnKM3F192WKJttjunLN6','2025-06-13 17:54:48.336',NULL,NULL),
(2,'BGExEsn','ltkmvol@BhWCTME.com','$2a$10$koU3Y22S.8bnEhHYMbJK4O9TRAb7AUixRQjIv/ECfTsrS0BHRC85q','2025-06-13 17:54:48.395',NULL,NULL),
(3,'hkLMKjT','NeolWjy@KjaEUuJ.org','$2a$10$wxEeCTr8JE4iKf5whWhmKOUsfeMzsTWm9NMX/AVz0mDUVlYXrbb/6','2025-06-13 17:54:48.454',NULL,NULL),
(4,'pTLBPTe','pvQYvQt@sgoemGd.info','$2a$10$IoRedtakId/NNgh17BO3UuBUVhiLiU645YOu3DcLm.Os2lNpyvFfm','2025-06-13 17:54:48.512',NULL,NULL),
(5,'lVERcWC','XBmmqKs@hDIkAZi.biz','$2a$10$bNqOtyfMycLVBpZ4XqGX.uLovMyJ1r2h23/Jsh1RJkt8nN68sl4JC','2025-06-13 17:54:48.570',NULL,NULL),
(6,'kxYRmHS','RQPGwLD@RbmSxrB.net','$2a$10$6W8NFkKBxlq2Vwf0co0kju9ffnn1GWtimdZyleOd5/CYVWZHXRMRG','2025-06-13 17:54:48.627',NULL,NULL),
(7,'CIsuxwS','ROOTryE@iOlfQLo.net','$2a$10$DOjEQ1FZXTVcxFeHUUw9guO/HxixqxLud7xvsjSlu8szP9CBqk0kq','2025-06-13 17:54:48.685',NULL,NULL),
(8,'oiojmGM','NaoPuOe@ZjIhcml.net','$2a$10$lomdl6ndmpuVyu3alW6GlOTj9VnMpYIdl97UDdTSJJxPYyjRfge6G','2025-06-13 17:54:48.742',NULL,NULL),
(9,'KcmbWYa','htmJyDw@APBajZL.biz','$2a$10$rqwTWx9twVb3adWuLoRc2.04z2Wz6eTP3TXuBVd9B0MWiHqlaWvJO','2025-06-13 17:54:48.801',NULL,NULL),
(10,'IHOcBwf','FtWZTBI@hdeFMmu.info','$2a$10$tgVXsEcMjSMZrkJszj0Rp.ZeTbP1NenMPtL.s2GTVln/WsAfS3vl.','2025-06-13 17:54:48.860',NULL,NULL),
(11,'MtSRijW','AVxwcVl@qbeGUDi.org','$2a$10$WkTPYkUKpvfHCrH9GyWem.FcOi813tO9CQcZr0TXXuIZtHwqD.mOu','2025-06-13 17:54:48.918',NULL,NULL),
(12,'eXkcHEW','ukAITNJ@BJMXBcm.info','$2a$10$yEj9b2cjcnCni9ZkuyyCM.eaTTeA.yEf5IMiTo5L9N3sV20P4jWs.','2025-06-13 17:54:48.975',NULL,NULL),
(13,'IWCdPNu','tevlMDy@JRDYNxN.com','$2a$10$JKwhDlyllMlbxRP3iz0/b.bmyl.OdlfRDYGxAWWNzhetwVU0tsUom','2025-06-13 17:54:49.032',NULL,NULL),
(14,'vSyasZe','JJNLZKJ@YxgVlhd.org','$2a$10$iytlivtSChlMHdTYp14pq.m/31xbtsiE6WqWeAC.uEcKfJqsBik2i','2025-06-13 17:54:49.092',NULL,NULL),
(15,'FqADQfg','QUrZMUp@DMFWWoi.net','$2a$10$a5Kxd1AeQ.0WV/hzNG7o9uc9eW4S5xSE9gZAYhqK0AOsk3iJfHdM2','2025-06-13 17:54:49.150',NULL,NULL),
(16,'owZqDjC','QGVDLEJ@rHAdKbw.biz','$2a$10$2yDttPeNkoCETAIJEnIpreQ18.VS4AgAmonOmAc.ks618EOwsmjIG','2025-06-13 17:54:49.207',NULL,NULL),
(17,'xpGTsjY','OJrSGuK@akJUujs.biz','$2a$10$OesooD6.AnihK1C6OQf0seG1sUxIntmUWej3GPu0Sa0k/0jK2dZ9O','2025-06-13 17:54:49.264',NULL,NULL),
(18,'YtxLaPK','kAZAJUf@hwVlOoA.org','$2a$10$tx58643z8Yhu3jSQgPQcxuL19HvMObc8xrOupyW.a6i4Y9kBVkHHG','2025-06-13 17:54:49.321',NULL,NULL),
(19,'rVURrgt','vZMNCKn@oKjkNDl.com','$2a$10$D0BoQUKVhmoNu.flrolROOQ7Ar6ZRcRW8zPbgDZTylUHXLE6cH2KK','2025-06-13 17:54:49.381',NULL,NULL),
(20,'IcaNTFk','unJDTNp@QGpqBfF.ru','$2a$10$exufesU45Y8pN19s7b0S6OqN0WNXNxb8WKWKEymIF/.23A2WQvLcO','2025-06-13 17:54:49.439',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-14  1:09:53
