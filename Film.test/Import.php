<?php
define( 'DB_NAME', 'BaseFilms' );
define( 'DB_USER', "root");
define( 'DB_PASSWORD','1312');
define( 'DB_HOST', 'localhost' );
define( 'DB_Films', 'Films');
define( 'DB_Genre', 'Genre');
define( 'DB_Critiques', 'Critiques');
define( 'DB_Fonction', 'Fonction');
define( 'DB_Personnes', 'Personnes');
define( 'DB_Pays', 'Pays');
define( 'DB_Film_Pers','Film_Pers');
define( 'DB_Film_Genre','Film_Genre');
try
{
$connexion = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
 }
  catch (Exception $e)
 {
 die ("Erreur:".$e->getmessage());
 } 
/* $sql = "SELECT * FROM Pays";
foreach ($connexion->query($sql)as $row) {
     if (($handle = fopen("personnes2.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            if ($row['pays'] == $data[2]) {
                $insert = "INSERT INTO Personnes (Nationalite, nom, prenom) VALUES ('".$row['id']."','".$data[0]."','".$data[1]."')";
                $connexion->exec($insert);
            }
        }
    fclose($handle);
    } 
    
    if (($handle1 = fopen("film3.csv", "r")) !== FALSE) {
        while (($data1 = fgetcsv($handle1, 1000, ";")) !== FALSE) {
            if ($row['pays'] == $data1[2]) {
               $insert1 = "INSERT INTO Films (title, created, pegi, Origine,) VALUES ('".$data1[0]."','".$data1[1]."','".$data1[3]."','".$row['id']."')";
                $connexion->exec($insert1);
            }
        }
    fclose($handle1);
    }
} 
$sql1 = "SELECT * FROM Films";
foreach ($connexion->query($sql1)as $row1) {
    if (($handle2 = fopen("cricom.csv", "r")) !== FALSE) {
        while (($data2 = fgetcsv($handle2, 1000, ";")) !== FALSE) {
        $data2[2] = htmlentities( $data2[2], ENT_NOQUOTES, 'utf-8' );
        $data2[2] = preg_replace( '#&([A-za-z])(?:acute|cedil|caron|circ|grave|orn|ring|slash|th|tilde|uml);#', '\1', $data2[2] );
        $data2[2] = preg_replace('/([^.a-z0-9]+)/i', ' ', $data2[2]);
            if ($row1['title'] == $data2[1]) {
                $insert2 = "INSERT INTO Critiques (note, commentaires, film_id) VALUES ('".$data2[0]."','".$data2[2]."','".$row1["id"]."')";
                $connexion->exec($insert2);
                echo $row1["id"];
            }
        }
    fclose($handle2);
    }
} 
/*
$sql2 = "SELECT * FROM Films";
$sql3 = "SELECT * FROM Genre";
foreach ($connexion->query($sql2)as $row2) {
    if (($handle3 = fopen("Film_Genre.csv", "r")) !== FALSE) {
        while (($data3 = fgetcsv($handle3, 1000, ";")) !== FALSE) {
        $data3[0] = htmlentities( $data3[0], ENT_NOQUOTES, 'utf-8' );
        $data3[0] = preg_replace( '#&([A-za-z])(?:acute|cedil|caron|circ|grave|orn|ring|slash|th|tilde|uml);#', '\1', $data3[0] );
        $data3[0] = preg_replace('/([^.a-z0-9]+)/i', ' ', $data3[0]);
        $data3[1] = htmlentities( $data3[1], ENT_NOQUOTES, 'utf-8' );
        $data3[1] = preg_replace( '#&([A-za-z])(?:acute|cedil|caron|circ|grave|orn|ring|slash|th|tilde|uml);#', '\1', $data3[1] );
        $data3[1] = preg_replace('/([^.a-z0-9]+)/i', ' ', $data3[1]);
            if ($row2['title'] == $data3[0]) {   
                foreach ($connexion->query($sql3)as $row3) {
                    if ($row3['type'] == $data3[1]) {
                        $insert4 = "INSERT INTO Film_Genre (genre_id,film_id) VALUES ('".$row3["id"]."','".$row2["id"]."')";
                        $connexion->exec($insert4);
                    } 
                } 
            }
        }
        fclose($handle3);
    }
} 
$sql7 = "SELECT * FROM Pays";
$sql4 = "SELECT * FROM Films";
$sql5 = "SELECT * FROM Personnes";
$sql6 = "SELECT * FROM Fonction";
foreach ($connexion->query($sql4)as $row4) {
    if (($handle4 = fopen("personnesfilms.csv", "r")) !== FALSE) {
        while (($data4 = fgetcsv($handle4, 1000, ";")) !== FALSE) {
            if ($row4['title'] == $data4[0]) {   
                foreach ($connexion->query($sql5)as $row5) {
                        if (($row5['nom'] == $data4 [2]) &&($row5['prenom'] == $data4 [1])) {
                            foreach ($connexion->query($sql6)as $row6) {
                                if ($row6['nom'] == $data4[3]) {
                                    foreach ($connexion->query($sql7)as $row7) {
                                        if ($row7['pays'] == $data4[4]) {
                                        $insert5 = "INSERT INTO Film_Pers (film_id,personnes_id,fonction_id,Nationalite) VALUES ('".$row4["id"]."','".$row5["id"]."','".$row6["id"]."','".$row7["id"]."')";
                                        $connexion->exec($insert5);
                                        }
                                    }
                                }
                            }
                        }
                }
            }
        } 
    fclose($handle4);
    }
} /*
$sql = "SELECT * FROM Films";
foreach ($connexion->query($sql)as $row) {
   if (($handle1 = fopen("film3.csv", "r")) !== FALSE) {
       while (($data1 = fgetcsv($handle1, 1000, ";")) !== FALSE) {
           if ($row['title'] == $data1[0]) {
            $update = "UPDATE Films Set lienImage = ('".$data1[4]."')
            where title = '".$row['title']."'";
            $connexion->exec($update);
           }  
       }
   fclose($handle1);
   }
} 

$sql = "SELECT * FROM Films";
foreach ($connexion->query($sql)as $row) {
   if (($handle1 = fopen("film_1.csv", "r")) !== FALSE) {
       while (($data1 = fgetcsv($handle1, 1000, ";")) !== FALSE) {
           echo $data1[5];
           if ($row['title'] == $data1[1]) {
            $update = "UPDATE Films Set synopsis = ('".$data1[5]."')
            where title = '".$row['title']."'";
            $connexion->exec($update);
           }  
       }
   fclose($handle1);
   }
} */
?>