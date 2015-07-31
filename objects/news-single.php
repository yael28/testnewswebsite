<div id="news" class="fleft clearfix  content-left">

	<div class="content">
    	<h4><?php echo $row_news['news_title']; ?></h4>
        <span class="newsdate"><?php echo date( 'F d, Y', $row_news['news_date']); ?></span>
        
        <div class="socials"></div>
		
        <?php echo $row_news['news_content']; ?>
        
    </div>
    
</div>