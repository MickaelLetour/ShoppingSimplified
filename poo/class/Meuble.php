<?php

class Meuble {
    private $nbDePieds;
    private $couleur;
    private $matiere;
    public function setCouleur($couleur){
$this->couleur = $couleur;
    }
    public function def(){
        echo $this->nbDePieds;
        echo "<br>";
        echo $this->couleur;
        echo "<br>";
        echo $this->matiere;
        echo "<br>";
    }
    public function __construct ($nbDePieds, $couleur ,$matiere) {
        $this->nbDePieds = $nbDePieds;
        $this->couleur = $couleur;
        $this->matiere = $matiere;
        $this->def();
    }
}
?>