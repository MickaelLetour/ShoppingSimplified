<?php
include("header.php");
?>

<div class="boxLog">
<h2>Enregistrement</h2>

<form class="formLog" action="functions/register.php" method="POST">
	<label>Identifiant :</label><br>
    <input id="input" class="champC" type="text" name="username" value="<?php if (isset($_POST['pseudo'])) echo htmlentities(trim($_POST['pseudo'])); ?>"required /><br/>
    
	<label>Mot de passe :</label><br>
    <input id="input" class="champC" type="password" name="password" value="<?php if (isset($_POST['mdp'])) echo htmlentities(trim($_POST['mdp']));?>"required /><br/>
    
	<label>Retapez mot de passe :</label><br>
    <input id="input" class="champC" type="password" name="password2" required /><br>
    
    <input class="buttonCQ" type="submit" />
    
</form>
</div>

<div class="boxLog">
<h2>Connexion</h2>
<form class="formLog" action="functions/login.php" method="POST">

    <label>Identifiant :</label><br>
    <input id="input" class="champC" type="text" name="username" require><br>

    <label>Mot de passe :</label><br>
    <input id="input" class="champC" type="password" name="password" require><br>

    <input class="buttonCQ" type="submit">

</form>
</div>        

<?php
include("footer.php");
?>