<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;input&gt; Balise Entrée
    </h3>
    <h4>Définition</h4>
    
        <p>The &lt;input&gt; tag specifies an input field where the user can enter data.</p>

        <p>&lt;input&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data.</p>
            
        <p>An input field can vary in many ways, depending on the type attribute.</p>
    </p>
    <h4>Exemple :</h4>
    <p>
            &lt;form action="/action_page.php"&gt;<br>
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
