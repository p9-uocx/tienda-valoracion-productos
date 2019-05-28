-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 28-05-2019 a las 23:15:03
-- Versión del servidor: 5.6.35
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `p9_uoc`
--
CREATE DATABASE IF NOT EXISTS `p9_uoc` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `p9_uoc`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categories`
--

CREATE TABLE `Categories` (
  `id_category` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `meta_title` varchar(100) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `date_add` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categories_has_Products`
--

CREATE TABLE `Categories_has_Products` (
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Products`
--

CREATE TABLE `Products` (
  `id_product` int(11) NOT NULL,
  `reference` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` longtext,
  `price` float NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `available` tinyint(4) NOT NULL,
  `meta_title` varchar(100) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `date_add` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `title` varchar(60) DEFAULT NULL,
  `descripction` longtext,
  `images_url` varchar(100) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `date_add` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Roles`
--

CREATE TABLE `Roles` (
  `id_roles` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `edit_product` tinyint(4) NOT NULL,
  `create_product` tinyint(4) NOT NULL,
  `delete_product` tinyint(4) NOT NULL,
  `edit_review` tinyint(4) NOT NULL,
  `create_review` tinyint(4) NOT NULL,
  `delete_review` tinyint(4) NOT NULL,
  `dashboard_access` tinyint(4) NOT NULL,
  `edit_category` tinyint(4) NOT NULL,
  `create_category` tinyint(4) NOT NULL,
  `delete_category` tinyint(4) NOT NULL,
  `edit_user` tinyint(4) NOT NULL,
  `create_user` tinyint(4) NOT NULL,
  `delete_user` tinyint(4) NOT NULL,
  `edit_role` tinyint(4) NOT NULL,
  `create_role` tinyint(4) NOT NULL,
  `delete_role` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` enum('female','male') DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` int(11) NOT NULL,
  `date_add` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id_category`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Indices de la tabla `Categories_has_Products`
--
ALTER TABLE `Categories_has_Products`
  ADD PRIMARY KEY (`category_id`,`product_id`),
  ADD KEY `fk_Categories_has_Products_Products1_idx` (`product_id`),
  ADD KEY `fk_Categories_has_Products_Categories1_idx` (`category_id`);

--
-- Indices de la tabla `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id_product`),
  ADD UNIQUE KEY `idProduct_UNIQUE` (`id_product`),
  ADD UNIQUE KEY `reference_UNIQUE` (`reference`);

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `fk_reviews_Users1_idx` (`user_id`),
  ADD KEY `fk_reviews_Products1_idx` (`product_id`);

--
-- Indices de la tabla `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id_roles`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id_user`,`rol`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `fk_Users_Roles1_idx` (`rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `Products`
--
ALTER TABLE `Products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id_roles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Categories_has_Products`
--
ALTER TABLE `Categories_has_Products`
  ADD CONSTRAINT `fk_Categories_has_Products_Categories1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Categories_has_Products_Products1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `fk_reviews_Products1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reviews_Users1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `fk_Users_Roles1` FOREIGN KEY (`rol`) REFERENCES `Roles` (`id_roles`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
