<!DOCTYPE html>
<html>
<head>
        <link rel="stylesheet" href="style.css">
        <title>Login</title>
</head>
<body>
    <div class="utama">
        <div class="form">
        <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_the_Central_Intelligence_Agency.svg/510px-Seal_of_the_Central_Intelligence_Agency.svg.png" class="gresponsive"/>
        
        <form class="login-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <input type="text" placeholder="username" name="user"/>
        <input type="password" placeholder="password" name="pass"/>
        <input type="submit" name="login" value="Login"/>
        </form>
    </div>
    </div>
</body>
</html>

<?php
function cekLogin($usernya, $passnya) {

    if ($usernya == "admin" && $passnya== "mimin") {
         header("location:home.php?user=$usernya");
    } else {
        echo "
            <script>
                alert('Maaf, username atau password Anda salah!');
                window.location.href='form_login.php';
            </script>
        ";
    }
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["user"];
    $password = $_POST["pass"];

    cekLogin($username, $password);
}
?>