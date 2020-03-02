<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;select&gt; Balise select
    </h3>
    <h4>Définition</h4>
    <p>
    The &lt;select&gt; element is used to create a drop-down list.</p>

   <p> The &lt;option&gt; tags inside the &lt;select&gt; element define the available options in the list.</p>

    <h4>Exemple</h4>
    <p>
            &lt;select&gt;<br>
            &lt;option value="volvo"&gt;Volvo&gt;/option&gt;<br>
            &lt;option value="saab"&gt;Saab&gt;/option&gt;<br>
            &lt;option value="mercedes"&gt;Mercedes&gt;/option&gt;<br>
            &lt;option value="audi"&gt;Audi&gt;/option&gt;<br>
            &lt;/select&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>