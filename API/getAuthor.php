<?php

require_once "/laragon/www/API/Functions/adminFunction.php";

$data = getAuthor();
echo json_encode($data);