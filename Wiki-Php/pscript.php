<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;script&gt; Balise script
    </h3>
    <h4>Définition</h4>
    
        <p>The &lt;script&gt; tag is used to define a client-side script (JavaScript).</p>

        <p>The &lt;script&gt; element either contains scripting statements, or it points to an external script file through the src attribute.</p>
                    
        <p>Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.</p>

    <h4>Exemple</h4>
    <p>
            &lt;script&gt;document.getElementById("demo").innerHTML = "Hello JavaScript!";
            &lt;/script&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>