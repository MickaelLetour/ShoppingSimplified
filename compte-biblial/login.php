<?php 
if(!empty($_POST) && !empty($_POST['password'])) {

    require_once 'inc/db.php';
    require_once 'inc/functions.php';

    $req = $pdo->prepare('SELECT * from users WHERE (username = :username OR email = :username)  AND confirmed_at IS NOT NULL'); // le compte doit etre obligatoirement verifier pour acceder à la connexion
    $req->execute(['username' => $_POST['username']]);
    $user = $req->fetch();

    if (password_verify($_POST['password'], $user->password)) { // verifer le hash du password et le confirmed 
        session_start(); // pour avoir le deconnecter une fois que tu es co dans ma barre du haut
        $_SESSION['auth'] = $user;
        $_SESSION['flash']['success'] = 'Vous êtes maintenant connecté au site';
        header('Location: account.php');
        exit();
    } else {
        $_SESSION['flash']['danger'] = 'Identifiant ou mot de passe incorrect';
    }
}

 ?>


<?php require 'inc/header.php'; ?>

<h1> Se connecter </h1>

<form action="" method="POST">

<div class="form-group">

<label   for="">Pseudo ou email </label>

<input type="text" name="username"  class="form-control">

</div>


<div class="form-group">

<label   for="">Mot de passe <a href="forget.php">(J'ai oublié mon mot de passe)</a> </label>

<input type="password" name="password" class="form-control">

</div>

<button type="submit" class=" btn btn-primary">Se connecter </button>

</form>




<?php require 'inc/footer.php'; ?>
