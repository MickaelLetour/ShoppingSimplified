<?php

if (isset($_GET['id']) && isset($_GET['token'])){
    require_once "./config/Connexion.php";    
    require_once "./Functions/adminFunction.php"; 
    $id=$_GET['id'];
    $token=$_GET['token'];
    $dbh = new Connexion();
    $stmt = $dbh->getpdo()->prepare('SELECT * FROM users WHERE id = :id AND reset_token = :token AND reset_at > DATE_SUB(NOW(), INTERVAL 5 MINUTE)');
    $stmt->bindParam(':id',$id,PDO::PARAM_INT);
    $stmt->bindParam(':token',$token,PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch();
    $username = $user['username'];
    if($user){
        debug($user);
        if(!empty($_POST)){
            if(!empty($_POST['password']) && $_POST['password'] == $_POST['password_confirm']){
                $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
                $stmt = $dbh->getpdo()->prepare('UPDATE users SET password = :password, reset_at = NULL');
                $stmt->bindParam(':password',$password,PDO::PARAM_STR);
                $stmt->execute();   
                session_start();
                $_SESSION["pwdModif"]="Votre mot de passe a bien été modifié";
                header('location: ../Admin/index.php');
                exit();
            }
            session_start();
            $_SESSION["pwdModif"]="Votre mot de passe est erroné";
            header('location: ../Admin/index.php');
            exit();
        }
    } 
    else {
        session_start();
        $_SESSION["pwdModif"]="Votre lien n'est plus valide";
        header('location: ../Admin/index.php');
        exit();
    }

} 
else {
    session_start();
    $_SESSION["pwdModif"]="Votre session a expiré";
    header('location: ../Admin/index.php');
    exit();
}

?>






