<?php
   
    include "auth.php";
    if(checkAuth()){ 
        header("Location: home.php");
    }

    if (!empty($_POST["email"]) && !empty($_POST["password"]) )
    {   

        $conn = mysqli_connect("localhost","root","","hw1");

        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        $query = "SELECT * FROM cliente WHERE email = '$email'";

        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));


        if(mysqli_num_rows($res) > 0 ){
            //ti prende il risultato della query e la stampa
            $entry = mysqli_fetch_assoc($res);

            //controlla la p
            if($_POST["password"] === $entry["password"]){
                $_SESSION["user_id"] = $entry['id_user'];
                $_SESSION["username"] = $_POST["email"];
                $_SESSION["nome"] = $entry["nome"];  
                $_SESSION["cognome"] = $entry["cognome"];  
                header("Location: home.php");
                mysqli_free_result($res);
                mysqli_close($conn);
                exit;
            }

        }   
        $error = "Username e/o Password errati.";
    }
    else if (isset($_POST["email"]) || isset($_POST["password"])) {
        $error = "Inserisci username e/o password.";
    }


?> 
<!DOCTYPE html>
<html>

<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="javascript/login.js" defer="true"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
</head>

<body>
    <nav>
        <div id="menu">
            <a href="home.php">HOME</a>
            <a href="">CHI SIAMO?</a>
        </div>                
    </nav>
    <section>
    <h1 class="comp">Benvenuto!</h1>
        <div class="logo">
            <img class="logoimg" src="img/logo.jpg">
            <div class="comp">Adottaci!</div>
        </div>

        <form name='login' method='post'>
        <div class = "parent">
            <div class="email">
                <label for="email">Email</label>
                <input type="text" name="email" id = 'email'>
            </div>
            </div>
            <div class = "parent">
            <div class="password">
                <label for='password'>Password</label>
                <input type='password' name='password' id = 'password'>   
            </div>
            <?php
            if(isset($error))echo"<div class = errore>".$error."</div>";?>
            </div>

            <div class = "parent">
            <div class="submit">
                <input type='submit' value="Login">
            </div>
            </div>
        </form>
        <div class="signup">Non hai un account ? <a href="signup.php">Registrati</a></div>
    </section>

    <footer>
        <div id="author">
            <p>Lorenzo Basile</p>
            <p>1000005358</p>
        </div>
        </div>
    </footer>

</body>

</html>