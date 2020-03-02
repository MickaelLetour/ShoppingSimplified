<?php
require_once "person.php";

class Combat {
    private $perso1;
    private $perso2;

    function __construct(Personnage $perso1, Personnage $perso2)
    {
        $this->perso1 = $perso1;
        $this->perso2 = $perso2;

        echo "<br>";
        echo "The fight Begins ! <br>";
        echo $perso1->getNom() . "<br>";
        echo "VS <br>";
        echo $perso2->getNom() . "<br>";
        echo "--------------------------<br>";

    }
}










?>