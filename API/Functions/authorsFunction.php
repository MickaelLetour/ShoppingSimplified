<?php

require_once "config/Connexion.php";

function getAuthor(){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT author.id,author.fname,author.lname,country.name FROM author");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthorById(int $id){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT DISTINCT author.id,author.fname,author.lname,country.name FROM author Inner Join country on author.country_id = country.id where author.id = {$id}");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthorByLastName(string $lastName){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT DISTINCT author.id,author.fname,author.lname,country.name FROM author Inner Join country on author.country_id = country.id where author.lname LIKE '%{$lastName}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthorByFirtsName(string $firstName){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT DISTINCT author.id,author.fname,author.lname,country.name FROM author Inner Join country on author.country_id = country.id where fname LIKE '%{$firstName}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthorByName(string $firstName, string $lastName){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT author.id,author.fname,author.lname,country.name FROM author where fname LIKE '%{$firstName}%' AND lname LIKE '%{$lastName}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthorByCountry(string $country){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT DISTINCT author.id,author.fname,author.lname,country.name FROM author Inner Join country on author.country_id = country.id where country.name LIKE '%{$country}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getAuthorBy ($column, $KeyWord){
    switch ($column){
        case "id":
            $data = getAuthorById($KeyWord);
            return $data;
        break;
        case "lname":
            $data = getAuthorByLastName($KeyWord);
            return $data;
        break;
        case "fname":
            $data = getAuthorByFirtsName($KeyWord);
            return $data;
        break;
        case "country":
            $data = getAuthorByCountry($KeyWord);
            return $data;
        break;
        default :
            echo "dalle";
    }
} 

?>
