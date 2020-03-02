<?php
 
require_once 'inc/functions.php'; 
session_start();

if(!empty($_POST)){


$errors=array();

require_once 'inc/db.php';

if(empty($_POST['username']) || !preg_match('/^[a-zA-Z0-9_]+$/', $_POST['username'])){

    $errors['username'] = "votre pseudo n'est pas valide (alphanumérique)";

} else {

    $req = $pdo->prepare('SELECT id from users WHERE username = ?'); 
    $req->execute([$_POST['username']]);
    $user=$req->fetch();
    if ($user){
        $errors['username'] = 'ce pseudo est déjà pris';
    }
    /* debug($user);
    die(); */
}

/* if(empty($_POST['email']) || ! filter_var($_POST, FILTER_VALIDATE_EMAIL)){

    $errors['email'] = "votre email n'est pas valide";
} */

if (isset($_POST['email'])) {
    if(empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $errors['email'] = "Votre Email n'est pas valide";
    } 
    } else {

        $req = $pdo->prepare('SELECT id from users WHERE email = ?'); 
        $req->execute([$_POST['email']]);
        $user=$req->fetch();
        if ($user){
            $errors['email'] = 'Cet email est déjà utilisé par un autre compte';
        }
        /* debug($user);
        die(); */
    }



if(empty($_POST['password']) || $_POST['password'] != $_POST['password_confirm']){

    $errors['password'] = 'votre mot de passe est erroné';
}


if(empty($errors)){

    $req= $pdo->prepare('INSERT INTO users SET username= ?, password= ?, email= ?, confirmation_token =?');
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $token= str_random(60);
    /* debug($token); // pour que le token s'affiche
    die(); */
    $req->execute([$_POST['username'], $password, $_POST['email'], $token ]);
    $user_id= $pdo->lastInsertId();
    mail($_POST['email'],'Confirmartion de votre compte', "Afin de valider votre compte merci de valider ce lien\n\nhttp://localhost/compte-biblial/confirm.php?id=$user_id&token=$token");
    $_SESSION['flash']['success'] = 'un email de confirmation vous a été envoyé pour valider votre compte';
    header('Location: login.php');
    exit();
}



/* debug($errors); */

}


?>

<?php require 'inc/header.php'; ?>

<h1>S'inscrire</h1>

<?php if(!empty($errors)): ?>
<div class="alert alert-danger">
    <p>Vous n'avez pas rempli le formulaire correctement</p>
    <ul>
    <?php foreach($errors as $error): ?>
        <li><?= $error; ?></li>
    <?php endforeach; ?>
    </ul>
</div>
    <?php endif; ?>


<form action="" method="POST">

<div class="form-group">

<label   for="">Pseudo</label>

<input type="text" name="username"  class="form-control" minlength='6' required>

</div>


<div class="form-group">

<label   for="">Email</label>

<input type="text" name="email" class="form-control">

</div>


<div class="form-group">

<label   for="">Mot de passe </label>

<input type="password" name="password" class="form-control">

</div>



<div class="form-group">

<label   for=""> Confirmer votre Mot de passe </label>

<input type="password" name="password_confirm" class="form-control">

</div>

<button type="submit" class=" btn btn-primary">M'inscrire</button>

</form>

<?php require 'inc/footer.php'; ?>