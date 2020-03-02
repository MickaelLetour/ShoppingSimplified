<?php 
session_start();

unset($_SESSION['auth']);
$_SESSION['flash']['succes'] = "Vous êtes maintenant déconnecté";
header('Location: login.php'); 
?>
<form action="" method="POST">

<div class="form-group">

<label   for="">Pseudo</label>

<input type="text" name="username"  class="form-control">

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
