<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <script src="js/javas.js" async></script>
    <title>Tables de multiplication</title>
</head>
<body> 
<div id="container">
    <div class="titre"class="card col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1>TABLES DE MULTIPLICATION</h1>
    </div>
    <main>
        <div class="titreBouton"class="card col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h2>Vous pouvez consulter 20 tables</h2>
            <form method="GET" id="formreq">
                <select name="choix" size="1" id="boutton">
                    <?php
                    for ($i=0;$i<=20;$i++){
                    echo "<option>".$i."</option>";
                    }
                    ?>
                </select> 
            </form>
        </div>
    <div id="resultats"class="card col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <h3>Voici le résultat de votre table </h3>
    <div id="tables"class="card col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
    </div>
    
</main>
</div>
</body>
</html>