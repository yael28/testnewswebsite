<?php
/*
* Date Created July 31 2015
* By : Paul Ysrael M. Mañgaser
* Date Modified :
* Modified by:
*/

class Display{

	var $error = '';
	var $str;
	
	function displayNewsList($status = 1, $limit = 10, $slug = NULL){
		
		$str = '';
		if($slug){
			$str = "and news_slug != '".$slug."' ";
		}
		
		$list = array();
		$sql = mysql_query("SELECT news_title, news_slug, news_image_thumb FROM testnews.tbl_news WHERE news_status = ".$status." ".$str." ORDER BY news_date DESC LIMIT ".$limit );
		if( mysql_num_rows($sql)>0 ){
			while($row = mysql_fetch_array($sql)){
				$list[] = $row;
			}
			
			return $list;	
			
		}else{
			return 'no available content';
		}
		
	}
	
	function displayNewsSingle($slug, $status = 1 ){
		
		$sql = mysql_query("SELECT news_title, news_slug, news_image, news_content, news_date FROM testnews.tbl_news WHERE news_status = ".$status." and news_slug = '".$slug."' ");
		if( mysql_num_rows($sql)>0 ){
			while($row = mysql_fetch_assoc($sql)){
				$news = array( 
								'title' 	=> $row['news_title'],
								'content' 	=> $row['news_content'],
								'ndate'		=> date( 'F d, Y', strtotime($row['news_date'])),
								'image' 	=> $row['news_image']
							);
			}
			
			return $news;
			
		}else{
			return 'no available content';
		}
		
	}
	
}

$display = new Display();

?>