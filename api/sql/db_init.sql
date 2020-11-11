-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: faqosdb
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `faqosdb`
--

CREATE DATABASE IF NOT EXISTS `faqosdb` ;

USE `faqosdb`;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  `created_at` date DEFAULT NULL,
  `disabled_by` int DEFAULT NULL,
  `disabled_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categories_user1_idx` (`created_by`),
  KEY `fk_categories_user2_idx` (`disabled_by`),
  CONSTRAINT `fk_categories_user1` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_categories_user2` FOREIGN KEY (`disabled_by`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `disabled_by` int DEFAULT NULL,
  `disabled_at` datetime DEFAULT NULL,
  `publicated_by` int DEFAULT NULL,
  `publicated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_question_user1_idx` (`created_by`),
  KEY `fk_question_user1_idx1` (`disabled_by`),
  CONSTRAINT `fk_question_user` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_question_user1` FOREIGN KEY (`disabled_by`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'CA micro-entreprise','Quel est le chiffre d\'affaire autorisé pour la micro-entreprise?',2,NULL,NULL,NULL,NULL,NULL),(2,'Apport SAS','Quel est l\'apport minimal pour une SAS?',2,NULL,2,'2020-10-22 15:46:48',NULL,NULL),(3,'Délai pour payer une facture ?','Au bout de combien temps puis-je relancer un client qui ne me paye pa?',1,NULL,3,'2020-10-21 16:49:34',NULL,NULL),(11,'Titre question','Ceci est une question',2,NULL,NULL,NULL,2,'2020-10-22 15:38:16'),(12,'Question sans reponse','Ceci est une question sans réponse',2,NULL,NULL,NULL,NULL,NULL),(13,'Question sans reponse','Ceci est une question sans réponse',2,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_has_categories`
--

DROP TABLE IF EXISTS `question_has_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_has_categories` (
  `question_id` int NOT NULL,
  `categories_id` int NOT NULL,
  PRIMARY KEY (`question_id`,`categories_id`),
  KEY `fk_question_has_categories_categories1_idx` (`categories_id`),
  KEY `fk_question_has_categories_question1_idx` (`question_id`),
  CONSTRAINT `fk_question_has_categories_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_question_has_categories_question1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_has_categories`
--

LOCK TABLES `question_has_categories` WRITE;
/*!40000 ALTER TABLE `question_has_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_has_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_has_tags`
--

DROP TABLE IF EXISTS `question_has_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_has_tags` (
  `question_id` int NOT NULL,
  `tags_id` int NOT NULL,
  PRIMARY KEY (`question_id`,`tags_id`),
  KEY `fk_question_has_tags_tags1_idx` (`tags_id`),
  KEY `fk_question_has_tags_question1_idx` (`question_id`),
  CONSTRAINT `fk_question_has_tags_question1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `fk_question_has_tags_tags1` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_has_tags`
--

LOCK TABLES `question_has_tags` WRITE;
/*!40000 ALTER TABLE `question_has_tags` DISABLE KEYS */;
INSERT INTO `question_has_tags` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `question_has_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reponse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `disabled_by` int DEFAULT NULL,
  `disabled_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_reponse_question_idx` (`question_id`),
  KEY `fk_reponse_user1_idx` (`created_by`),
  KEY `fk_reponse_user2_idx` (`disabled_by`),
  CONSTRAINT `fk_reponse_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `fk_reponse_user1` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_reponse_user2` FOREIGN KEY (`disabled_by`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;






UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Rédacteur'),(2,'Modérateur'),(3,'Admin'),(4,'Super Admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  `created_at` date DEFAULT NULL,
  `disabled_by` int DEFAULT NULL,
  `disabled_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tags_user1_idx` (`created_by`),
  KEY `fk_tags_user2_idx` (`disabled_by`),
  CONSTRAINT `fk_tags_user1` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_tags_user2` FOREIGN KEY (`disabled_by`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Juridique',1,NULL,1,NULL),(2,'Commerce',2,NULL,2,NULL),(3,'Facturation',3,NULL,3,NULL),(4,'Micro-entreprise',3,NULL,3,NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `ip_address` varchar(30) DEFAULT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_role1_idx` (`role_id`),
  CONSTRAINT `fk_user_role1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'José le vria','josedu69@tiremoilebouc.com','chir1aur','145.54.25.162',3),(2,'BERNARD Ismael','ismael.bernard@gmail.com','superBernard','175.45.623.89',1),(3,'CHIREN Aurélien','aurelien.chiren@gmail.com','Chirwild','51.210.47.135',2),(12,'gege','gege@gmail.com','faqmdp','127.0.0.1',2),(13,'gege','gege@gmail.com','faqmdp','127.0.0.1',2),(14,'gege','gege@gmail.com','faqmdp','127.0.0.1',2),(15,'José le vria','josedu69@tiremoilebouc.com','faqmdp','127.0.0.1',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote`
--

DROP TABLE IF EXISTS `vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vote` (
  `vote_id` int NOT NULL AUTO_INCREMENT,
  `vote_value` int NOT NULL,
  `reponse_id` int NOT NULL,
  `ip_adress` varchar(80) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`vote_id`),
  KEY `fk_vote_reponse1_idx` (`reponse_id`),
  KEY `fk_vote_user1_idx` (`user_id`),
  CONSTRAINT `fk_vote_reponse1` FOREIGN KEY (`reponse_id`) REFERENCES `reponse` (`id`),
  CONSTRAINT `fk_vote_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;


INSERT INTO `reponse` VALUES (1,1,'CA maximal : 69800e pour les prestations de services',3,NULL,NULL,NULL),(2,2,'L\'apport pour une SAS est maintenant de 1€',2,NULL,2,'2020-10-22 15:46:48'),(3,3,'Le délai pour le paiement est ramené à 45 jours après émission de la facture',1,NULL,NULL,NULL),(13,11,'ceci est la réponse à une question',3,NULL,NULL,NULL),(14,11,'ceci est la réponse à une question',3,NULL,3,'2020-10-21 16:37:06'),(15,1,'Ceci est une seconde réponse',3,NULL,NULL,'2020-10-20 04:16:13'),(16,11,'ceci est une autre  réponse à une question',2,NULL,NULL,NULL),(17,11,'ceci est une autre  réponse à une question',2,NULL,NULL,NULL),(18,11,'ceci est une autre  réponse à une question',2,NULL,NULL,NULL),(19,11,'ceci est une autre  réponse à une question',2,NULL,NULL,NULL);
