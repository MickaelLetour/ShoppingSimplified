<?php
require_once "Parameters.php";

class Connexion{

    public function DBCreate(){
        $params=new Parameters();
        $DB_ROOTUSER=$params->getParameter('root','id');
        $DB_ROOTPASSWORD=$params->getParameter('root','password');
        $DB_NAME=$params->getParameter('root','dbName');
        $DB_HOST=$params->getParameter('root','serveur');
        $DB_USER=$params->getParameter('MasterUser','id');
        $DB_PASSWORD=$params->getParameter('MasterUser','password');


        try {
           
            $dbh=new PDO("mysql:host=$DB_HOST", $DB_ROOTUSER, $DB_ROOTPASSWORD); 
            $dbh ->exec("CREATE DATABASE IF NOT EXISTS `$DB_NAME` DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_unicode_ci;
            CREATE USER IF NOT EXISTS `$DB_USER`@`$DB_HOST` IDENTIFIED BY '$DB_PASSWORD';
            GRANT ALL PRIVILEGES ON `$DB_NAME`.* TO `$DB_USER`@`$DB_HOST` ;
            FLUSH PRIVILEGES;
            SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));");
        } catch (PDOException $exception) {
            die("Connexion Error ${exception}");
        }
    }

    public function PDOInit(){
        $params=new Parameters();
        $DB_USER=$params->getParameter('MasterUser','id');
        $DB_PASSWORD=$params->getParameter('MasterUser','password');
        $DB_NAME=$params->getParameter('MasterUser','dbName');
        $DB_HOST=$params->getParameter('MasterUser','serveur');

        try {
            $dbh=new PDO("mysql:host={$DB_HOST};dbname={$DB_NAME}",$DB_USER,$DB_PASSWORD,array(PDO::  MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
            return $dbh;
        } catch (PDOException $exception) {
            die("Connexion Error ${exception}");
        }
    }

    public function sendRequest(string $request){
        $connexion= $this->PDOInit();
        $connexion->prepare($request)->execute();
    }
}
