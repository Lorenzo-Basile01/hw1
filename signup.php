 <?php
    session_start();
    if(isset($_SESSION["user_id"]))
       header("Location: login.php");

    if (!empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["confirm_password"])
         && !empty($_POST["name"]) && !empty($_POST["surname"]) && !empty($_POST["birthdate"]) ){
        $db = "hw1";
        $conn = mysqli_connect("localhost","root","",$db);

        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $surname = mysqli_real_escape_string($conn, $_POST['surname']);
        $birthdate = mysqli_real_escape_string($conn, $_POST['birthdate']);

        # PASSWORD
        if (strlen($_POST["password"]) < 8) {
            $error[] = "Caratteri password insufficienti";
        } 
        # CONFERMA PASSWORD
        if (strcmp($_POST["password"], $_POST["confirm_password"]) != 0) {
            $error[] = "Le password non coincidono";
        }
        # EMAIL
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $error[] = "Email non valida";
        } else {
            $email = mysqli_real_escape_string($conn, strtolower($_POST['email']));
            $res = mysqli_query($conn, "SELECT email FROM cliente WHERE email = '$email'");
            if (mysqli_num_rows($res) > 0) {
                $error[] = "Email già utilizzata";
            }
        }

        if (!isset($error)) {

            $password = mysqli_real_escape_string($conn, $_POST['password']);
            //$password = password_hash($password, PASSWORD_BCRYPT);

            $query = "INSERT INTO cliente(nome, cognome, data_nascita,email,password) VALUES('$name', '$surname','$birthdate','$email','$password')";

            if (mysqli_query($conn, $query)) {
                echo($_POST['$email']);
                $_SESSION["username"] = $_POST["email"];
                $_SESSION["user_id"] = mysqli_insert_id($conn);
                mysqli_close($conn);
                header("Location: home.php");
                exit;
            } else {
                $error = "Errore di connessione al Database";
            }
        }

        mysqli_close($conn);

            
    }

    if(isset($error))
        echo($error);
?>  

<!DOCTYPE html>
<html>

<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
    <title>Signup</title>
    <link rel="stylesheet" href="css/signup.css">
    <script src="javascript/signup.js" defer="true"></script>

</head>

<body>
    <nav>
        <div id="menu">
            <a href="home.php">HOME</a>
            <a href="">CHI SIAMO?</a>
        </div>                
    </nav>

    <!-- SECTION -->
    <section>
    <h1 class="comp">Registrati!</h1>
        <div class="logo">
            <img class="logoimg" src="img/logo.jpg">
            <div class="comp">Adottaci!</div>
        </div>

        <div id="errore">
        <!-- FORM -->
        <form name='signup' method='post' id = 'form'>
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
            </div>
            <!-- BIRTHDATE -->
            <div class = "parent">
            <div class="birthdate">
                <label for="birthdate">Data di Nascita</label>
                <input type="date" name="birthdate">
            </div>
            </div>
            <!-- EMAIL -->
            <div class = "parent">
            <div class="email">
                <label for="email">Email</label>
                <input type="text" name="email">
            </div>
            </div>
            <!-- PASSWORD  -->
            <div class = "parent">
            <div class="password">
                <label for='password'>Password</label>
                <input type='password' name='password'>
            </div>
            </div>
            <!-- CONFIRM PASSWORD  -->
            <div class = "parent">
            <div class="confirm_password">
                <label for='confirm_password'>Ripeti la Password</label>
                <input type='password' name='confirm_password'>
            </div>
            </div>
            <div class = "parent">
            <div class="submit">
                <input type='submit' value="Registrati">
            </div>
            </div>
        </form>
        <div class="signup">Hai già un account ? <a href="login.php ">Fai il login !</a></div>
    </div>
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