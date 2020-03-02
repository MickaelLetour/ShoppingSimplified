<?php
header("Access-Control-Allow-Origin: *");
require_once "Functions/booksFunction.php";
header("Content-Type: application/json");
header("Content-Encoding: UTF-8");

if (empty($_GET)){
    $data = getBooks();
    echo json_encode($data);
}

else if (!empty($_GET['idBooks']) && is_numeric( $_GET['idBooks'])&& getBooksById($_GET['idBooks'])!==[]){
    $data = getBooksById($_GET['idBooks']);
    echo json_encode($data);
}

else if (!empty($_GET['Title']) && is_string( $_GET['Title']) && getBooksByTitle($_GET['Title'])!==[]){
    $data = getBooksByTitle($_GET['Title']);
    echo json_encode($data);
}

else if (!empty($_GET['Author']) && is_string( $_GET['Author']) && getBooksByAuthor($_GET['Author'])!==[]){
    $data = getBooksByAuthor($_GET['Author']);
    echo json_encode($data);
}

else if (!empty($_GET['Category']) && is_string( $_GET['Category']) && getBooksByCategory($_GET['Category'])!==[]){
    $data = getBooksByCategory($_GET['Category']);
    echo json_encode($data);
}
else if (!empty($_GET['column']) && !empty($_GET['keyWord']) && getBooksBy($_GET['column'], $_GET['keyWord'])!==[]){
    $data = getBooksBy($_GET['column'] , $_GET['keyWord']);
    echo json_encode($data);
}

else echo  "C'est quoi ce bordel";
