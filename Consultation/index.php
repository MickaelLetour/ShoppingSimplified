<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style/style.css">
    <!-- <script src="script.js" async></script> -->
    <script src="script/jquery-3.4.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="script/main.js" async></script>
</head>
<body>
<nav>
<h1>Bienvenue sur ConsultBooks</h1>
    <div id="switch"><a id='bordel' href="../Admin/index.php">Login</a></div>
    <h3>Recherche</h3>
    <form method="GET">

    <div class="boxChamp" id="boxTitre">
    <label for="typeSelect" class="label">Choisir le thème de recherche</label><br>
    <select id='typeSelect' class="champ" required>
    <option></option>
    <option id='1'>Livres</option>
    <option id='2'>Auteurs</option>
    </select>
    </div>

    <div class="boxChamp">
    <label for="criteres" class="label">Choisir un critère</label><br>
    <select id="criteres" class="champ" required>
    </select>
    </div>

    <div class="boxChamp">
    <label for="search" class="label">Mot clé</label><br>
    <input type="text" name="" id="search" class="champ" required>
    <div id="response"></div>
    </div>

    <input type="submit" id="submit" value="ok">
    <div id="response"><div>
    </form>
</nav>

<div id="result"></div>

</body>
</html>