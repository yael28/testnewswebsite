<?php
require (dirname(__FILE__)."/config/variables.php");
include (dirname(__FILE__)."/class/display.class.php");

$news = $display->displayNewsSingle($_GET['id']);
?>
<!-- main.tpl.php --><!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php echo $news['title']; ?> | News</title>

	<meta name="keywords" content="" />
    <meta name="description" content="" />
	<meta name="author" content="">

	<meta name="viewport" content="width=device-width">
    
    <link rel="stylesheet" href="font/stylesheet.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="css/style.css?v=1">
    
    <script src="js/libs/modernizr-2.5.3.min.js"></script>
	
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.min.js"><\/script>')</script>
    
</head>

<body class="linear-wrapper-bg">
			
    <div id="wrapper">
    	
        <div id="top">
        	<div class="logo-holder clearfix">
            	<a href="index.php" class="tlogo fleft"><h1>News</h1></a>
                <div class="tmenu fright"></div>
            </div>
        </div>
    	        
        <div id="content">
        
            <div id="title">
            	<div class="title-holder">
                	<h3><?php echo $news['title']; ?></h3>
                    <p><?php echo $news['ndate']; ?></p>
                </div>
            </div>    
            
            <div class="content-holder clearfix">
                
                <div class="fleft columns column-left">
                	<?php include (dirname(__FILE__)."/objects/news-single.php"); ?>
                </div>
                
                <div class="fleft columns column-right">
                	<div class="right-list">
                        <h4>More News</h4>
                        <div class="list-content">
                            <div class="list">
                                <?php
                                foreach( $display->displayNewsList(1,4,$_GET['id']) as $key => $value ):
                                    echo '<a class="lists" href="news.php?id='.$value['news_slug'].'">
                                        <div>
                                            <img src="'.$value['news_image_thumb'].'" />
                                            <h4>'.$value['news_title'].'</h4>
                                        </div>
                                    </a>';
                                endforeach; ?>
                            </div>
                            
                        </div>
                        <a href="index.php" class="viewmore">view more</a>
                    </div>
                </div>
                
            </div>
                
		</div>
    
    	<footer>
    		<div id="footer">
            	<div class="footer-text">
            		<p>Copyright ©2015 News Website. All rights reserved.</p>
                </div>
			</div>
    	</footer>
        
    </div><!-- wrapper -->
    
    <script src="js/libs/jquery.validate.js"></script>
    <script src="js/plugins.js"></script>
    
</body>
</html>
