<?php 
if(!empty($_POST) && !empty($_POST['email'])) {
$email=$_POST['email'];
    require_once 'inc/db.php';
    require_once 'inc/functions.php';

    $req = $pdo->prepare('SELECT * from users WHERE email = :email AND confirmed_at IS NOT NULL'); // le cimpte doit etre obligatoirement verifier pour acceder à la connexion
    $req->bindParam(':email',$email);
    $req->execute();
    $user = $req->fetch();
    $id = $user->id;
    if ($user) { 

        session_start(); // 
        $reset_token = str_random(60);
        $pdo->prepare('UPDATE users SET reset_token =?, reset_at = NOW() WHERE  id=?')->execute($reset_token,$id);
        $_SESSION['flash']['success'] = " Les insctructions pour recuperer votre mot de passe vous ont été envoyées par email";
        mail($_POST['email'],'Réinitialisation de votre mot de passe', "Afin de réinitialiser votre mot de passe merci de cliquer sur ce lien \n\nhttp://localhost/compte-biblial/reset.php?id=$id&token=$reset_token");
        header('Location: login.php');
        exit();
    } else {
        $_SESSION['flash']['danger'] = 'Aucun compte ne correspond à cette adresse';
    }
}

 ?>

<?php require 'inc/header.php'; ?>

<h1> Mot de passe oublié </h1>

<form action="" method="POST">

<div class="form-group">

    <label  for="">email </label>

    <input type="email" name="email"  class="form-control">

</div>

<button type="submit" class=" btn btn-primary">Se connecter </button>

</form>




<?php require 'inc/footer.php'; ?>
