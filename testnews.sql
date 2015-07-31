-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 31, 2015 at 08:50 AM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `testnews`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `test_multi_sets`()
    DETERMINISTIC
begin
        select user() as first_col;
        select user() as first_col, now() as second_col;
        select user() as first_col, now() as second_col, now() as third_col;
        end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE IF NOT EXISTS `tbl_news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(255) NOT NULL,
  `news_slug` varchar(255) NOT NULL,
  `news_content` text NOT NULL,
  `news_image` varchar(255) NOT NULL,
  `news_image_thumb` varchar(255) NOT NULL,
  `news_date` date NOT NULL,
  `news_status` tinyint(2) NOT NULL,
  `date_modified` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`news_id`, `news_title`, `news_slug`, `news_content`, `news_image`, `news_image_thumb`, `news_date`, `news_status`, `date_modified`, `user`) VALUES
(1, 'Title of news 1', 'title-of-news-1', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(2, 'Title of news 2', 'title-of-news-2', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(3, 'Title of news 3', 'title-of-news-3', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(4, 'Title of news 4', 'title-of-news-4', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(5, 'Title of news 5', 'title-of-news-5', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(6, 'Title of news 6', 'title-of-news-6', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(7, 'Title of news 7', 'title-of-news-7', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(8, 'Title of news 8', 'title-of-news-8', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(9, 'Title of news 9', 'title-of-news-9', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-07-31', 1, 1438350020, 'administrator'),
(10, 'Title of news 10', 'title-of-news-10', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>', 'http://fakeimg.pl/500x300/222/?text=News Image', 'http://fakeimg.pl/300x100/222/?text=News Image', '2015-08-01', 1, 1438350020, 'administrator');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_status`
--

CREATE TABLE IF NOT EXISTS `tbl_status` (
  `status_id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(255) NOT NULL,
  `status_slug` varchar(255) NOT NULL,
  `status` tinyint(2) NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tbl_status`
--

INSERT INTO `tbl_status` (`status_id`, `status_name`, `status_slug`, `status`) VALUES
(1, 'Published', 'published', 1),
(2, 'Draft', 'draft', 1),
(3, 'Deleted', 'deleted', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
