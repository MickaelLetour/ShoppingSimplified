<?php
require_once "../functions/connexion.php";

try {
	$dbh = new Connexion();
	$bdd = $dbh->PDOInit();
	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
 	$insertArticle = ("INSERT INTO article (title, content, dateCreation) 
				SELECT :title,:content,:dateCreation
				WHERE 
				NOT EXISTS (SELECT * FROM article WHERE title = :title)");
	
	if (($handleR = fopen("Data.csv", "r")) !== FALSE) {
		while (($dataR = fgetcsv($handleR, 1000, ";")) !== FALSE) {
			$statement = $bdd->prepare($insertArticle) or die($bdd->errorInfo());
			$statement->bindParam(':title', $dataR[0]);
            $statement->bindParam(':content', $dataR[1]);
            $statement->bindParam(':dateCreation', ConvertToDate($dataR[2]));
			$statement->execute();
			echo $dataR[1]." "."ok\n";
		}		 
		fclose($handleR);
	}

}
catch(exception $e) {
	die('ERREUR : '.$e->getMessage());
}

function ConvertToDate(string $date){
	echo "$date ";
	$newDate=explode("/",$date);
	var_dump ($newDate);
	if (isset($newDate[1])) {
		$resultDate="$newDate[2]-$newDate[1]-$newDate[0]";
	}else {
		$resultDate=Null;
	}									
						
	return $resultDate;
}

?>