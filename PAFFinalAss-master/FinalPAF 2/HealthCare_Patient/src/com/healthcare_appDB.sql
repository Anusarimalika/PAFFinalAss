-- MySQL dump 10.13  Distrib 8.0.14, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: healthcare_app
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `patient` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `pFname` varchar(10) DEFAULT NULL,
  `pLname` varchar(10) DEFAULT NULL,
  `pNIC` varchar(12) DEFAULT NULL,
  `pAddress` varchar(30) DEFAULT NULL,
  `pGender` varchar(10) DEFAULT NULL,
  `pEmail` varchar(20) DEFAULT NULL,
  `pAge` varchar(10) DEFAULT NULL,
  `pPhone` varchar(15) DEFAULT NULL,
  `pAdmitted` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`pId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (6,'Anusari','Malika','976902270V','Nugegoda','Female','anu@9778','23','0716902270','12/30'),(7,'Hansaka','Pathum','978951467V','Meegoda','Male','hansu@18gmail.com','24','0711637731','11/24'),(8,'Tharu','Kulathunga','986514238V','Kandy','Female','tharu@gmail.com','22','0715675690','2/4'),(9,'Lasan','Anujaya','987624510V','Mahargama','Male','las@gmail.com','25','0778625617','1/15'),(10,'Sachintha','Dewpriys','968615147V','Malabe','Male','sac@gmail.com','28','0786546271','5/7'),(11,'Rahal ','Sandeepa','90765142V','Kottawa','Male','ral@gmail.com','19','0713425620','9/8');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-06 21:34:05
