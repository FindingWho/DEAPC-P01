<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login</title>
	<?php require_once('assets/init.php') ?>
	<link rel="stylesheet" href="css/login.css">
	<?php require_once('connect.php') ?>
    <script type="text/javascript" src="scripts/register.js"></script>
</head>
<body>
    <div class="register" align="center">
    	<i class="fa-solid fa-circle-user"></i>
    	<form class="login_form">
            </br>
    		<b><label class="title">Create Account</label></b><br>

            <input type="text" id="Name" class="textbox" placeholder="Name" autofocus require></input></br>
			<p class = "errorMessageName" ></p></br>

            <input type="email" id="Email" class="textbox" placeholder="Email" autofocus require></input></br>
			<p class = "errorMessageEmail" ></p></br>

			<input type="password" id="Pass" class="textbox" placeholder="Password" require></br>
			<p class = "errorMessagePass" ></p></br>

    		<input type="button" id="button" value="Create" onclick="validate_form()">
    	</form>
	</br>
	<div class="line">
		<span>OR</span>
	</div>
	</br>
	<a class="link" href="login.php">Have an account? Sign In</a>
	</br></br>
	<a class="link" href="index.php">Continue as Guest</a>
</body>
</html>