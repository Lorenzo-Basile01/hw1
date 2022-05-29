<?php
    include "auth.php";
?>
<html>
<head>
    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Adottaci!</title>
    <link rel="stylesheet" href="css/community.css">
    <script src="javascript/community.js" defer="true"></script>
</head>

<body>
    <nav>
        <div id="menu">
            <a href="home.php">HOME</a>
            <?php
                    $text = "UNISCITI A NOI!";
                    if(checkAuth()){
                        $text = "AREA PERSONALE";
                        echo "<a class='login' href='customer.php'>$text</a>";
                    }
                    else
                    echo "<a class='login' href='login.php'>$text</a>";

            ?>

        </div>
    </nav>
    <header>
        <form name='signup' id = 'form'>
            <h4>Cerca utenti</h4>

            <!-- NAME -->
            <div class = "parent">
            <div class="name">
                <label for="name">Nome</label>
                <input type="text" name="name">
            </div>
            </div>
            <!-- SURNAME -->
            <div class = "parent">
            <div class="surname">
                <label for="surname">Cognome</label>
                <input type="text" name="surname">
            </div>
            <div class = "parent">
            <div class="submit">
                <input type='submit' value="invia">
            </div>
        </form>
        </header>
    <section>
        <div id = "view" class = 'hidden'></div>            
    </section>                
    
</body>
</html>