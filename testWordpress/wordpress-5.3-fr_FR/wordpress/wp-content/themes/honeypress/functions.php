<?php
/**
* Theme functions and definitions.
* @package Honeypress WordPress theme
*/

if( ! defined( 'ABSPATH' ) )
{
	exit;
}

define('HONEYPRESS_THEME_DIR', get_template_directory());
define('HONEYPRESS_THEME_URI', get_template_directory_uri() );

/**
 * Implement the Custom Header feature.
 */
require( HONEYPRESS_THEME_DIR . '/inc/theme-setup.php');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function honeypress_content_width() {

	$GLOBALS['content_width'] = apply_filters( 'honeypress_content_width', 696 );
}
add_action( 'after_setup_theme', 'honeypress_content_width', 0 );	

//About Theme
$theme = wp_get_theme(); // gets the current theme
if ( 'HoneyPress' == $theme->name) 
{
	if ( is_admin() ) 
	{
        require HONEYPRESS_THEME_DIR . '/admin/admin-init.php';
	}
}	

//Alpha Color Control
require( HONEYPRESS_THEME_DIR .'/inc/customizer/customizer-alpha-color-picker/class-honeypress-customize-alpha-color-control.php');

/**
* Register Widget
*/
require( HONEYPRESS_THEME_DIR . '/inc/widget/register-widget.php');

/**
* Breadcrumb setting
*/
require( HONEYPRESS_THEME_DIR . '/inc/breadcrumbs/breadcrumbs.php');

/**
* Register css and js
*/
require( HONEYPRESS_THEME_DIR . '/inc/script/scripts.php');
	
/**
* Nav walker
*/
require( HONEYPRESS_THEME_DIR . '/inc/menu/default_menu_walker.php');
require( HONEYPRESS_THEME_DIR . '/inc/menu/honeypress_nav_walker.php');


/**
* helder function
*/
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/helper-function.php');
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/custom-control.php');
	
/**
* Customizer functionality
*/
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/customizer_sections_settings.php' );
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/customizer.php' );
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/single-blog-options.php' );
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/footer-options.php' );
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/customizer-pro-feature.php' );
require ( HONEYPRESS_THEME_DIR . '/inc/customizer/customizer-recommended-plugin.php');