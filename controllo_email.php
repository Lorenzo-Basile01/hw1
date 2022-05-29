<?php

$connessione = mysqli_connect("localhost", "root", "", "hw1");

    $email = mysqli_escape_string($connessione, $_GET['q']);

    $query = "SELECT * FROM Cliente WHERE email = '$email'";

    $res = mysqli_query($connessione, $query) or die("Errore: ".mysqli_error($connessione));

    $row = mysqli_fetch_assoc($res);
    
    if(isset($row['email'])) $risultato = true;
    else $risultato = false;

    mysqli_close($connessione);
    echo json_encode($risultato);

?>
