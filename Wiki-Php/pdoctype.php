<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;!doctype&gt; Balise declaration HTML
    </h3>
    <h4>Définition</h4>
    <p>
            La déclaration &lt;!DOCTYPE&gt; doit être la toute première chose dans votre document HTML, avant la balise <html>.

                    La déclaration &lt;!DOCTYPE&gt; n'est pas une balise HTML; Il s'agit d'une instruction destinée au navigateur Web sur la version de HTML dans laquelle la page est écrite.
                    
                    En HTML 4.01, la déclaration <! DOCTYPE> fait référence à une DTD, car HTML 4.01 était basé sur SGML. La DTD spécifie les règles du langage de balisage afin que les navigateurs rendent le contenu correctement.
                    
                    HTML5 n'est pas basé sur SGML et ne nécessite donc pas de référence à une DTD.
                    
                    Conseil: Ajoutez toujours la déclaration &lt;!DOCTYPE&gt; à vos documents HTML afin que le navigateur sache à quel type de document s'attendre.
    <h4>Exemple</h4>
    <p>
            &lt;!DOCTYPE html&gt;<br>
            &lt;html&gt;<br>
            &lt;head&gt;<br>
            &lt;title>Title of the document&lt;/title&gt;<br>
            &lt;/head&gt;<br>
            
            &lt;body&gt;
            The content of the document......
            &lt;/body&gt;<br>
            
            &lt;/html&gt;
    </p>      
</main>
</div>
<?php
include("footer.php");
?>