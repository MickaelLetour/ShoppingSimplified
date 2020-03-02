<?php
if( ! function_exists( 'honeypress_register_custom_controls' ) ) :
/**
 * Register Custom Controls
*/
function honeypress_register_custom_controls( $wp_customize ) {

    require_once get_template_directory() . '/inc/customizer/toggle/class-toggle-control.php';
    $wp_customize->register_control_type( 'honeypress_Toggle_Control' );
}
endif;
add_action( 'customize_register', 'honeypress_register_custom_controls' );