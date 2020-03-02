<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;footeer&gt; Balise footer
        </h3>
        <h4>Définition</h4>
        <p>La balise &lt;footer&gt; définit un pied de page pour un document ou une section.</p>
        
        <p> Un élément &lt;footer&gt; doit contenir des informations sur son élément conteneur.</p>
              
        <p>Un élément &lt;footer&gt; contient généralement:</p>
                
       <ul> <li>informations d'auteur</li>
            <li>Informations sur le droit d'auteur</li>
            <li>Informations de contact</li>
            <li>plan du site</li>
            <li>haut de page liens</li>
            <li>documents connexes</li>
            <li>Vous pouvez avoir plusieurs éléments &lt;footer&gt; dans un même document</li>
        </ul>.
        <h4>Exemple</h4>
        <p>
            &lt;footer><br>
                &lt;p&gt;Posted by: Hege Refsnes&lt;/p&gt;<br>
                &lt;p&gt;Contact information: &lt;a href="mailto:someone@example.com"&gt;someone@example.com&lt;/a&gt;.&lt;/p&gt;<br>
            &lt;/footer&gt;
        </p>       
</main>
</div>
<?php
include("footer.php");
?>