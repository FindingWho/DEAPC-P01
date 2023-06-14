<?php
	include('../connect.php');
	if(isset($_POST['submit'])){
		$email = $_POST["Email"];
		$password=$_POST['Pass'];

		$query="SELECT * FROM user WHERE Email LIKE '$email' AND Password LIKE '$password'"; 
		//A instrucao SELECT retorna um objeto com os dados da consulta.
		$result = mysqli_query($conn,$query);
		 //A funcao mysqli_num_rows insere no objeto $result o nº de registos
		$nregistos=mysqli_num_rows($result);
		if($nregistos == 1){
			header("Location:../index.php");
		} else{
			echo '<script> confirm("User not found!")';
			header("Location:../login.php");
		}
	}
?>