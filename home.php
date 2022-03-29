<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style.css">
    <title>Homepage</title>
</head>


<body>
    


<?php if (isset($_GET['user']) && $_GET['user'] == "admin") { ?>
    
<div class="utama">
    <div class="homie">
    <h2>CIA Monitoring Center </h2>
    <iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=-3.805&lon=112.382&detailLat=-6.174&detailLon=106.830&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
    <center><a href="form_login.php"><p style="text-decoration: none;color:#3a51b1">LOGOUT</p></a></center>
    </div>
</div>


<?php } else { ?>

<div class="utama">
    <div class="homie">
    <h2>Selamat datang di website CIA</h2><br />
    Klik di bawah ini untuk login<br />
    <a href="form_login.php">LOGIN</a>
  </div>
</div>

<?php } ?>



</html>