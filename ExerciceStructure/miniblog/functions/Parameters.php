<?php

class Parameters{
    
    function getParameter(string $categorie, string $info){
        $parameters='IdSQL.json';
        $data=file_get_contents($parameters,true);
        $parameter= json_decode($data,true);
        return $parameter[$categorie][$info];
    }
}