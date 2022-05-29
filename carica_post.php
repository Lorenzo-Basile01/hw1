
<?php
    include "auth.php";


    $db = "hw1";
    $conn = mysqli_connect("localhost","root","",$db);

    $link = mysqli_real_escape_string($conn,$_GET['link']);
    $descr = mysqli_real_escape_string($conn,$_GET['descrizione']);
    $id = checkAuthId();

    $query = "INSERT INTO posts(cliente, nlikes, content) VALUES('$id',0, JSON_OBJECT('url','$link','descrizione','$descr'))";
    mysqli_query($conn,$query);
    mysqli_close($conn);
     
?>