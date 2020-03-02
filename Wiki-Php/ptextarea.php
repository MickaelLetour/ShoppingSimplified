<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;textarea&gt; Balise TextArea
    </h3>
    <h4>Définition</h4>
    
        <p>The &lt;textarea&gt; tag defines a multi-line text input control.</p>

        <p>A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).</p>
                    
        <p>The size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties.</p>
    
    <h4>Exemple</h4>
    <p>
            &lt;textarea rows="4" cols="50"&gt;<br>
            At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.<br>
            &lt;/textarea&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>