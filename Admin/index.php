<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/style.css">
    <script src="script/jquery-3.4.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="script/main.js"></script>
    <title>AdminBook.com</title>
</head>
<body>

<?php

session_start();
if (isset($_SESSION['username'])){    
    echo "<header id='connected'><div id='head'>";
    $user = $_SESSION['username'];
    echo "<h3>Bienvenue $user</h3>
    <a id='disconnect' href='../API/logout.php'>Deconnection</a>
    <a id='switch' href='http://Consultation.test/index.php'>Consultation</a>
    </div>
    <div id='foot'>";
    
    
    echo "</div>
    </header>";
}
else {
    echo "<header id='disconnected'>";
    echo "<div id='head'>";
    echo "<a id='switchDis' href='http://Consultation.test/index.php'>Consultation des livres et auteurs</a>";
    echo "<h3>Connection</h3>";
    if(isset($_SESSION['token'])){
        $token = $_SESSION['token'];
        if(!empty($token)){ 
            echo "<div class='alert'>";
                echo $token;
            echo "</div>";
        }
        unset($_SESSION['token']);
    }
    echo "<form action='../API/admin.php' method='POST'>

    <label for='username'>Identifiant</label><br>
    <input type='text' id='username' name='username' minlength='6' required><br>

    <label for='password'>Mot de passe</label><br>
    <input type='password' id='password' name='password' minlength='6' required><br>
    <a id='pwdForget' href='forget.php'>mot de passe oublié</a><br>

    <input id='submit' type='submit'>

    </form>

    </div>"; 
    
    

    echo "<h3>Nouvel Admin</h3>";
    if(isset($_SESSION['errors'])){
        $errors = $_SESSION['errors'];
        if(!empty($errors)){ 
            echo "<div class='alert'>
                <p>Vous n'avez pas rempli le formulaire correctement</p>
                <ul>";
                foreach($errors as $error){
                    echo "<li> $error </li>";
                } 
                echo "</ul>
            </div>";
            unset($_SESSION['errors']);
        }
    }
    if(isset($_SESSION['errors'])){
        $errors = $_SESSION['errors'];
        if(!empty($errors)){ 
            echo "<div class='alert'>
                <p>Vous n'avez pas rempli le formulaire correctement</p>
                <ul>";
                foreach($errors as $error){
                    echo "<li> $error </li>";
                } 
                echo "</ul>
            </div>";
            unset($_SESSION['errors']);
        }
    }

   echo "<form id='register' action='../API/admin.php' method='POST'>

        <label for='userId'>Identifiant</label><br>
        <input type='text' id='userId' name='userId' minlength='6' required><br>

        <label for='password'>Mot de passe</label><br>
        <input type='password' id='password' name='password' minlength='6' required><br>

        <label for='password2'>Confirmez le mot de passe</label><br>
        <input type='password' id='password2' name='password2' minlength='6' required><br>

        <label for='email'>Email</label><br>
        <input type='email' id='email' name='email' minlength='6' required><br>

        <input id='submit' type='submit'>

    </form>
</header>";

echo "<main id='mainDisconnected'>
        <h2>Bienvenue sur Consult.books.com!!</h2>
        <p> Si vous êtes sur cette page c'est que vous êtes admin de ce site.<br>
        Pour ajouter de nouveaux livres ou auteurs, veuillez d'abord vous identifier!!</p>
    </main>";
}
?>

<?php
    if (isset($_SESSION['username'])){
?>
    <main id="mainConnected">
        <label for="chooseAction">Que voulez vous faire?</label>
            <select id="chooseAction" name="chooseAction">
                <option></option>
                <option>Ajouter un élément</option>
                <option>Modifier un élément</option>
                <option>Supprimer un élément</option>
            </select><br>
        <div id="formAction">
        </div>
    </main> 
<?php
}
?>

</body>
</html>