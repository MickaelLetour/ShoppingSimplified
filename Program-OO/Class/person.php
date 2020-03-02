<?php

class Personnage {

    function __construct($nom,$sexe,$HP,$power)
    {
        $this->nom=$nom;
        $this->sexe=$sexe;
        $this->HP=$HP;
        $this->power=$power;
        
        $this->presentChar();

    }

    public function getNom() {
        return $this->nom;
    }

    public function setNom($nom) {
        $this->nom = $nom;
    }

    public function setSexe($sexe) {
        $this->sexe = $sexe;
    }

    public function setHP($HP) {
        $this->HP = $HP;
    }

    public function setPower($power) {
        $this->power = $power;
    }

    /**
     * Present character
     * 
     * @author Mickael
     * @this instance of personnage
     *
     * @return string, HTML code
     */
    public function presentChar() {
        echo "My fucking name is $this->nom";
        echo "<br>";
        echo "I am a $this->sexe";
        echo "<br>";
        echo "I have $this->HP HP and $this->power of power<br>";
        echo "<br>";
    }
     
    public function taper(Personnage $personnage){
        echo "$this->nom attack $personnage->nom <br>";
        $personnage->perteHP($this->power);
        echo "$personnage->nom lost $this->power Hp. He still has $personnage->HP Hp!";
    }
    
    public function perteHP ($HP){
        $this->HP -= $HP;
    }
}

?>