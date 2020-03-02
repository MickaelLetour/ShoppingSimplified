<?php

require_once "config/Connexion.php";

function getBooks(){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM books");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getBooksById(int $id){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM books Inner Join author on books.author_id = author.id inner Join category on books.category_id = category.id where books.id = {$id}");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getBooksByTitle(string $Title){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM books Inner Join author on books.author_id = author.id inner Join category on books.category_id = category.id where books.title LIKE '%{$Title}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getBooksByAuthor(string $Author){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM `author` Inner Join `books` on author.id = books.author_id Inner Join category on category.id = books.category_id WHERE lname LIKE '%{$Author}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getBooksByCategory(string $Category){
    $dbh = new Connexion();
    $stmt = $dbh->getPdo()->prepare("SELECT * FROM `category` Inner Join `books` on category.id = books.category_id Inner Join author on author.id = books.author_id WHERE name LIKE '%{$Category}%'");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getBooksBy ($column, $KeyWord){
    switch ($column){
        case "id":
            $data = getBooksById($KeyWord);
            return $data;
        break;
        case "title":
            $data = getBooksByTitle($KeyWord);
            return $data;
        break;
        case "lname":
            $data = getBooksByAuthor($KeyWord);
            return $data;
        break;
        case "name":
            $data = getBooksByCategory($KeyWord);
            return $data;
        break;
        default :
            echo "dalle";
    }
} 

?>
