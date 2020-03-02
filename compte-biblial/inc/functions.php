<?php

function debug($variable){

    echo '<pre>' .print_r($variable, true) . '</pre>';
}

function str_random($length){

    $alphabet='0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN';
    return substr(str_shuffle(str_repeat($alphabet,$length)), 0,$length);

}

function logged_only() {
    
if (session_status() == PHP_SESSION_NONE) { // s'il n'y a pas de session demare en une nouvelle 

  session_start();
}

if(!isset($_SESSION['auth'])){

    $_SESSION['flash']['danger'] = "Vous n'avez pas le droit d'acceder à cette page";
    header('Location: login.php');
    exit(); // le exit sert à eviter l'execution de la suite du script
}

}
