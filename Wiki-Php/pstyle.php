<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>&lt;style&gt; Balise Style</h3>
    <h4>Définition</h4>
    <p>
        The &lt;style&gt; tag is used to define style information for an HTML document. </p>  

        <p>Inside the &lt;style&gt; element you specify how HTML elements should render in a browser.</p>
                    
        <p>Each HTML document can contain multiple &lt;style&gt; tags.</p>
    
    <h4>Exemple</h4>
    <p>  
            &lt;html&gt;<br>
            &lt;head&gt;<br>
            &lt;style&gt;<br>
                   h1 {color:red;}<br>
                   p {color:blue;}<br>
            &lt;/style&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
                   
            &lt;h1&gt;A heading&lt;/h1&gt;<br>
            &lt;p&gt;A paragraph.&lt;/p&gt;<br>
                  
            &lt;/body&gt;<br>
            &lt;/html&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>