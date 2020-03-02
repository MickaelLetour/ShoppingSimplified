<?php
/**
 * Single Blog Options Customizer
 *
 * @package Honeypress
 */
function honeypress_single_blog_customizer ( $wp_customize )
{
$wp_customize->add_section('honeypress_single_blog_section',
	array(
		'title' => esc_html__('Single Blog Section', 'honeypress'),
		'panel' => 'honeypress_theme_panel',
		'priority' => 5
	));

/************************* Related Post  *********************************/

$wp_customize->add_setting('honeypress_enable_related_post',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_related_post', 
	array(
		'label' => esc_html__('Enable Related Posts', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 1,
	)
));

/************************* Related Post Title  *********************************/

$wp_customize->add_setting('honeypress_related_post_title', 
	array(
		'default' => esc_html__('Related Posts', 'honeypress'),
		'sanitize_callback' => 'sanitize_text_field',
	)
);
$wp_customize->add_control('honeypress_related_post_title', 
	array(
		'label' => esc_html__('Related Post Title', 'honeypress'),
		'type' => 'text',
		'section' => 'honeypress_single_blog_section',
		'priority' => 2,
		'active_callback' => 'honeypress_rt_post_callback',
	)
);

/************************* Related Post Option *********************************/
 
 $wp_customize->add_setting('honeypress_related_post_option', 
	array(
		'default' 			=> esc_html__('categories', 'honeypress'),
		'sanitize_callback' => 'honeypress_sanitize_select'
		)
	);

$wp_customize->add_control('honeypress_related_post_option', 
	array(		
		'label' 	=> esc_html__('Related Post Option', 'honeypress'),		
		'section' 	=> 'honeypress_single_blog_section',
		'settings'  => 'honeypress_related_post_option',
		'active_callback' => 'honeypress_rt_post_callback',
		'priority' => 3,
		'type' 		=> 'select',
		'choices' 	=>  array(
			'categories'=> esc_html__( 'All', 'honeypress' ),
			'tags'		=> esc_html__( 'Related by tags', 'honeypress' ),
			)
		)
	);

/************************* Meta Hide Show *********************************/

$wp_customize->add_setting('honeypress_enable_single_post_category',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_category', 
	array(
		'label' => esc_html__('Hide/Show Categories', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 4,
	)
));

$wp_customize->add_setting('honeypress_enable_single_post_date',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_date', 
	array(
		'label' => esc_html__('Hide/Show Date', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 6,
	)
));

$wp_customize->add_setting('honeypress_enable_single_post_comments',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_comments', 
	array(
		'label' => esc_html__('Hide/Show Comments', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 7,
	)
));

$wp_customize->add_setting('honeypress_enable_single_post_comments',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_comments', 
	array(
		'label' => esc_html__('Hide/Show Comments', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 6,
	)
));

$wp_customize->add_setting('honeypress_enable_single_post_admin',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_admin', 
	array(
		'label' => esc_html__('Hide/Show Author Name', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 5,
	)
));

$wp_customize->add_setting('honeypress_enable_single_post_tag',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_tag', 
	array(
		'label' => esc_html__('Hide/Show Tags', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 8,
	)
));
$wp_customize->add_setting('honeypress_enable_single_post_admin_details',
	array(
		'default' => true,
		'sanitize_callback' => 'honeypress_sanitize_checkbox',
	)
);
$wp_customize->add_control(new honeypress_Toggle_Control( $wp_customize, 'honeypress_enable_single_post_admin_details', 
	array(
		'label' => esc_html__('Hide/Show Author Details', 'honeypress'),
		'type' => 'toggle',
		'section' => 'honeypress_single_blog_section',
		'priority' => 9,
	)
));

}
add_action( 'customize_register', 'honeypress_single_blog_customizer' );