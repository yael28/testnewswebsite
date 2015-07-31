<?php
session_start();
error_reporting(0);

/**
* Database Constants 
*/
$db_prefix = "testnews";
$tbl_prefix = "tbl_";

define("DB_SERVER", 'localhost');
define("DB_USER", 'root');
define("DB_PASS", '');
define("DB_NAME", $db_prefix);

$conn = mysql_connect(DB_SERVER,DB_USER,DB_PASS) or die ("Could not connect to MySQL");
if (!$conn) { echo "Login failed."; exit; }
mysql_select_db(DB_NAME) or die ("Could not select ".DB_NAME." database");

?>