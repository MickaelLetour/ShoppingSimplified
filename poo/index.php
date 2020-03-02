<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<?php
include "class/Meuble.php";
$tabouret = new Meuble(3,"wood","brown");
$commode = new Meuble(4,"wood","brown");
$tabouret->setCouleur("vert");
$tabouret->def();
?>

</body>
</html>