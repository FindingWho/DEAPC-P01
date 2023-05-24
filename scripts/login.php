<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login</title>
	<?php require_once('../assets/init.php') ?>
	<link rel="stylesheet" href="../css/login.css">
</head>
<body>
    <div class="login" align="center">
    	<i class="fa-solid fa-circle-user"></i>
    	<form class="login_form">
    		<label>Login</label><br>
    		<input type="text" id="User"><i class="fa fa-user fa-2xs"></i></input><br>
    		<i class="fa-solid fa-lock fa-2xs"></i><input type="password" id="Pass"><br>
    		<input type="submit" id="button" value="Login" onclick="alert('Login')">
    	</form>
	</div>
    <?php require_once('../assets/footer.php') ?>
</body>
</html>