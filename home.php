<?php
    include "auth.php";
    include "benvenuto.php";
?> 
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Adottaci!</title>    
        <link rel="stylesheet" href="css/home.css" >
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Satisfy&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
        
        <script src="javascript/load_posts.js" defer="true"></script>
    </head>
    <body>
                <nav>
                <?php
                    if(checkAuth())
                        echo "<p class='username'>Benvenuto ".$entry['nome']."!!</p>"
                ?>
                    <div id="menu">
                        <a href="home.php">HOME</a>
                        <?php
                    $text = "LOGIN";
                    if(checkAuth()){
                        $text = "AREA PERSONALE";
                        echo "<a class='login' href='customer.php'>$text</a>";
                    }
                    else
                    echo "<a class='login' href='login.php'>$text</a>";

                    echo "<a class='community' href='community.php'>LA NOSTRA COMMUNITY</a>";
                    ?>
                    </div>
                    
                </nav>
            <section id='posts'></section>

        </body>
</html>