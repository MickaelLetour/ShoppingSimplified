<?php

function register(){

    require_once "connexion.php";
    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //On vérifie que l'utilisateur a bien envoyé les informations demandées 
    if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["password2"])){
    	//On vérifie que password et password2 sont identiques
    	if($_POST["password"] == $_POST["password2"]){
    		//On utilise alors notre fonction password_hash :
    		$hash = password_hash($_POST["password"], PASSWORD_DEFAULT);
    		//Puis on stock le résultat dans la base de données :
    		$query = $bdd->prepare('INSERT INTO users (pseudo, pass) VALUES(:username, :password);');
    		$query->bindParam(':username', $_POST["username"]);
    		$query->bindParam(':password', $hash);
    		$query->execute();
    		header('Location: ../members.php');
            exit();
        }
    }
}

register();

?>