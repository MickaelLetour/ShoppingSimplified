<?php

require_once "/laragon/www/API/config/Connexion.php";

function login (string $username, string $password){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT password FROM users WHERE username = :username");
    $stmt->bindParam(':username',$username,PDO::PARAM_STR);
    $stmt->execute();
    $result = $stmt->fetch();
    $hash = $result[0];
    $correctPassword = password_verify($password, $hash);
    if($correctPassword){
        session_start ();
        $_SESSION['username'] = $username;
        header ('location: ../Admin/index.php');
    }
    else  {
        session_start();
        $_SESSION['errorLogin']="Votre identifiant et/ou votre mot de passe sont erronés.";
        header ('location: ../Admin/index.php');
        exit();
    }
}

function setAuthor(string $lname, string $fname, string $country){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT country.id FROM country where country.name LIKE :country");
    $stmt->bindParam(':country',$country,PDO::PARAM_STR);
    $stmt->execute();
    $id = $stmt->fetch();
    $country_id = $id[0];
    $stmt = $dbh->getPdo()->prepare("INSERT INTO author (lname,fname,country_id) VALUES (:lname,:fname,:country_id);");
    $stmt->bindParam(':lname',$lname,PDO::PARAM_STR);
    $stmt->bindParam(':fname',$fname,PDO::PARAM_STR);
    $stmt->bindParam(':country_id',$country_id,PDO::PARAM_INT);
    $stmt->execute();
    header ('location: ../Admin/index.php');
}

function setBook(string $titleBook, string $synopsis, string $authorName, string $categoryName){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT author.id FROM author where author.lname LIKE :authorName");
    $stmt->bindParam(':authorName',$authorName,PDO::PARAM_STR);
    $stmt->execute();
    $id = $stmt->fetch();
    $author_id = $id[0];
    $stmt = $dbh->getPdo()->prepare("SELECT category.id FROM category where category.name LIKE :categoryName");
    $stmt->bindParam(':categoryName',$categoryName,PDO::PARAM_STR);
    $stmt->execute();
    $id = $stmt->fetch();
    $category_id = $id[0];
    $stmt = $dbh->getPdo()->prepare("INSERT INTO books (title,abstract,author_id,category_id) VALUES (:title,:abstract,:author_id,:category_id);");
    $stmt->bindParam(':title',$titleBook,PDO::PARAM_STR);
    $stmt->bindParam(':abstract',$synopsis,PDO::PARAM_STR);
    $stmt->bindParam(':author_id',$author_id,PDO::PARAM_INT);
    $stmt->bindParam(':category_id',$category_id,PDO::PARAM_INT);
    $stmt->execute();
    header ('location: ../Admin/index.php');
}

function setCategory(string $categoryName){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("INSERT INTO category (name) VALUES (:name);");
    $stmt->bindParam(':name',$categoryName,PDO::PARAM_STR);
    $stmt->execute();
    header ('location: ../Admin/index.php');
}

function setCountry(string $countryName){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("INSERT INTO country (name) VALUES (:name);");
    $stmt->bindParam(':name',$countryName,PDO::PARAM_STR);
    $stmt->execute();
    header ('location: ../Admin/index.php');
}

function getCountry(){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM country");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthor(){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM author");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getCategory(){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM category");
    $stmt->execute();
    return $stmt->fetchAll();
}

function str_random($length){
    $alphabet='0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN';
    return substr(str_shuffle(str_repeat($alphabet,$length)), 0,$length);
}

function register(string $username,string $password,string $email){
    $dbh = new Connexion();
    //On utilise alors notre fonction password_hash :
    $hash = password_hash($password, PASSWORD_BCRYPT);
    $token = str_random(60);
    /* debug($token); // pour que le token s'affiche
    die(); */
    $stmt = $dbh->getpdo()->prepare('INSERT INTO users (username,password,email,confirmation_token) VALUES (:username,:password,:email,:token);');
    $stmt->bindParam(':username', $username,PDO::PARAM_STR);
    $stmt->bindParam(':password', $hash,PDO::PARAM_STR);
    $stmt->bindParam(':email', $email,PDO::PARAM_STR); 
    $stmt->bindParam(':token', $token,PDO::PARAM_STR); 
    $stmt->execute();
    $user_id= $dbh->getpdo()->lastInsertId();
    mail($_POST['email'],'Confirmartion de votre compte', "Afin de valider votre compte merci de valider ce lien\n\nhttp://localhost/API/confirm.php?id=$user_id&token=$token");
    $_SESSION['flash']['success'] = 'un email de confirmation vous a été envoyé pour valider votre compte';
    header('Location: ../Admin/index.php');
    exit();
}

function debug($variable){

    echo '<pre>' .print_r($variable, true) . '</pre>';
}
?>