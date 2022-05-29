<?php
    
    if(checkAuth()){
        $db = "hw1";
        $conn = mysqli_connect("localhost","root","",$db);
        $email = $_SESSION['username'];
        $query = "SELECT nome FROM cliente WHERE email = '$email'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        $entry = mysqli_fetch_assoc($res);
        mysqli_close($conn);
    }

    
?> 