<?php 

if(!empty($_POST) && !empty($_POST['email'])) {

    require_once './config/Connexion.php';
    require_once './Functions/adminFunction.php';
    $email=$_POST['email'];
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare('SELECT * from users WHERE email = :email AND confirmed_at IS NOT NULL'); // le compte doit etre obligatoirement verifier pour acceder à la connexion
    $stmt->bindParam(':email',$email,PDO::PARAM_STR);
    $stmt->execute();
    $user=$stmt->fetch();
    $idUser=$user['id'];

    if ($user) { 

        session_start(); 
        $reset_token = str_random(60);
        $stmt = $dbh->getPdo()->prepare('UPDATE users SET reset_token = :reset_token, reset_at = NOW() WHERE  id=:id');
        $stmt->bindParam(':reset_token',$reset_token,PDO::PARAM_STR);
        $stmt->bindParam(':id',$idUser,PDO::PARAM_INT);
        $stmt->execute();
        mail($email,'Réinitialisation de votre mot de passe', "Afin de réinitialiser votre mot de passe merci de cliquer sur ce lien \n\nhttp://localhost/Admin/modifPwd.php?id=$idUser&token=$reset_token");
        header('Location: ../Admin/index.php');
        exit();
    } 
    else {
    }
}

?>



