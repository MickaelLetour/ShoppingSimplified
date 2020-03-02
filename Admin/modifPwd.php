<?php

if (isset($_GET['id']) && isset($_GET['token'])){
    $idUser=$_GET['id'];
    $reset_token=$_GET['token'];
}

echo "<h1> Réinitialiser votre mot de passe </h1>

<form action='http://localhost/API/reset.php?id=$idUser&token=$reset_token' method='POST'>

<div class='form-group'>

    <label   for=''>Mot de passe </label>

    <input type='password' name='password' class='form-control'>

</div>

<div class='form-group'>

<label   for=''>Confirmation de votre mot de passe</label>

<input type='password' name='password_confirm' class='form-control'>

</div>

<button type='submit' class=' btn btn-primary'>Réinitialiser votre mot de passe </button>

</form>";
?>