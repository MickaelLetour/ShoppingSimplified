<?php
header("Access-Control-Allow-Origin: *");

require_once "Functions/authorsFunction.php";
header("Content-Type: application/json");
header("Content-Encoding: UTF-8");

if (empty($_GET)){
    $data = getAuthor();
    echo json_encode($data);
}

else if (!empty($_GET['idAuthor']) && is_numeric( $_GET['idAuthor']) && getAuthorById($_GET['idAuthor'])!==[]){
    $data = getAuthorById($_GET['idAuthor']);
    echo json_encode($data);
}

else if (!empty($_GET['lname']) && is_string( $_GET['lname']) && getAuthorByLastName($_GET['lname']) !==[]){
    $data = getAuthorByLastName($_GET['lname']);
    echo json_encode($data);
}

else if (!empty($_GET['fname']) && is_string( $_GET['fname']) && getAuthorbyFirtsName($_GET['fname']) !==[]){
    $data = getAuthorByFirtsName($_GET['fname']);
    echo json_encode($data);
}

else if (!empty($_GET['fname']) && is_string( $_GET['fname']) && getAuthorByName($_GET['fname'],$_GET['lname'])!==[] && !empty($_GET['lname']) && is_string( $_GET['lname'])){
    $data = getAuthorByName($_GET['fname'] , $_GET['lname']);
    echo json_encode($data);
}

else if (!empty($_GET['country']) && is_string( $_GET['country']) && getAuthorByCountry($_GET['country'])!==[] ){
    $data = getAuthorByCountry($_GET['country']);
    echo json_encode($data);
}

else if (!empty($_GET['column']) && !empty($_GET['keyWord']) && getAuthorBy($_GET['column'],$_GET['keyWord'])!==[] ){
    $data = getAuthorBy($_GET['column'] , $_GET['keyWord']);
    echo json_encode($data);
}

else echo "C'est quoi ce bordel";


