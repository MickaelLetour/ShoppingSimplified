<?php

function login(){

	require_once "connexion.php";
    $dbh = new Connexion();
	$bdd = $dbh->PDOInit();
	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	//Nous vérifions que l'utilisateur a bien envoyé les informations demandées 
	if(isset($_POST["username"]) && isset($_POST["password"])){
		//Nous allons demander le hash pour cet utilisateur à notre base de données :
		$query = $bdd->prepare('SELECT pass FROM users WHERE pseudo = :username');
		$query->bindParam(':username', $_POST["username"]);
		$query->execute();
		$result = $query->fetch();
		$hash = $result[0];

		//Nous vérifions si le mot de passe utilisé correspond bien à ce hash à l'aide de password_verify :
		$correctPassword = password_verify($_POST["password"], $hash);
		
		if($correctPassword){
			//Si oui nous accueillons l'utilisateur identifié
	        echo "Bienvenue ".$_POST["username"];
	        // on la démarre :)
	        session_start ();
	        // on enregistre les paramètres de notre visiteur comme variables de session ($login et $pwd) (notez bien que l'on utilise pas le $ pour enregistrer ces variables)
			$_SESSION['username'] = $_POST['username'];
	        $_SESSION['password'] = $_POST['password'];
	        // on redirige notre visiteur vers une page de notre section membre
			header ('location: ../index.php');

		}else{
			//Sinon nous signalons une erreur d'identifiant ou de mot de passe
			echo "login/password incorrect";
		}
	}
}

login();
?>