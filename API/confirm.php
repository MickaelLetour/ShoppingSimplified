<?php

$user_id = $_GET['id'];
$token = $_GET['token'];
require_once "./config/Connexion.php";
$dbh = new Connexion();
$stmt = $dbh->getPdo()->prepare('SELECT * from users WHERE id=:id'); 
$stmt->bindParam(':id',$user_id,PDO::PARAM_INT);
$stmt->execute();
$user=$stmt->fetch();

if ($user && $user['confirmation_token'] == $token) {
    session_start();
    $stmt = $dbh->getPdo()->prepare('UPDATE users SET confirmation_token = NULL, confirmed_at = NOW() WHERE  id = :id');
    $stmt->bindParam(':id', $user_id,PDO::PARAM_INT);
    $stmt->execute();
    $_SESSION['token'] = 'Votre compte a bien été validé'; 
    $_SESSION['auth'] = $user;
    header('location: ../Admin/index.php');
    die("ok");
} 
else {
    session_start();
    $_SESSION['token'] = "Ce token n'est plus valide"; 
    header('Location: ../Admin/index.php');
}
