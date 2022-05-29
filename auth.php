<?php

    session_start();
    
    function checkAuth() {
        
        if(isset($_SESSION["username"])) {
            return $_SESSION["username"];
        } else 
            return 0;
    }
    function checkAuthId() {
        
        if(isset($_SESSION["username"])) {
            return $_SESSION["user_id"];
        } else 
            return 0;
    }
    
?>