<?php
    
    include "auth.php";
?> 

<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Adottaci!</title>    
        <link rel="stylesheet" href="css/customer.css" >
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Satisfy&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
        <script src="javascript/customer.js" defer></script>
    </head>
    <body>
        <nav>
            <div id="menu">
                <a href="home.php">HOME</a>
                <a href="logout.php">LOGOUT</a>
            </div>
        </nav>
        <header>
            <h2></h2>
        
        </header>
        <section>
            <h3>Carica un post</h3>

            <form name='caricamento' id = 'form'>
                <div id="botton">
                    <div>Clicca per un cane Random</div>
                    <input type="button" id="cerca" value="Cerca" />
                    <div class="album-view hidden"></div>
                </div>
                <div class="description">
                    <label for="description">Descrizione</label>
                    <input type="text" name="description" id="descrizione">
                </div>
                <div class = "parent" id = "carica">
                    <div class="submit">
                        <input type='submit' value="Carica Post">
                    </div>
                </div>
            </form>
        </section>
    </body>


</html>
