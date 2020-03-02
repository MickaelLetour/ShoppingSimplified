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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/style.css">
    <script src="script/Js.js" async></script>
    <title>Base de données de Films</title>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Liste de Films</h1>
        </div>
        <div class="affiche">      
        </div>
        <div class="row">
<?php 

        $sqlFilms= $connexion->query("SELECT * FROM Films order by title asc");
        while ($donnees = $sqlFilms->fetch()) {
?>
            <div class="card col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <img class="jackette" src="<?php echo $donnees['lienImage'];?>">
                <div class="info">
                    <div class="text-center">
                    <form method="GET">
                    <h1><input type="submit" id="button" value="allo"></h1>
                    </form>
                    </div>
                </div>
            </div>
<?php
        }
        $sqlFilms->closeCursor();
?>

        </div>
    </div>
</body>
</html>