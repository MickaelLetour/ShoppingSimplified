<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <header>
        <div class='boxHeader'><a href="index.php">Accueil</a></div>
    <?php
    session_start ();
    // On récupère nos variables de session
    if (isset($_SESSION['username']) && isset($_SESSION['password'])) {
        $compte=$_SESSION['username'];
            echo "<div class='boxHeader'><a href='functions/logout.php'>Déconnection</a></div>";
            echo "<div class='boxHeader'><a href=''>$compte</a></div>";
        }   
    else {
        echo "<div class='boxHeader'><a href='members.php'>Connection</a></div>";
    }
    ?>

    </header>                    