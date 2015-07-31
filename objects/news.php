<div id="news" class="">

	<div class="news-holder clearfix">
    
    	<?php
		$str_news = mysql_query("SELECT * from tbl_news WHERE news_status IN (1,2) ORDER BY date_modified DESC");
		$i=0;
		while($row_news = mysql_fetch_array($str_news)): $i++;
		?> 
    
    	<a href="<?php echo BASE_URL.'news/'.$row_news['news_id'].'/'.$row_news['news_slug']; ?>" class="news-list fleft <?php echo ($i%3==0)? 'nmr' : '' ; ?>">
            <div class="details-holder">
                <img src="<?php echo BASE_URL.$row_news['news_image']; ?>" />
                <div class="text-details">
            		<h4><?php echo $row_news['news_title']; ?></h4>
                    <p><?php echo subWord( strip_tags($row_news['news_content']), 100, 110).'...'; ?></p>
                </div>
            </div>
        </a>
        
        <?php endwhile; ?>
    
    </div>	
    
</div>