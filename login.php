<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login</title>
	<?php require_once('assets/init.php') ?>
	<link rel="stylesheet" href="css/login.css">
	<script type="text/javascript" src="scripts/login.js"></script>
</head>
<body>
    <div class="login" align="center">
    	<form class="login_form" action="scripts/login.php" method="post">
			</br>
    		<b><label class="title">Sign In</label></b></br>

			</br><img class="icon" src="images/user.svg">
			<input type="email" id="Email" class="textbox" placeholder="Email" name="Email" autofocus require></input></br>
			<p class = "errorMessageEmail" ></p></br>

			<img class="icon" src="images/lock.svg">
			<input type="password" id="Pass" class="textbox" name="Pass" placeholder="Password" require></br>
			<p class = "errorMessagePass" ></p></br>

    		<input type="submit" id="button" value="Login" name="submit" onclick="return validate_form()">
	
    	</form>
	</br>
	<div class="line">
		<span>OR</span>
	</div>
	</br>
	<a class="link" href="register.php">New? Create Account</a>
	</br></br>
	<a class="link" href="index.php">Continue as Guest</a>
</body>
</html>