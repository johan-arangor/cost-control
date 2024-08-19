-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.26-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para controlcost
CREATE DATABASE IF NOT EXISTS `controlcost` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `controlcost`;

-- Volcando estructura para tabla controlcost.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `disable` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla controlcost.categories: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name`, `disable`) VALUES
	(2, 'categoria 1.1', 0);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Volcando estructura para tabla controlcost.categories_sub
CREATE TABLE IF NOT EXISTS `categories_sub` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `disable` tinyint(4) NOT NULL DEFAULT 0,
  `id_category` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_Category_sub_Category` (`id_category`),
  CONSTRAINT `FK_Category_sub_Category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla controlcost.categories_sub: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `categories_sub` DISABLE KEYS */;
INSERT INTO `categories_sub` (`id`, `name`, `disable`, `id_category`) VALUES
	(1, 'sub categoria 1', 0, 2),
	(2, 'sub categoria 2', 0, 2);
/*!40000 ALTER TABLE `categories_sub` ENABLE KEYS */;

-- Volcando estructura para tabla controlcost.entitys
CREATE TABLE IF NOT EXISTS `entitys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `disable` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla controlcost.entitys: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `entitys` DISABLE KEYS */;
INSERT INTO `entitys` (`id`, `name`, `disable`) VALUES
	(1, 'ttttttt', 0),
	(2, 'erterter', 1),
	(3, 'hola', 0);
/*!40000 ALTER TABLE `entitys` ENABLE KEYS */;

-- Volcando estructura para tabla controlcost.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(50) NOT NULL,
  `user` varchar(100) NOT NULL DEFAULT '',
  `userName` varchar(150) DEFAULT '',
  `password` longtext NOT NULL,
  `dateCreate` date NOT NULL,
  `lastDate` date NOT NULL,
  `disable` tinyint(4) NOT NULL DEFAULT 0,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla controlcost.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `user`, `userName`, `password`, `dateCreate`, `lastDate`, `disable`) VALUES
	('387abef3-c39e-49b9-95d8-2b9753170ce8', 'johan.arangor@hotmail.com', '', 'f321809ee7669e2c092ed872fd26fd1aa4745d917a5f7dff402905d5fde2e6c7a58fdb2340ab06eed0892120b6cbd8053c1f6d11c1a13333b030fdf4fdf705c4c173b52ff7ebe106b9a694a1639f310cc4fd393174f83422f3fcbd8ee7a4843ea60eb6629afe17236d', '2023-12-10', '2023-12-10', 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
