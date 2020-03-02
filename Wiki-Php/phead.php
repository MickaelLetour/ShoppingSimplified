<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>&lt;head&gt; Balise Head</h3>
    <h4>Définition</h4>
    
    <p>The <head> element is a container for all the head elements.</p>

    <p>The <head> element can include a title for the document, scripts, styles, meta information, and more.</p>
                    
    <p>The following elements can go inside the <head> element:</p>
                    
            <ul>
            <li>&lt;title&gt; (this element is required in an HTML document)</li>
            <li>&lt;style&gt;</li>
            <li>&lt;base&gt;</li>
            <li>&lt;link&gt;</li>
            <li>&lt;meta&gt;</li>
            <li>&lt;script&gt;</li>
            <li>&lt;noscript&gt;</li>
            </ul>
      
    <h4>Exemple</h4>
    <p>  
            &lt;!DOCTYPE html&gt;<br>
            &lt;html&gt;<br>
            &lt;head&gt;<br>
              &lt;title&gt;Title of the document&lt;/title&gt;<br>
            &lt;/head&gt;<br>
            
            &lt;body&gt;<br>
            The content of the document......<br>
            &lt;/body&gt;<br>
            
            &lt;/html&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>