<?php
include("header.php");

require_once 'functions/functions.php';

$articles = getArticles ();

echo "<div id='box'>";
echo "<form id='formArticle' method='GET' action='article.php'>";
foreach ($articles as $titre){
    echo "<div class='boxLink'><a href='article.php?id=$titre[0]'>$titre[1].</a></div>";
}
echo "</form>";
echo "</div>";


if (isset($_SESSION['username']) && isset($_SESSION['password'])) {
    
    ?>
    <hr id="hrForm"><br>
    <form id="formComment" action="functions/setarticle.php" method="post">

        <h2>Ajouter un article</h2>

		<label for="title">Titre :</label><br>
		<input id="title" type="text" name="title" class="caseForm"><br><br>
	

		<label for= "content">Contenu :</label><br>
		<textarea id="content" type="email" name= "content" class="caseForm"></textarea><br><br>
        
        <?php echo "<input type='hidden' name='id' value='".$compte."'>"?>
	
	
		<input type="submit" value="Envoyer" class="submit">
	
    </form>
    <?php
}

include("footer.php");
?>
