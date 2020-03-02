<?php
require_once "../functions/connexion.php";

$dbh=new Connexion();
$dbh->DBCreate();


$dbh->sendRequest("CREATE TABLE IF NOT EXISTS users(
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    pseudo TEXT,
    pass TEXT)");
    
$dbh->sendRequest("CREATE TABLE IF NOT EXISTS article(
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    title TEXT,
    content TEXT,
    dateCreation DATE,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users(id))");


$dbh->sendRequest("CREATE TABLE IF NOT EXISTS comment(
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    pseudo TEXT,
    content TEXT,
    dateCreation DATE,
    id_article INTEGER,
    FOREIGN KEY (id_article) REFERENCES article(id))");
