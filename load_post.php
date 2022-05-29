<?php
include "auth.php";

$iduser = checkAuthId();

$conn = mysqli_connect("localhost","root","","hw1");

$query = "SELECT * FROM posts p
JOIN cliente c ON p.cliente = c.id_user
ORDER BY id_post DESC LIMIT 10";

$res = mysqli_query($conn,$query);
$row = mysqli_fetch_assoc($res);

if(isset($row)){
    do{
        $query1 = "SELECT * FROM likes WHERE idutente = $iduser AND idpost = ".$row['id_post']."";
        
        $res1 = mysqli_query($conn,$query1);
        if(mysqli_num_rows($res1) != 0) $liked = 'true';
        else $liked = 'false';

        $array[]=array(
        'userid' => $row['cliente'],
        'name' => $row['nome'], 
        'surname' => $row['cognome'],  
        'postid' => $row['id_post'],
        'content' => json_decode($row['content']), 
        'nlikes' => $row['nlikes'],
        'liked' => $liked,
        /* 'ncomments' => $row['ncomments'],  */
        'time' => $row['time']
        /* 'liked' => $row['liked'] */);
    }while($row = mysqli_fetch_assoc($res));
}else{
    $array[]=array(
        'userid' => -1,
        'content' => $arr = array('url'=>"img/index.png",
        'descrizione'=>'ancora nessun post')); 
}

echo json_encode($array);
mysqli_close($conn);
?>