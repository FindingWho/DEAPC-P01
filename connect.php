<?php
	#encontra a base de dados
	$conn = mysqli_connect("localhost","root","","DEAPC-P01");
	# verificação de erros na conexao
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
?>