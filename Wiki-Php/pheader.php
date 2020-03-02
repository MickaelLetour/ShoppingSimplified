<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>&lt;header&gt; Balise Header </h3>
    <h4>Définition</h4>
        <p>The &lt;header&gt; element represents a container for introductory content or a set of navigational links.</p>

         <p>A &lt;header&gt; element typically contains:</p>
                    
        <ul>
        <li>one or more heading elements (&lt;h1&gt; - &lt;h6&gt;)</li>
        <li>logo or icon</li>
        <li>authorship information*</li>
        </ul>

        <p>You can have several &lt;header&gt; elements in one document.</p>
    <h4>Exemple</h4>
    <p>  
        &lt;article&gt;<br>
            &lt;header&gt;<br>
                &lt;h1&gt;Most important heading here&lt;/h1&gt;<br>
                &lt;h3&gt;Less important heading here&lt;/h3&gt;<br>
                &lt;p&gt;Some additional information here&lt;/p&gt;<br>
            &lt;/header&gt;<br>
            &lt;p&gt;Lorem Ipsum dolor set amet....&lt;/p&gt;<br>
        &lt;/article&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>