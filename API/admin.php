<?php

require_once "/laragon/www/API/Functions/adminFunction.php";

header("Content-Type: application/json");
header("Content-Encoding: UTF-8");

if(!empty($_POST['username']) && is_string($_POST['username']) && !empty($_POST['password']) && is_string($_POST['password'])){
    login($_POST['username'],$_POST['password']);
}
else if (!empty($_POST['userId'])&& !empty($_POST['password']) && !empty($_POST['password2']) && !empty($_POST['email']) && is_string($_POST['userId']) && is_string($_POST['password']) && is_string($_POST['password2']) && is_string($_POST['email'])){

    $errors=array();
    echo("allo");

    if(empty($_POST['userId']) || !preg_match('/^[a-zéèëàâãäïîûüA-Z0-9_]+$/', $_POST['userId'])){
        $errors['userId'] = "votre pseudo n'est pas valide (6 caractères minimum, alphanumerique)";
        echo("allo1");
    }

    else {
        require_once "/laragon/www/API/config/Connexion.php";
        $dbh = new Connexion();
        $stmt = $dbh->getpdo()->prepare('SELECT id from users WHERE username = :userId'); 
        $stmt->bindParam(':userId',$_POST['userId'],PDO::PARAM_STR);
        $stmt->execute();
        $user=$stmt->fetch();
        if ($user){
            $errors['userId'] = 'ce pseudo est déjà pris';
        }
        /* debug($user);
        die(); */
        echo("allo2");
    }
    /* if(empty($_POST['email']) || ! filter_var($_POST, FILTER_VALIDATE_EMAIL)){
        $errors['email'] = "votre email n'est pas valide";
    } */

    if (isset($_POST['email'])) {
        if(empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            $errors['email'] = "Votre Email n'est pas valide";
        } 
        echo("allo3");
    } 
    
    else {
        require_once "/laragon/www/API/config/Connexion.php";
        $dbh = new Connexion();
        $stmt = $dbh->getpdo()->prepare('SELECT id from users WHERE email = :email'); 
        $stmt->bindParam(':email',$_POST['email'],PDO::PARAM_STR);
        $stmt->execute();
        $user=$stmt->fetch();
        if ($user){
            $errors['email'] = 'Cet email est déjà utilisé par un autre compte';
        }
        /* debug($user);
        die(); */
        
    }

    if(empty($_POST['password']) || $_POST['password'] !== $_POST['password2']){
        $errors['password'] = 'votre mot de passe est erroné';
    }

    if(empty($errors)){
        echo("allo5");
        register($_POST['userId'],$_POST['password'],$_POST['email']);
    }
    session_start();
    $_SESSION["errors"] = $errors;
    header ('Location: ../Admin/index.php');
}

else if (!empty($_POST['lname'])&& !empty($_POST['fname']) && !empty($_POST['country']) && is_string($_POST['lname']) && is_string($_POST['fname']) && is_string($_POST['country'])){
    setAuthor($_POST['lname'],$_POST['fname'],$_POST['country']);
}
else if (!empty($_POST['titleBook'])&& !empty($_POST['synopsis']) && !empty($_POST['authorName']) && !empty($_POST['categoryName']) && is_string($_POST['titleBook']) && is_string($_POST['synopsis']) && is_string($_POST['authorName']) && is_string($_POST['categoryName'])){
    setBook($_POST['titleBook'],$_POST['synopsis'],$_POST['authorName'],$_POST['categoryName']);
}
else if (!empty($_POST['categoryName'])&& is_string($_POST['categoryName'])){
    setCategory($_POST['categoryName']);
}
else if (!empty($_POST['countryName'])&& is_string($_POST['countryName'])){
    setCountry($_POST['countryName']);
}
else echo "problème";
