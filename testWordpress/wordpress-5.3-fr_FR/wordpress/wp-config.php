<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress_first' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'mikasux' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '12345' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Cq!|E!A)h%cFVN52oLqz4m;2RnIL([Q6Jh8qO.RL|GmReP? WIsQ!($E51uLK[`k' );
define( 'SECURE_AUTH_KEY',  '}7hVW]uOosihxE&z/apdxpICw,_wvh{J9{)WP0Z*-ZC):fJdq^Tw!s9!RV929s0P' );
define( 'LOGGED_IN_KEY',    'kRtGvKW$*C/_fi>5wY2vO{WAyF]qRKcLBD,R25H6a4.*5v>Ifd{1%D?}BiZ,C^${' );
define( 'NONCE_KEY',        ' R[J4{IUg`5/4 :lHGeHcZkRrC5[RA5JHbY0gN$24]DiC(6ty7E]2Ll5Hr|j!:77' );
define( 'AUTH_SALT',        '|mICUC:Fk3eaPb?^J04DXv{u%#INmcUmj9.{r14*CC<0*PFF^<8kjfM[4Yw15T,O' );
define( 'SECURE_AUTH_SALT', '6s16KzOd5EG|juOuzl!sc#kETNy|k}LZ9@+k<DO9p:T-CH4utx,.!*G4N7x)/X)i' );
define( 'LOGGED_IN_SALT',   '/12o>~x&lW#v4wm4-/%Ax?{GWltsD(v3~.@V!S+_w):qs1~@qaFM]cQ7U7bZ7E7W' );
define( 'NONCE_SALT',       'Z,bpt>SV8M$.3>{z7bD_wz_2F qwBSo)p<%4-IxXfy?s]th`$RLwJL/iH1A3OLax' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'Tabwp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
