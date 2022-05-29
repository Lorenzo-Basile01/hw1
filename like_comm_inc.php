<?php

include "auth.php";

$conn = mysqli_connect("localhost","root","","hw1");

$val = $_GET['val']; 

$idpost = $_GET['idpost'];
$iduser = checkAuthId();

if($val == 1)
$query = "INSERT INTO likes(idutente, idpost) VALUES('$iduser', '$idpost')";
else
$query = "DELETE FROM likes WHERE idutente = $iduser AND idpost = $idpost";

mysqli_query($conn,$query);

mysqli_close($conn);
?>