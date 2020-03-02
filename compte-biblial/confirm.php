<?php

$user_id = $_GET['id'];
$token = $_GET['token'];
require 'inc/db.php';
$req = $pdo->prepare('SELECT * from users WHERE id=?'); 
$req->execute([$user_id]);
$user=$req->fetch();
session_start();


if ($user && $user->confirmation_token == $token) {
    session_start();
    $pdo->prepare('UPDATE users SET confirmation_token = NULL, confirmed_at = NOW() WHERE  id =?')->execute([$user_id]);
    $_SESSION['flash']['danger'] = 'Votre compte a bien été validé'; 
    $_SESSION['auth'] = $user;
    header('location:account.php');

    die("ok");
} else {
    $_SESSION['flash']['danger'] = "ce token n'est plus valide"; // message qui va apparaitre si erreur
    header('Location: login.php');
}
