-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-06-2019 a las 02:31:19
-- Versión del servidor: 5.7.26-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `p9_uoc`
--

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

--
-- Volcado de datos para la tabla `Categories`
--

INSERT INTO `Categories` (`id_category`, `name`, `excerpt`, `meta_title`, `meta_description`, `date_add`) VALUES
(1, 'Bedroom Furniture', 'The best Bedroom Furniture', NULL, NULL, '2019-05-30 00:00:00'),
(3, 'Coffe Tables', 'The best Coffe Tables', NULL, NULL, '2019-05-30 00:00:00'),
(4, 'Sofas', 'The best Sofas', NULL, NULL, '2019-05-30 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categories_has_Products`
--

CREATE TABLE `Categories_has_Products` (
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Categories_has_Products`
--

INSERT INTO `Categories_has_Products` (`category_id`, `product_id`) VALUES
(1, 2),
(4, 3),
(1, 4),
(1, 5),
(1, 6),
(3, 7),
(3, 8),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(4, 17),
(4, 18),
(4, 19),
(4, 20),
(4, 21),
(4, 22);

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

--
-- Volcado de datos para la tabla `Products`
--

INSERT INTO `Products` (`id_product`, `reference`, `title`, `description`, `price`, `img_url`, `excerpt`, `available`, `meta_title`, `meta_description`, `date_add`) VALUES
(2, 197876, 'Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 189.49, 'static/img/products/bedroomFurniture/2_4.jpg', NULL, 1, NULL, NULL, '2019-05-20'),
(3, 476543, 'Bauhaus Steel Tube Cantilever Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 380.99, 'static/img/products/sofas/5_5.jpg', NULL, 1, NULL, NULL, '2019-06-23'),
(4, 789456, 'Noctis LONDON Double bed up with container', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 1250, '/static/img/products/bedroomFurniture/BOB_160_9.jpg', NULL, 1, NULL, NULL, '2019-06-26'),
(5, 159357, 'Noctis DUCK H25 RING Padded double bed', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 881.25, '/static/img/products/bedroomFurniture/4q0zrdf2xfzd.jpg', NULL, 1, NULL, NULL, '2019-06-18'),
(6, 486413, 'Letto matrimoniale NOCTIS london noctis top white green day', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 952.49, '/static/img/products/bedroomFurniture/123.jpg', NULL, 1, NULL, NULL, '2019-06-12'),
(7, 486426, 'Forzza daniel side table matt finish wenge', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 199.99, 'static/img/products/coffeTables/9_4.jpg', NULL, 1, NULL, NULL, '2019-06-09'),
(8, 987654, 'Yaheetech Lift up Top Coffee Table with Under Storage', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 355.59, 'static/img/products/coffeTables/13_13029819_13029819-1-180602151916.jpeg', NULL, 1, NULL, NULL, '2019-06-05'),
(10, 159358, 'Forzza Daniel Small TV Unit (Matt Finish, Teak)', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 389.49, 'static/img/products/coffeTables/41gyNASmibL-400x400.jpg', NULL, 1, NULL, NULL, '2019-06-10'),
(11, 123456, 'Zara Coffee Table with Tray Top', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 569.99, 'static/img/products/coffeTables/61yOhzsUHXL._SL1200_.jpg', NULL, 1, NULL, NULL, '2019-06-16'),
(12, 123654, 'Jamiya Coffee Table', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 199.5, 'static/img/products/coffeTables/81K97w-YRfL._SX425_.jpg', NULL, 1, NULL, NULL, '2019-06-16'),
(13, 759513, 'Rittenhouse Tufted Cocktail Ottoman', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 150.49, 'static/img/products/coffeTables/cf_5.jpg', NULL, 1, NULL, NULL, '2019-06-09'),
(14, 132987, 'Nowak Coffee Table', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 378.99, 'static/img/products/coffeTables/cf_6.jpg', NULL, 1, NULL, NULL, '2019-06-05'),
(15, 555486, 'Juliette Glass Top Coffee Table', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 678.45, 'static/img/products/coffeTables/cf_7.jpg', NULL, 1, NULL, NULL, '2019-06-05'),
(16, 741852, 'Quartz Coffee Table', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 187.99, 'static/img/products/coffeTables/cf_8.jpg', NULL, 1, NULL, NULL, '2019-06-03'),
(17, 654987, 'Oxford Pop-Up Platform Sleeper Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 825.99, 'static/img/products/sofas/0175610_PE328883_S5.webp', NULL, 1, NULL, NULL, '2019-06-13'),
(18, 963852, 'Murphy Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 1450.99, 'static/img/products/sofas/618gTeX+DCL._SY355_.jpg', NULL, 1, NULL, NULL, '2019-06-16'),
(19, 426888, 'York Custom Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 999.99, 'static/img/products/sofas/sofa-cama-2-plazas-en-tela_772677.jpg', NULL, 1, NULL, NULL, '2019-06-08'),
(20, 999123, 'Macalester Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 950.99, 'static/img/products/sofas/sofa-cama-2-plazas-mod-sahara.jpg', NULL, 1, NULL, NULL, '2019-06-03'),
(21, 784512, 'Braden Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', 1110.5, 'static/img/products/sofas/0728518_PE736345_S5.webp', NULL, 1, NULL, NULL, '2019-06-08'),
(22, 986532, 'Easton Sofa', 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.\r\n\r\n', 550.55, 'static/img/products/sofas/Bemz.webp', NULL, 1, NULL, NULL, '2019-06-05');

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

--
-- Volcado de datos para la tabla `reviews`
--

INSERT INTO `reviews` (`title`, `descripction`, `images_url`, `rating`, `user_id`, `product_id`, `date_add`) VALUES
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 3, 2, '2019-05-20'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 3, 3, 5, '2019-06-19'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 3, 8, '2019-06-21'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 3, 3, 12, '2019-06-21'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 2, 3, 15, '2019-06-08'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 3, 18, '2019-06-06'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 3, 21, '2019-06-04'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 3, 4, 2, '2019-05-20'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 3, 4, 3, '2019-06-11'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 4, 6, '2019-06-26'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 4, 10, '2019-06-15'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 4, 13, '2019-06-12'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 4, 16, '2019-06-02'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 4, 19, '2019-06-03'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 4, 22, '2019-06-06'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 2, 5, 2, '2019-05-20'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 5, 4, '2019-06-26'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 5, 7, '2019-06-18'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 5, 11, '2019-06-12'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 5, 14, '2019-06-02'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 3, 5, 17, '2019-06-14'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 4, 5, 20, '2019-06-08'),
(NULL, 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.', NULL, 5, 5, 22, '2019-06-02');

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

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`id_roles`, `name`, `edit_product`, `create_product`, `delete_product`, `edit_review`, `create_review`, `delete_review`, `dashboard_access`, `edit_category`, `create_category`, `delete_category`, `edit_user`, `create_user`, `delete_user`, `edit_role`, `create_role`, `delete_role`) VALUES
(1, 'Administrador', 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(2, 'Registrado', 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(3, 'Avanzado', 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(4, 'Profesional', 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id_user`, `first_name`, `last_name`, `gender`, `email`, `password`, `rol`, `date_add`) VALUES
(1, 'Javier', 'Delgado', NULL, 'mohatar@yahoo.com', 'zanfona', 1, '2019-05-20'),
(2, 'Sergio', 'Garcia', 'male', 'sergio@gmail.com', 'zanfona', 1, '2019-06-01'),
(3, 'Laura', 'Fernandez', 'female', 'laura@gmail.com', 'zanfona', 2, '2019-06-02'),
(4, 'Natalia', 'Urrutia', 'female', 'natalia@gmail.com', 'zanfona', 3, '2019-03-02'),
(5, 'Maria', 'Escribano', 'female', 'maria@gmail.com', 'zanfona', 4, '2018-06-02');

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
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `Products`
--
ALTER TABLE `Products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id_roles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
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
