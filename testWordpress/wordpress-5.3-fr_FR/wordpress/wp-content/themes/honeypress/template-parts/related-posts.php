<?php 
$honeypress_related_post = honeypress_related_posts(); 
if($honeypress_related_post->have_posts() ): ?>
<article class="related-posts">
   <div class="comment-title">
      <h3><?php echo esc_html(get_theme_mod('honeypress_related_post_title',__('Related Posts','honeypress')));?></h3>
   </div>
   <div class="row">
      <div id="related-posts-carousel" class="owl-carousel owl-theme col-lg-12">
         <?php while ($honeypress_related_post->have_posts()) : $honeypress_related_post->the_post();?>
         <div class="item">
            <article class="post">
               <figure class="post-thumbnail">
                  <?php
                        if(has_post_thumbnail()):?>
                        <a href="<?php the_permalink();?>" tabindex="-1"><?php the_post_thumbnail('full',array('class'=>'img-fluid'));?></a>
                     <?php else:?>
                        <a href="<?php the_permalink();?>">
                           <img class='img-fluid'src="<?php echo esc_url(HONEYPRESS_THEME_URI);?>/assets/images/featured/related.png"/>
                        </a>  
                     <?php endif;?>					
               </figure>
               <div class="post-content">
                  <?php
                  if(has_category()):?>
                     <div class="entry-meta">
                        <span class="cat-links"><?php the_category( ' ' );?></span>
                      </div>
                  <?php endif;?>
                  <header class="entry-header">
                     <h4 class="entry-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h4>
                  </header>
               </div>
            </article>
         </div>
         <?php endwhile;  wp_reset_postdata();?>
      </div>
   </div>
</article>
<?php endif;?>