<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>

<?php
require_once "Class/person.php";
require_once "Class/combat.php";

$perso1 = new Personnage("Mickael","Elf",1500,150);
$perso2 = new Personnage("Rui","Goblin",1500,150);


echo "<br>";

$combat = new Combat($perso1,$perso2);
$perso1->taper($perso2);
echo "<br>";
$perso2->taper($perso1);
echo "<br>";

?>
</html>