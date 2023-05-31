<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login</title>
	<?php require_once('assets/init.php') ?>
	<?php require_once('assets/headernav.php') ?>
	<link rel="stylesheet" href="css/login.css">
	<script>
		function validar_user(){
			<?php require_once('connect.php'); ?>

			let user= document.getElementById("User").value;
			let pass=document.getElementById("Pass").value;

	}
	</script>
</head>
<body>
    <div class="login" align="center">
    	<i class="fa-solid fa-circle-user"></i>
    	<form class="login_form">
    		<label>Login</label><br>
			<!--<i class="fa fa-user fa-2xs"></i>-->
    		<input type="text" id="User" value="Joana"></input><br>
    		<!--<i class="fa-solid fa-lock fa-2xs"></i>-->
			<input type="password" id="Pass" value="J1234"><br>
    		<input type="submit" id="button" value="Login" onclick="validar_user()">
    	</form>
	</div>
    <?php require_once('assets/footer.php') ?>
</body>
</html>