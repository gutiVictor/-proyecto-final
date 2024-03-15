-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-03-2024 a las 03:43:23
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacoras`
--

CREATE TABLE `bitacoras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bitacora` varchar(191) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bitacoras`
--

INSERT INTO `bitacoras` (`id`, `bitacora`, `fecha`, `hora`, `created_at`, `updated_at`) VALUES
(1, 'registro creado por usuario: 1', '2024-03-12', '20:19:11', '2024-03-13 01:19:11', '2024-03-13 01:19:11'),
(2, 'Se creo el usuario con el id: 3', '2024-03-12', '20:20:15', '2024-03-13 01:20:15', '2024-03-13 01:20:15'),
(3, 'Se creo el usuario con el id: 4', '2024-03-12', '20:21:07', '2024-03-13 01:21:07', '2024-03-13 01:21:07'),
(4, 'Se creo el usuario con el id: 5', '2024-03-12', '20:26:12', '2024-03-13 01:26:12', '2024-03-13 01:26:12'),
(5, 'Se creo el usuario con el id: 6', '2024-03-12', '20:47:08', '2024-03-13 01:47:08', '2024-03-13 01:47:08'),
(6, 'Se creo el usuario con el id: 7', '2024-03-12', '20:59:46', '2024-03-13 01:59:46', '2024-03-13 01:59:46'),
(7, 'Pagina creada : 1', '2024-03-12', '21:28:58', '2024-03-13 02:28:58', '2024-03-13 02:28:58'),
(8, 'Pagina creada : 2', '2024-03-12', '21:39:15', '2024-03-13 02:39:15', '2024-03-13 02:39:15'),
(9, 'Se creo el usuario con el id: 4', '2024-03-12', '22:05:05', '2024-03-13 03:05:05', '2024-03-13 03:05:05'),
(10, 'Se creo el usuario con el id: 5', '2024-03-12', '22:06:29', '2024-03-13 03:06:29', '2024-03-13 03:06:29'),
(11, 'Se creo Rol con el id: 6', '2024-03-12', '22:08:05', '2024-03-13 03:08:05', '2024-03-13 03:08:05'),
(12, 'Pagina creada : 3', '2024-03-13', '13:21:30', '2024-03-13 18:21:30', '2024-03-13 18:21:30'),
(13, 'Pagina creada : 4', '2024-03-13', '20:46:28', '2024-03-14 01:46:28', '2024-03-14 01:46:28'),
(14, 'Pagina creada : 5', '2024-03-13', '21:06:48', '2024-03-14 02:06:48', '2024-03-14 02:06:48'),
(15, 'Pagina creada : 6', '2024-03-13', '22:02:31', '2024-03-14 03:02:31', '2024-03-14 03:02:31'),
(16, 'Pagina creada : 7', '2024-03-13', '22:14:23', '2024-03-14 03:14:23', '2024-03-14 03:14:23'),
(17, 'Pagina creada : 8', '2024-03-13', '22:16:30', '2024-03-14 03:16:30', '2024-03-14 03:16:30'),
(18, 'Se creo Rol con el id: 7', '2024-03-13', '22:37:04', '2024-03-14 03:37:04', '2024-03-14 03:37:04'),
(19, 'Se creo el usuario con el id: 8', '2024-03-14', '14:45:26', '2024-03-14 19:45:26', '2024-03-14 19:45:26'),
(20, 'registro creado por usuario: 2', '2024-03-14', '15:15:41', '2024-03-14 20:15:41', '2024-03-14 20:15:41'),
(21, 'registro creado por usuario: 3', '2024-03-14', '15:25:56', '2024-03-14 20:25:56', '2024-03-14 20:25:56'),
(22, 'Se creo el usuario con el id: 9', '2024-03-14', '16:57:59', '2024-03-14 21:57:59', '2024-03-14 21:57:59'),
(23, 'Se creo Rol con el id: 8', '2024-03-14', '16:59:13', '2024-03-14 21:59:13', '2024-03-14 21:59:13'),
(24, 'registro creado por usuario: 4', '2024-03-14', '19:41:25', '2024-03-15 00:41:25', '2024-03-15 00:41:25'),
(25, 'registro creado por usuario: 5', '2024-03-14', '20:28:58', '2024-03-15 01:28:58', '2024-03-15 01:28:58'),
(26, 'registro creado por usuario: 6', '2024-03-14', '20:33:35', '2024-03-15 01:33:35', '2024-03-15 01:33:35'),
(27, 'registro creado por usuario: 7', '2024-03-14', '20:35:56', '2024-03-15 01:35:56', '2024-03-15 01:35:56'),
(28, 'registro creado por usuario: 8', '2024-03-14', '21:00:09', '2024-03-15 02:00:09', '2024-03-15 02:00:09'),
(29, 'registro creado por usuario: 9', '2024-03-14', '21:03:12', '2024-03-15 02:03:12', '2024-03-15 02:03:12'),
(30, 'registro creado por usuario: 10', '2024-03-14', '21:04:31', '2024-03-15 02:04:31', '2024-03-15 02:04:31'),
(31, 'registro creado por usuario: 11', '2024-03-14', '21:05:09', '2024-03-15 02:05:09', '2024-03-15 02:05:09'),
(32, 'registro creado por usuario: 12', '2024-03-14', '21:08:38', '2024-03-15 02:08:38', '2024-03-15 02:08:38'),
(33, 'Pagina creada : 9', '2024-03-14', '23:23:01', '2024-03-15 04:23:01', '2024-03-15 04:23:01'),
(34, 'Se creo Rol con el id: 9', '2024-03-14', '23:30:10', '2024-03-15 04:30:10', '2024-03-15 04:30:10'),
(35, 'Se creo Rol con el id: 10', '2024-03-14', '23:30:11', '2024-03-15 04:30:11', '2024-03-15 04:30:11'),
(36, 'Se creo Rol con el id: 11', '2024-03-14', '23:30:11', '2024-03-15 04:30:11', '2024-03-15 04:30:11'),
(37, 'Se creo Rol con el id: 12', '2024-03-14', '23:30:12', '2024-03-15 04:30:12', '2024-03-15 04:30:12'),
(38, 'Se creo Rol con el id: 13', '2024-03-14', '23:30:12', '2024-03-15 04:30:12', '2024-03-15 04:30:12'),
(39, 'Se creo Rol con el id: 14', '2024-03-14', '23:30:12', '2024-03-15 04:30:12', '2024-03-15 04:30:12'),
(40, 'Se creo Rol con el id: 15', '2024-03-14', '23:30:13', '2024-03-15 04:30:13', '2024-03-15 04:30:13'),
(41, 'Se creo Rol con el id: 16', '2024-03-14', '23:30:13', '2024-03-15 04:30:13', '2024-03-15 04:30:13'),
(42, 'Se creo Rol con el id: 17', '2024-03-14', '23:30:13', '2024-03-15 04:30:13', '2024-03-15 04:30:13'),
(43, 'Se creo Rol con el id: 18', '2024-03-14', '23:30:13', '2024-03-15 04:30:13', '2024-03-15 04:30:13'),
(44, 'Se creo Rol con el id: 19', '2024-03-14', '23:38:29', '2024-03-15 04:38:29', '2024-03-15 04:38:29'),
(45, 'Se creo Rol con el id: 20', '2024-03-14', '23:38:30', '2024-03-15 04:38:30', '2024-03-15 04:38:30'),
(46, 'Se creo Rol con el id: 21', '2024-03-14', '23:38:30', '2024-03-15 04:38:30', '2024-03-15 04:38:30'),
(47, 'Se creo Rol con el id: 22', '2024-03-14', '23:38:30', '2024-03-15 04:38:30', '2024-03-15 04:38:30'),
(48, 'Se creo Rol con el id: 23', '2024-03-14', '23:38:31', '2024-03-15 04:38:31', '2024-03-15 04:38:31'),
(49, 'Se creo Rol con el id: 24', '2024-03-14', '23:38:31', '2024-03-15 04:38:31', '2024-03-15 04:38:31'),
(50, 'Se creo Rol con el id: 25', '2024-03-14', '23:38:31', '2024-03-15 04:38:31', '2024-03-15 04:38:31'),
(51, 'Se creo Rol con el id: 26', '2024-03-14', '23:38:31', '2024-03-15 04:38:31', '2024-03-15 04:38:31'),
(52, 'Se creo Rol con el id: 27', '2024-03-14', '23:38:32', '2024-03-15 04:38:32', '2024-03-15 04:38:32'),
(53, 'Se creo Rol con el id: 28', '2024-03-14', '23:38:32', '2024-03-15 04:38:32', '2024-03-15 04:38:32'),
(54, 'Se creo Rol con el id: 29', '2024-03-14', '23:38:32', '2024-03-15 04:38:32', '2024-03-15 04:38:32'),
(55, 'Se creo Rol con el id: 30', '2024-03-14', '23:38:32', '2024-03-15 04:38:32', '2024-03-15 04:38:32'),
(56, 'Se creo Rol con el id: 31', '2024-03-14', '23:38:50', '2024-03-15 04:38:50', '2024-03-15 04:38:50'),
(57, 'Se creo Rol con el id: 32', '2024-03-14', '23:40:09', '2024-03-15 04:40:09', '2024-03-15 04:40:09'),
(58, 'Se creo Rol con el id: 33', '2024-03-14', '23:41:44', '2024-03-15 04:41:44', '2024-03-15 04:41:44'),
(59, 'Se creo Rol con el id: 34', '2024-03-14', '23:41:45', '2024-03-15 04:41:45', '2024-03-15 04:41:45'),
(60, 'registro creado por usuario: 13', '2024-03-14', '23:57:33', '2024-03-15 04:57:33', '2024-03-15 04:57:33'),
(61, 'registro creado por usuario: 14', '2024-03-14', '23:59:38', '2024-03-15 04:59:38', '2024-03-15 04:59:38'),
(62, 'registro creado por usuario: 15', '2024-03-15', '00:33:35', '2024-03-15 05:33:35', '2024-03-15 05:33:35'),
(63, 'Se creo Rol con el id: 35', '2024-03-15', '02:22:55', '2024-03-15 07:22:55', '2024-03-15 07:22:55'),
(64, 'Se creo Rol con el id: 36', '2024-03-15', '02:34:30', '2024-03-15 07:34:30', '2024-03-15 07:34:30'),
(65, 'Se creo Rol con el id: 37', '2024-03-15', '02:36:10', '2024-03-15 07:36:10', '2024-03-15 07:36:10'),
(66, 'Se creo el usuario con el id: 10', '2024-03-15', '02:37:52', '2024-03-15 07:37:52', '2024-03-15 07:37:52'),
(67, 'Pagina creada : 10', '2024-03-15', '02:40:10', '2024-03-15 07:40:10', '2024-03-15 07:40:10'),
(68, 'Pagina creada : 11', '2024-03-15', '02:42:03', '2024-03-15 07:42:03', '2024-03-15 07:42:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_11_204719_create_roles_table', 1),
(6, '2024_03_11_204842_create_paginas_table', 1),
(7, '2024_03_11_204910_create_usuarios_table', 1),
(8, '2024_03_11_204929_create_bitacoras_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginas`
--

CREATE TABLE `paginas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(191) NOT NULL,
  `Nombre_de_la_pagina` varchar(191) NOT NULL,
  `Descripcion` varchar(191) NOT NULL,
  `Fecha_creacion` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `paginas`
--

INSERT INTO `paginas` (`id`, `url`, `Nombre_de_la_pagina`, `Descripcion`, `Fecha_creacion`, `created_at`, `updated_at`) VALUES
(1, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=login&table=paginas', 'casa', 'mucho', '2024-03-12', '2024-03-13 02:28:58', '2024-03-13 02:28:58'),
(2, 'https://www.youtube.com/', 'Trabajo', 'mpara escuchar musica', '2024-03-10', '2024-03-13 02:39:15', '2024-03-13 02:39:15'),
(3, 'https://ww3l.cuevana.biz/', 'Cuevana', 'Peliculas', '2024-03-10', '2024-03-13 18:21:30', '2024-03-13 18:21:30'),
(4, 'https://bootcamp.laravel.com/blade/installation', 'Laravel', 'Programacion', '2024-03-13', '2024-03-14 01:46:28', '2024-03-14 01:46:28'),
(5, 'https://remotolist.com/empresas/', 'Empresas remoras', 'Empresas de trabajo', '2024-03-13', '2024-03-14 02:06:48', '2024-03-14 02:06:48'),
(6, 'https://remotolist.com/empresas/2', 'Empresas Trbajo remoto', 'Empresas de trabajo', '2024-03-12', '2024-03-14 03:02:31', '2024-03-14 03:02:31'),
(7, 'https://www.pinterest.com.mx/pin/149041068910011011/', 'Dibujar', 'Novatos', '2024-03-13', '2024-03-14 03:14:23', '2024-03-14 03:14:23'),
(8, 'https://app.diagrams.net/', 'Draw', 'Graficar', '2024-03-12', '2024-03-14 03:16:30', '2024-03-14 03:16:30'),
(9, 'https://app.diagrams.net/', 'Diagrama', 'para diagramas bases de datos', '2024-03-13', '2024-03-15 04:23:01', '2024-03-15 04:23:01'),
(10, 'https://www.erest.com.mx/pin/149041068910011011/', 'Eres', 'señales', '2024-03-14', '2024-03-15 07:40:10', '2024-03-15 07:40:10'),
(11, 'https://www.yoursavegames.com/', 'yoursavegames', 'Juegos de pc', '2024-03-03', '2024-03-15 07:42:03', '2024-03-15 07:42:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Rol` varchar(191) NOT NULL,
  `Estado` varchar(191) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `fecha_Modificacion` date NOT NULL,
  `Cambiar_Estado` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `Rol`, `Estado`, `fecha_creacion`, `fecha_Modificacion`, `Cambiar_Estado`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Activo', '2024-03-12', '2024-03-12', 'Inactivo', '2024-03-12 20:19:34', '2024-03-12 20:19:34'),
(2, 'Usuario', 'Activo', '2024-03-11', '2024-03-11', 'Inactivo', '2024-03-12 20:24:57', '2024-03-12 20:24:57'),
(3, 'Alumno', 'Activo', '2024-03-12', '2024-03-12', 'Activo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Alumnos', 'Activo', '2024-03-11', '2024-03-12', 'Inactivo', '2024-03-13 03:05:05', '2024-03-13 03:05:05'),
(5, 'Empleados', 'Activo', '2024-03-11', '2024-03-12', 'Inactivo', '2024-03-13 03:06:29', '2024-03-13 03:06:29'),
(6, 'Pasantes', 'Activo', '2024-03-11', '2024-03-12', 'Inactivo', '2024-03-13 03:08:05', '2024-03-13 03:08:05'),
(7, 'Ingeniero', 'Activo', '2024-03-13', '2024-03-13', 'Activo', '2024-03-14 03:37:04', '2024-03-14 03:37:04'),
(8, 'Vendedor', 'Activo', '2024-03-13', '2024-03-14', 'Activo', '2024-03-14 21:59:13', '2024-03-14 21:59:13'),
(16, 'Conductor', 'inactivo', '2024-03-11', '2024-03-14', 'inactivo', '2024-03-15 04:30:13', '2024-03-15 04:30:13'),
(32, 'Doctor', 'Activo', '2024-03-12', '2024-03-14', 'Activo', '2024-03-15 04:40:09', '2024-03-15 04:40:09'),
(33, 'Ingeniero', 'inactivo', '2024-03-07', '2024-03-07', 'inactivo', '2024-03-15 04:41:44', '2024-03-15 04:41:44'),
(34, 'Ingeniero', 'inactivo', '2024-03-07', '2024-03-07', 'inactivo', '2024-03-15 04:41:45', '2024-03-15 04:41:45'),
(35, 'Tendero', 'inactivo', '2024-03-14', '2024-03-14', 'inactivo', '2024-03-15 07:22:55', '2024-03-15 07:22:55'),
(36, 'Doctor', 'Activo', '2024-02-25', '2024-03-03', 'Activo', '2024-03-15 07:34:30', '2024-03-15 07:34:30'),
(37, 'Enfermera', 'Activo', '2024-02-29', '2024-03-13', 'Activo', '2024-03-15 07:36:10', '2024-03-15 07:36:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Akirajjf', 'Akafff@gmail.com', NULL, '$2y$12$p4XPCKAIbS5TRlGGAY.DWOXgvV/Ve12lEf0Wi7at.f0jFoo5qJ9nG', NULL, '2024-03-13 01:19:11', '2024-03-13 01:19:11'),
(2, 'Victor', 'Victor@gmail.com', NULL, '$2y$12$bNFRcz.EH5OOOoNNIQH17uLoP8BideFbq.Q6sfZxc23n6In6zh3nW', NULL, '2024-03-14 20:15:41', '2024-03-14 20:15:41'),
(3, 'Victor Gutierrez', 'gutierrezsanabria@gmail.com', NULL, '$2y$12$okWu.ZmmvbZNfOfdyLvaz.9jiL.GLW9nIQtGU8LTysOj6h3TQGFjq', NULL, '2024-03-14 20:25:56', '2024-03-14 20:25:56'),
(4, 'Allisson', 'allisson21@gmail.com', NULL, '$2y$12$KB9sYBHyYsuPrIn5.Q2BE.YQ/8Fn7wuktwdcK3CUHA/mfs6nCZDLG', NULL, '2024-03-15 00:41:25', '2024-03-15 00:41:25'),
(5, 'Victor Gutierrez', 'sanabria@gmail.com', NULL, '$2y$12$7EynqB2LCup9iOW3trHGguaxa.skY3cL40MNRIMfJgvmd2t8CtWz2', NULL, '2024-03-15 01:28:58', '2024-03-15 01:28:58'),
(6, 'Victorino Gutierrez', 'victorino@gmail.com', NULL, '$2y$12$2ETOZNiaTjSCoT.X5j5rceIg/aLztM3Xu.WrS4ymOAealnI74IjBe', NULL, '2024-03-15 01:33:35', '2024-03-15 01:33:35'),
(7, 'Aura', 'aurilla@gmail.com', NULL, '$2y$12$.grXCHd44SONl4P7qlBHSOiSoWu42b3ruB7yB8rzBGPAdSZt2hnJe', NULL, '2024-03-15 01:35:56', '2024-03-15 01:35:56'),
(8, 'Aura', 'cardenasb21@gmail.com', NULL, '$2y$12$f0I6CKk1ANvesWGI8DOcDegbBKUIVFuz4vm0V10O6bVTeyEK.RYyK', NULL, '2024-03-15 02:00:09', '2024-03-15 02:00:09'),
(9, 'Victorino', 'nasb21@gmail.com', NULL, '$2y$12$HRmWGAQHhN/Cp/VuY8AZX.zhwhtchiN5R9gSL7Id8TuWiAh0kFRx6', NULL, '2024-03-15 02:03:12', '2024-03-15 02:03:12'),
(10, 'Andres', 'andres@gmail.com', NULL, '$2y$12$3OZ/bAzHxZ0ZMlN3R6EeKuKg1Y8bliO7J1EVFI9hkXiPCIXfP43zq', NULL, '2024-03-15 02:04:31', '2024-03-15 02:04:31'),
(11, 'Andress', 'sdres@gmail.com', NULL, '$2y$12$NH8jNeOGMjJSQfSt1mUTEu/dW91ZHBeTztRWsFzoNI7WKjQ0oYgFK', NULL, '2024-03-15 02:05:09', '2024-03-15 02:05:09'),
(12, 'Bulma', 'bulma@gmail.com', NULL, '$2y$12$7weA9nSOGeoMg7Hhp3EmOeRhVinCQw4xWZE6LRaONiqgk.MwXGcx6', NULL, '2024-03-15 02:08:38', '2024-03-15 02:08:38'),
(13, 'Tomas', 'toma@tomas', NULL, '$2y$12$HQqpppDc6evSNePaq8rZNeTw7TPtCftq1dT670zdyBvMKgKERbVt6', NULL, '2024-03-15 04:57:33', '2024-03-15 04:57:33'),
(14, 'mauricio', 'mauricio@gmail.com', NULL, '$2y$12$XaBGWzEWNtRxlpopb1WoaeCZ6OnDy5TjEZKX9txsBcgcNMOcP/tE6', NULL, '2024-03-15 04:59:38', '2024-03-15 04:59:38'),
(15, 'funval', 'funval@funval', NULL, '$2y$12$ovYAPhRJo18IFF0W6jcIS.5ZAXnCEVjPDXzGdquiDZYAjPIpvomJ6', NULL, '2024-03-15 05:33:35', '2024-03-15 05:33:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `correo` varchar(191) NOT NULL,
  `estado` varchar(191) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL,
  `fecha_Modificacion` date NOT NULL,
  `cambiar_Estado` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `estado`, `fecha_creacion`, `id_rol`, `fecha_Modificacion`, `cambiar_Estado`, `created_at`, `updated_at`) VALUES
(3, 'saki@gmail.com', 'Inactivo', '2024-03-11', 1, '2024-03-12', 'Activo2', '2024-03-13 01:20:15', '2024-03-13 19:52:46'),
(4, 'fdsfdssaki@gmail.com', 'Inactivo', '2024-03-11', 1, '2024-03-12', 'Activo2', '2024-03-13 01:21:07', '2024-03-13 19:55:29'),
(5, 'Vegetai@gmail.com', 'Inactivo', '2024-03-11', 2, '2024-03-12', 'Activo2', '2024-03-13 01:26:12', '2024-03-13 01:26:12'),
(6, 'truns@gmail.com', 'Inactivo', '2024-03-11', 2, '2024-03-12', 'Activo1', '2024-03-13 01:47:08', '2024-03-14 21:58:32'),
(7, 'Policia@gmail.com', 'Inactivo', '2024-03-11', 1, '2024-03-12', 'Activo1', '2024-03-13 01:59:46', '2024-03-13 01:59:46'),
(8, 'lumno@alumno', 'Activo', '2024-03-13', 1, '2024-03-14', 'Inactivo', '2024-03-14 19:45:26', '2024-03-14 19:45:26'),
(9, 'maestro@maestro', 'Activo', '2024-03-13', 1, '2024-03-14', 'Inactivo', '2024-03-14 21:57:59', '2024-03-14 21:57:59'),
(10, 'enfermera@enfermera', 'Activo', '2024-03-06', 2, '2024-03-11', 'Inactivo', '2024-03-15 07:37:52', '2024-03-15 07:37:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paginas`
--
ALTER TABLE `paginas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarios_id_rol_foreign` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `paginas`
--
ALTER TABLE `paginas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
