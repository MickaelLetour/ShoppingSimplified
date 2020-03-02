<?php

function setArticle(){
    require_once "connexion.php";
    require_once 'functions.php';

    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $insertArticle=("INSERT INTO article (title,content,dateCreation,id_user) VALUES (:title,:content,:dateCreation,:id_user)");
    $searchID=("SELECT * FROM users where pseudo= :pseudo");

    $title = $_POST["title"];
    $content = $_POST["content"];
    $user = $_POST["id"];
    $date = date("d-m-Y");
    $date=ConvertToDate($date);

    $statement = $bdd->prepare($searchID)or die($bdd->errorInfo());
    $statement->bindParam(':pseudo',$user);
    $statement->execute();
    $data = $statement->fetchall();
    foreach ($data as $idUser){
        $id= $idUser[0];
    }

    $statement = $bdd->prepare($insertArticle)or die($bdd->errorInfo());
    $statement->bindParam(':title',$title);
    $statement->bindParam(':content',$content);
    $statement->bindParam(':dateCreation',$date);
    $statement->bindParam(':id_user',$id);
    $statement->execute();
    echo "ok";
    header("Location:../index.php");
}

if($_POST["title"]!=="" && $_POST["content"]!==""){
    setArticle();
    
}
else {
    echo "remplir les champs";
}

?>