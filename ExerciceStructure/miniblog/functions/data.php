<?php


function setComment(){
    require_once "connexion.php";
    require_once 'functions.php';

    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $insertComment=("INSERT INTO comment (pseudo,content,dateCreation,id_article) VALUES (:pseudo,:content,:dateCreation,:id_article)");

    $pseudo = $_POST["userName"];
    $msg = $_POST["userMsg"];
    $mail = $_POST["userMail"];
    $id = $_POST["id"];
    $date = date("d-m-Y");
    $date=ConvertToDate($date);
    

    $statement = $bdd->prepare($insertComment)or die($bdd->errorInfo());
    $statement->bindParam(':pseudo',$pseudo);
    $statement->bindParam(':content',$msg);
    $statement->bindParam(':dateCreation',$date);
    $statement->bindParam(':id_article',$id);
    $statement->execute();
    header("Location:../index.php");

}

if($_POST["userName"]!=="" && $_POST["userMsg"]!=="" && $_POST["userMail"]!==""){
    setComment();
}
else {
    echo "remplir les champs";
}

function setArticle(){
    require_once "connexion.php";
    require_once 'functions.php';

    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $insertArticle=("INSERT INTO article (title,content,dateCreation,id_user) VALUES (:title,:content,:dateCreation,:id_user)");

    $title = $_POST["title"];
    $content = $_POST["content"];
    $user = $_POST["id"];
    $date = date("d-m-Y");
    $date=ConvertToDate($date);
    

    $statement = $bdd->prepare($insertArticle)or die($bdd->errorInfo());
    $statement->bindParam(':title',$title);
    $statement->bindParam(':content',$content);
    $statement->bindParam(':dateCreation',$date);
    $statement->bindParam(':id_user',$user);
    $statement->execute();
    header("Location:../index.php");

}

if($_POST["title"]!=="" && $_POST["content"]!=="" && $_POST["id"]!==""){
    setArticle();
}
else {
    echo "remplir les champs";
}


?>