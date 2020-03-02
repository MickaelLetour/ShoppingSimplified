<?php

function getArticles() {

    require_once "connexion.php";
    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $articles=("SELECT * FROM article ORDER BY dateCreation DESC");

    $statement = $bdd->prepare($articles)or die($bdd->errorInfo());
	$statement->execute();
    $data = $statement->fetchAll();

    return $data;
}

function getArticle() {

    require_once "connexion.php";
    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $resultArticle = $_GET["id"];
    $article=("SELECT * FROM article WHERE id = :id");
    $statement = $bdd->prepare($article)or die($bdd->errorInfo());
    $statement->bindParam(':id',$resultArticle);
	$statement->execute();
    $data = $statement->fetchAll();
    return $data;
}				

function getComment() {
    require_once "connexion.php";
    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $resultComment = $_GET["id"];
    $comment=("SELECT * FROM comment WHERE id_article = :id");
    $statement = $bdd->prepare($comment)or die($bdd->errorInfo());
    $statement->bindParam(':id',$resultComment);
	$statement->execute();
    $data = $statement->fetchAll();
    return $data;

}

function viewComment($a) {
    foreach ($a as $data){
        echo "<h3>".$data[1]."</h3>";
        echo "<p>".$data[2]."<p>";
        echo "<strong><p>".$data[3]."</p></strong><br>";
    }
}

function ConvertToDate(string $date){
	echo "$date ";
	$newDate=explode("-",$date);
	var_dump ($newDate);
	if (isset($newDate[1])) {
		$resultDate="$newDate[2]-$newDate[1]-$newDate[0]";
	}else {
		$resultDate=Null;
	}									
						
	return $resultDate;
}
?>