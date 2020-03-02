<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;nav&gt; Balise nav
    </h3>
    <h4>Définition</h4>

        <p>The &lt;nav&lt; tag defines a set of navigation links.</p>

        <p> Notice that NOT all links of a document should be inside a &lt;nav&lt; element. The &lt;nav&lt; element is intended only for major      block of navigation links.</p>
                    
        <p>Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.</p>

    <h4>Exemple :</h4>
    <p>
                    &lt;nav&gt;<br>
                    &lt;a href="/html/"&gt;HTML</a><br> 
                    &lt;a href="/css/"&gt;CSS</a><br> 
                    &lt;a href="/js/"&gt;JavaScript</a><br> 
                    &lt;a href="/jquery/"&gt;jQuery</a><br>
                    &lt;/nav&gt;
    </p>      
</main>
</div>
<?php
include("footer.php");
?>