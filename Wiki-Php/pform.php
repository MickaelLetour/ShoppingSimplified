<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>&lt;form&gt; Balise Formulaire</h3>
    <h4>Définition</h4>
    <p>La balise &lt;form&gt; est utilisée pour créer un formulaire HTML pour une entrée utilisateur.</p>

    <p>L'élément &lt;form&gt; peut contenir un ou plusieurs des éléments de formulaire suivants:</p>
                    
                <ul>
                    <li>&lt;input&gt;</li>
                    <li>&lt;textarea&gt;</li>
                    <li>&lt;button&gt;</li>
                    <li>&lt;select&gt;</li>
                    <li>&lt;option&gt;</li>
                    <li>&lt;optgroup&gt;</li>
                    <li>&lt;fieldset&gt;</li>
                    <li>&lt;label&gt;</li>
                    <li>&lt;output&gt;</li>
                </ul>

    <h4>Exemple</h4>
    <p>  
            &lt;form action="/action_page.php" method="get"&gt;<br>
                First name: &lt;input type="text" name="fname"&gt;<br>
                Last name: &lt;input type="text" name="lname"&gt;<br>
                &lt;input type="submit" value="Submit"&gt;<br>
            &lt;/form&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>