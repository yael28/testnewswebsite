<div class="list-content">
    <div class="list">
        <?php
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
        endforeach; ?>
    </div>
    <div class="pagination" align="center"></div>
</div>