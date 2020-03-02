<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;meta&gt; Balise Meta
    </h3>
    <h4>Définition</h4>

            <p>Metadata is data (information) about data.</p>

            <p>The &lt;meta&gt; tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.</p>
            
            <p>Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata.</p>
            
            <p>The metadata can be used by browsers (how to display content or reload page), search engines (keywords), or other web services.</p>
            
            <p>HTML5 introduced a method to let web designers take control over the viewport (the user's visible area of a web page), through the  &lt;meta&gt; tag (See "Setting The Viewport" example below).</p>
            
    <h4>Exemple :</h4>
    <p>
            &lt;head&gt;<br>
                    &lt;meta charset="UTF-8"&gt;<br>
                    &lt;meta name="description" content="Free Web tutorials"&gt;<br>
                    &lt;meta name="keywords" content="HTML,CSS,XML,JavaScript"&gt;<br>
                    &lt;meta name="author" content="John Doe"&gt;<br>
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br>
                  &lt;/head&gt;
    </p>      
</main>
</div>
<?php
include("footer.php");
?>