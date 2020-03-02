<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Questions Tables</title>
</head>
<body>
<?php
$reponseIA =[];
echo "<form method=\"post\" action=\"compare.php\">";
for ($i=1; $i<=10;$i++){
  $rand1 = rand(1,20);
  $rand2 = rand(1,20);
  $resultat = $rand1*$rand2;
  echo "Trouvez le résultat de".$rand1."x".$rand2."=<input type=\"number\"name=\"input$i\"><br>";
  echo "<input type=\"submit\" name=\"boutton$i\" value=\"Comparer\"><br>";
  $reponseIA[$i]=$resultat;
}
$_SESSION["rez"]=$reponseIA;
echo "</form>";
?>
</body>
</html>