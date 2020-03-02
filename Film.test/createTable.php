<?php
define( 'DB_NAME', 'BaseFilms' );
define( 'DB_USER', "root");
define( 'DB_PASSWORD','1312');
define( 'DB_HOST', 'localhost' );
define( 'DB_Films', 'Films');
define( 'DB_Genre', 'Genre');
define( 'DB_Critiques', 'Critiques');
define( 'DB_Fonction', 'Fonction');
define( 'DB_Personnes', 'Personnes');
define( 'DB_Pays', 'Pays');
define( 'DB_Film_Pers','Film_Pers');
define( 'DB_Film_Genre','Film_Genre');

// connexion à Mysql sans base de données
$pdo = new PDO('mysql:host='.DB_HOST, DB_USER, DB_PASSWORD);
 
// création de la requête sql
// on teste avant si elle existe ou non (par sécurité)
$requete = "CREATE DATABASE IF NOT EXISTS `".DB_NAME."` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci";
 
// on prépare et on exécute la requête
$pdo->prepare($requete)->execute();

// connexion à la bdd
$connexion = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
 
// on vérifie que la connexion est bonne
if($connexion){
	// on créer la requête
	$requete = "CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Films."` (
				    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
				    `title` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
				    `created` INT (4),
                    `synopsis` TEXT(255),
                    `pegi` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci
                ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Genre."` (
                    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    `type` TEXT(255)
                ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Critiques."` (
                    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
                    `note` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci,
                    `commentaires` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci
                 ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Fonction."` (
                    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
                    `nom` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci
                 ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                 CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Pays."` (
                    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    `pays` Text (255)        
                 ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Personnes."` (
                    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    `prenom`TEXT (255),
                    `nom`TEXT (255)
                ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Film_Pers."` (
                    `film_id`INTeger,foreign key (film_id) references Films(id),
                    `fonction_id`INTeger,foreign key (fonction_id) references Fonction(id),
                    `personnes_id`INTeger, foreign key (personnes_id) references Personnes(id)

                ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                CREATE TABLE IF NOT EXISTS `".DB_NAME."`.`".DB_Film_Genre."` (
                    `film_id`INTeger,foreign key (film_id) references Films(id),
                    `genre_id`INTeger,foreign key (genre_id) references Genre(id)
                ) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;

                ALTER TABLE Film_Pers
                ADD column Nationalite Integer,
                    ADD FOREIGN KEY (Nationalite)
                        REFERENCES Pays(id);

                ALTER TABLE Films 
                ADD column Origine INTEGER,
                    ADD FOREIGN KEY (Origine)
                        REFERENCES Pays(id);

                ALTER TABLE Critiques
                ADD column film_id INTEGER,
                    ADD FOREIGN KEY (film_id)
                        REFERENCES Films(id);
                ";
 
	// on prépare et on exécute la requête
    $connexion->prepare($requete)->execute();
    echo "table correctement créer";
}
?>