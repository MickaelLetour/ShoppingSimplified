<?php
session_start();
for ($i=1;$i<=10;$i++){
    if (isset($_POST["boutton$i"]) && $_POST["boutton$i"]=="Comparer"){
        if($_SESSION["rez"][$i]==$_POST["input$i"]){
           echo "ok <br>";
        }
        else {
         echo "pas bon <br>";
         echo $_SESSION["rez"]["$i"]."<br>";
        }
    }
}
?>