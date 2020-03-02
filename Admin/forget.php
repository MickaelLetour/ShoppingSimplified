<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1> Mot de passe oublié </h1>

    <?php
    session_start();
    if (isset($_SESSION['flash'])){
        foreach($_SESSION['flash'] as $type =>$message){ 

            echo "<div class='alert'-$type>";
      
            echo $message; 
      
            echo "</div>";
        }

    unset($_SESSION['flash']);
    }
    ?>

    <form action="../API/passChange.php" method="POST">

        <div class="">

            <label  for="">email </label>

            <input type="email" name="email"  class="">

        </div>

        <button type="submit" class="">Valider </button>

    </form>


    

</body>
</html>
