<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;article&gt; Balise Article
    </h3>
    <h4>Définition</h4>
    <p>
            La balise &lt;article&gt; spécifie un contenu indépendant et autonome<br>
            Un article doit avoir un sens en lui-même et il devrait être possible de le distribuer indépendamment du reste du site.
    </p>
            
    <p>  
            Sources potentielles pour l'élément &lt;article&gt;:
    </p>
        <ul>
            <li>Message du forum</li>
            <li>Article de blog</li>
            <li>Nouvelles histoires</li>
            <li>Commentaire</li>
        </ul>
    </p>

    <h4>Exemple</h4>
    <p>
        &lt;article&gt;<br>
            &lt;h1&gt;Google Chrome&lt;/h1&gt;<br>
            &lt;p&gt;Google Chrome is a free, open-source web browser developed by Google, released in 2008. &lt;/p&gt;<br>
        &lt;/article&gt;
    </p>      
    </main>
</div>
<?php
include("footer.php");
?>