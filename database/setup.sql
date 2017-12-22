CREATE DATABASE IF NOT EXISTS `brooks`;
USE `brooks`;

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) DEFAULT '',
  `content` longtext,
  `featuredImageSrc` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP USER IF EXISTS `brooksadmin`@`localhost`;
CREATE USER "brooksadmin"@`localhost` IDENTIFIED BY "brooksadminpassword";
GRANT SELECT ON brooks.articles TO `brooksadmin`@`localhost`;
