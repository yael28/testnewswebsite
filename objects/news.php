<div class="list-content">
    <div class="list">
        <?php
		$list = $display->displayNewsList();
		
		if(count($list) > 0){
			foreach( $display->displayNewsList() as $key => $value ):
				echo '<a class="lists" href="news.php?id='.$value['news_slug'].'">
					<div>
						<img src="'.$value['news_image_thumb'].'" />
						<div class="details">
							<h4>'.$value['news_title'].'</h4>
							<p>'.date( 'F d, Y', strtotime($value['news_date'])).'</p>
						</div>
					</div>
				</a>';
			endforeach; 
		}else{
			echo 'no available content to display.';
		}?>
    </div>
    <?php if(count($list) > 0){ ?>
    <div class="pagination" align="center"></div>
    <?php } ?>
</div>