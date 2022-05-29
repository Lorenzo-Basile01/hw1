<?php
include "auth.php";
    
if(isset($_POST['name']) && isset($_POST['surname'])){

    $connessione = mysqli_connect("localhost", "root", "", "hw1");

    $nome = mysqli_escape_string($connessione, $_POST['name']);

    $cognome = mysqli_escape_string($connessione, $_POST['surname']);

    $risultato = array();

    $query = "SELECT * FROM cliente WHERE nome = '".$nome."' AND cognome = '".$cognome."'";

    $res = mysqli_query($connessione, $query) or die("Errore: ".mysqli_error($connessione));

    while($row = mysqli_fetch_assoc($res)){
        $query1 = "SELECT count(*) as numero_likes FROM likes WHERE idutente =".$row['id_user']."";
        $res1 = mysqli_query($connessione, $query1);
        $row1 = mysqli_fetch_assoc($res1);

        $risultato[]= array('dati' => $row,
        'n_likes' => $row1['numero_likes']);
    }
    mysqli_close($connessione);
    echo json_encode($risultato);
}

?> 