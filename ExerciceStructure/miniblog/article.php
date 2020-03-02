<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
<?php
require_once 'functions/functions.php';

include("header.php");

if (isset($_GET["id"])) {
    $id=$_GET["id"];
    $article = getArticle ();
    $comment = getComment();
    foreach ($article as $data){
        echo "<h1 id='titleArticle'>".$data[1]."</h1><br>";
        echo "<p>".$data[2]."<p><br><br>";
        echo "<strong><p>".$data[3]."</p></strong><br>";
        echo "<hr><br>";
        viewComment($comment);
    }
}
else {
    header("Location:index.php");
}	

?>
<hr id="hrForm"><br>
<form id="formComment" action="functions/data.php" method="post">

                <h2>Laissez un commentaire</h2>
		
				<label for="case">Pseudo :</label><br>
				<input id="case" type="text" name="userName" class="caseForm"><br><br>
			
		
				<label for= "mail">Email :</label><br>
				<input id="mail" type="email" name= "userMail" class="caseForm"><br><br>
			
		
				<label for= "msg">Message :</label><br>
                <textarea id="msg" name="userMsg" class="caseForm"></textarea><br><br><br>
                
                <?php echo "<input type='hidden' name='id' value='".$id."'>"?>
			
			
				<input type="submit" value="Envoyer" class="submit">
			
                </form>
                
                <?php
                include("footer.php");
                ?>