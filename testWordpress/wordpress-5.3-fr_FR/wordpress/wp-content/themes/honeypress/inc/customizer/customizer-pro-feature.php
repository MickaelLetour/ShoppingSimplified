<?php //Pro Details
function honeypress_pro_feature_customizer( $wp_customize ) {
    class WP_Pro__Feature_Customize_Control extends WP_Customize_Control {
        public $type = 'new_menu';
        /**
        * Render the control's content.
        */
        public function render_content() {
        ?>
        <div class="honeypress-pro-features-customizer">
            <ul class="honeypress-pro-features">
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Advanced Hook Settings','honeypress' ); ?>
                </li>
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Multiple Page Templates','honeypress' ); ?>
                </li>   
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Portfolio Management','honeypress' ); ?>
                </li>
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Slide Variations','honeypress' ); ?>
                </li>
              <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Create Unlimited Services','honeypress' ); ?>
                </li>
                 <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Typography Settings','honeypress' ); ?>
                </li>
              <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Manage Contact Details','honeypress' ); ?>
                </li>
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Testimonial Section','honeypress' ); ?>
                </li>
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Client Section','honeypress' ); ?>
                </li>
              <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Team Section','honeypress' ); ?>
                </li>
              <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Custom Color Schemes','honeypress' ); ?>
                </li>
              <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Section Reordering','honeypress' ); ?>
                </li>
                <li>
                    <span class="honeypress-pro-label"><?php _e( 'PRO','honeypress' ); ?></span>
                    <?php _e( 'Quality Support','honeypress' ); ?>
                </li>
            </ul>
            <a target="_blank" href="<?php echo 'https://spicethemes.com/honeypress-pro';?>" class="honeypress-pro-button button-primary"><?php _e( 'UPGRADE TO PRO','honeypress' ); ?></a>
            <hr>
        </div>
        <?php
        }
    }
    $wp_customize->add_section( 'honeypress_pro_feature_section' , array(
    		'title'      => __('View PRO Details', 'honeypress'),
    		'priority'   => 1,
       	) );
    $wp_customize->add_setting(
        'upgrade_pro_feature',
        array(
            'capability'     => 'edit_theme_options',
    		'sanitize_callback' => 'sanitize_text_field',
        )	
    );
    $wp_customize->add_control( new WP_Pro__Feature_Customize_Control( $wp_customize, 'upgrade_pro_feature', array(
    		'section' => 'honeypress_pro_feature_section',
    		'setting' => 'upgrade_pro_feature',
        ))
    );
    class WP_Feature_document_Customize_Control extends WP_Customize_Control {
        public $type = 'new_menu';
        /**
        * Render the control's content.
        */
        public function render_content() {
        ?>
       
         <div class="honeypress-pro-content">
            <ul class="honeypress-pro-des">
                    <li> <?php _e('With individual hook settings, you can insert html or php code according to your needs.','honeypress');?></li>
                    <li> <?php _e('Theme comes with multiple page settings like multiple blog, portfolio 2/3/4 column, about us etc.','honeypress');?></li>
                    <li> <?php _e('Create a professional-looking portfolio.','honeypress');?></li>
                    <li> <?php _e('PRO version comes with slide variation options, so you can adjust your content through text alignment.','honeypress');?></li>
                    <li> <?php _e('Add as many services as you like. You can even display each service on a separate page.','honeypress');?></li>   
                     <li> <?php _e('Typography Settings allow you to choose content font size, font family, etc','honeypress');?></li>    
                    <li> <?php _e('Theme comes with a beautifully designed section where you can manage your contact details.','honeypress');?></li>
                    <li> <?php _e('Show all your team members, clients, testimonials on front page.','honeypress');?></li>
                    <li> <?php _e('You can select amongst predefined color skins, or you can create your own without writing any CSS code.','honeypress');?></li>
                    <li> <?php _e('The layout manager will help you rearrange all sections.','honeypress');?></li>
                    <li> <?php _e('Translation-ready, the theme supports popular plugins WPML and Polylang','honeypress');?></li>
                    <li> <?php _e('24/7 professional support for Google Maps','honeypress');?></li>
                    <li> <?php _e('Dedicated support, widget and sidebar management.','honeypress');?></li>
                </ul>
         </div>
        <?php
        }
    }

    $wp_customize->add_setting(
        'honeypress_pro_feature',
        array(
            'capability'     => 'edit_theme_options',
    		'sanitize_callback' => 'sanitize_text_field',
        )	
    );
    $wp_customize->add_control( new WP_Feature_document_Customize_Control( $wp_customize, 'honeypress_pro_feature', array(	
    		'section' => 'honeypress_pro_feature_section',
    		'setting' => 'honeypress_pro_feature',
        ))
    );

}
add_action( 'customize_register', 'honeypress_pro_feature_customizer' );
?>