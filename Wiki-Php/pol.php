<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;ol&gt; Balise Liste non ordonnée
    </h3>
    <h4>Définition</h4>
    <p>
            The &lt;ol&gt; tag defines an ordered list. An ordered list can be numerical or alphabetical.</p>

            <p>Use the &lt;li&gt; tag to define list items.</p>
    
    <h4>Exemple :</h4>
    <p>
            &lt;ol&gt;<br>
                    &lt;li&gt;Coffee&lt;/li&gt;<br>
                    &lt;li&gt;Tea&lt;/li&gt;<br>
                    &lt;li&gt;Milk&lt;/li&gt;<br>
                  &lt;/ol&gt;<br>
                  
                  &lt;ol start="50"&gt;<br>
                    &lt;li&gt;Coffee&lt;/li&gt;<br>
                    &lt;li&gt;Tea&lt;/li&gt;<br>
                    &lt;li&gt;Milk&lt;/li&gt;<br>
                  &lt;/ol&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>