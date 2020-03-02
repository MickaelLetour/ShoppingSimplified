<?php

class Connexion{

    private $file; // the file who content information
    private $data; // the content of this file
    private $pdo; // the pdo connexion to output

     /* This CONST are hydrated by params stored in the $file */
    private $DB_USER; // user name
    private $DB_PASSWORD; // password of the database
    private $DB_NAME; // Name of the database
    private $DB_HOST; // host of the database 

    /**
     * Connexion constructor
     */
    public function __construct(){

        $this->file = "/laragon/www/API/config/config.json"; 
        $this->data = json_decode(file_get_contents($this->file));

        $this->DB_USER = $this->data->database->user;
        $this->DB_PASSWORD = $this->data->database->password;
        $this->DB_NAME = $this->data->database->dbName;
        $this->DB_HOST = $this->data->database->host;

        try {
            $connexion = new PDO("mysql:host={$this->DB_HOST};dbname={$this->DB_NAME};charset=UTF8",$this->DB_USER,$this->DB_PASSWORD);
            $connexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            error_log("PDO est instancié");
            $this->pdo = $connexion;

        } catch (PDOException $exception) {
            error_log("PDO non instancié : {$exception}");
        }
    }

    /**
     * @return PDO
     */
    public function getPdo(): PDO {
        return $this->pdo;
    } 

}


?>
