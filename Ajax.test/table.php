<?php
if (isset($_GET["choix"])) {
    $n=$_GET["choix"];
    table($n);
}
function table($n) {
    $n = $_GET["choix"];
    if ($n>0){
        for ($i=1; $i<=20; $i++)
        echo $i."x".$n."=".($i*$n)."<br>";
        }
}
?>



