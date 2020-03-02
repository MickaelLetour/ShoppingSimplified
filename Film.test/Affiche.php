<?php
session_start();
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
try {
    $connexion = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
}
catch (Exception $e) {
    die ("Erreur:".$e->getmessage());
}
if (isset($_GET["id"])) {
    $n=$_GET["id"];
}
$sqlFilms= $connexion->query("SELECT * FROM Films inner join Pays on Films.Origine = Pays.id inner join Critiques on Critiques.film_id = Films.id   where Films.id = '$n'");
$sqlFilms1= $connexion->query("SELECT * FROM film_genre inner join Genre on film_genre.genre_id = Genre.id where film_genre.film_id = '$n'");
$sqlFilms2= $connexion->query("SELECT * FROM film_pers inner join Personnes on film_pers.personnes_id = Personnes.id 
inner join Fonction on film_pers.fonction_id = Fonction.id
inner join Pays on film_pers.Nationalite = Pays.id
where film_pers.film_id = '$n'");

while ($donnees = $sqlFilms->fetch()) {
    echo "<h1>$donnees[1].</h1><br>";
    echo "<p>Date de sortie : $donnees[2].</p><br>";
    echo "<h2>Synopsis</h2><p>$donnees[3].</p><br>";
    echo "<p>Pegi : $donnees[4].</p><br>";
    echo "<p>Origine du Film : $donnees[8].</p><br>";
    echo "<p>Note moyenne du film : $donnees[10].</p><br>";
    echo "<p>Commentaire : $donnees[11].</p><br>";
    echo "<img src=\"$donnees[6]\"<br><br>";
    while ($donnees1 = $sqlFilms1->fetch()) {
        echo "<p>Genre du Film $donnees1[3]. ";
    }
    while ($donnees2 = $sqlFilms2->fetch()) { z
        echo "<p>$donnees2[9]. </p>";
        echo "<p>Prénom $donnees2[5]. </p>";
        echo "<p>Nom : $donnees2[6]. </p>";
        echo "<p>Nationalité : $donnees2[11]. </p><br>";
    }
}
?>