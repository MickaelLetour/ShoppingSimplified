<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'CreateTheme' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '1312' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ntPAcPIR5DE6aiVLCstqzHNPLcftc7PudrG73oKMMQkaruDnfkl4sRPryyMeep8b' );
define( 'SECURE_AUTH_KEY',  'U3Rd9p6Db0m1oPvym4yl3reStBCUugEk8q4rhMTTiaFZ8zTih1eR8h49BuEA2MuS' );
define( 'LOGGED_IN_KEY',    'jixytp5z64uxwt0Qh3pLVHkvvsS2YCOgmsCIWpgxN4Vw9BDKyhxM8fxpFG3N4gk3' );
define( 'NONCE_KEY',        'KnyYd4UI3B1Grl3LFqPzXP1YIrUJVbDU2Ynw1YQiiiHDyofjLpua2AH3Yk3MLtxQ' );
define( 'AUTH_SALT',        'q7iX0SuxqoFzvXMFD5Gk0Xnigwb4umNnYnLre4X1OpEjjiSQtkCleOnwfqZ6YsQF' );
define( 'SECURE_AUTH_SALT', 'q8sE50vslLgrhMSO9M4MPOEbtXgbAzD55DbwpwZWm6OHfRgyzKfhyGVwYQ0j4G1L' );
define( 'LOGGED_IN_SALT',   'zhkGYGJrwpOgUG96Svc6e3Rlw6fcWNNpejDbyG1tVyzWfe2Slp7BrmVjVqptyw72' );
define( 'NONCE_SALT',       '3KCqSGoxeCi5eLIB8kS661Y5eA31Q4EZvR81FfWdvAxUqgypuzsFrEODklQxVz5y' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
