<?php
	#encontra a base de dados
	$conn = mysqli_connect("localhost","root","","deapc-p01");
	# verificação de erros na conexao
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
?>