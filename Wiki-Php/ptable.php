<?php
include("header.php");
?>
    <div class="menu">
    <?php
    include("nav.php");
    ?>
<main>
    <h3>
        &lt;Table&gt;&lt;tbody&gt; &lt;tfoot&gt; &lt;tr&gt; &lt;td&gt; &lt;th&gt; Balise de tableau
    </h3>
    <h4>Définition</h4>
    
        <p>The &lt;table&gt; tag defines an HTML table.</p>

        <p>An HTML table consists of the &lt;table&gt; element and one or more &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements.</p>
                    
        <p>The &lt;tr&gt; element defines a table row, the &lt;th&gt; element defines a table header, and the &lt;td&gt; element defines a table cell.</p>
                    
        <p>A more complex HTML table may also include &lt;caption&gt;, &lt;col&gt;, &lt;colgroup&gt;, &lt;thead&gt;, &lt;tfoot&gt;, and &lt;tbody&gt; elements.</p>
    
    <h4>Exemple</h4>
    <p>
            &lt;table&gt;<br>
                    &lt;tbody&gt;&lt;tr&gt;<br>
                      &lt;th&gt;Month&lt;/th&gt;<br>
                      &lt;th&gt;Savings&lt;/th&gt;<br>
                    &lt;/tr&gt;<br>
                    &lt;/tbody&gt;<br>
                    &lt;tfoot&gt;<br>
                    &lt;tr&gt;<br>
                      &lt;td&gt;January&lt;/td&gt;<br>
                      &lt;td&gt;$100&lt;/td&gt;<br>
                    &lt;/tr&gt;<br>
                    &lt;/tfoot&gt;<br>
                  &lt;/table&gt;
    </p>       
</main>
</div>
<?php
include("footer.php");
?>