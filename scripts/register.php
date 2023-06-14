<?php
    include('../connect.php');
	if(isset($_POST['submit'])){
		$email = $_POST["Email"];
        $name = $_POST["Name"];
		$password = $_POST["Pass"];

        echo '<script> alert($email); </script>'; 
        echo '<script> alert($name); </script>'; 
        echo '<script> alert($password); </script>'; 

        $count="SELECT * FROM user"; 
		//A instrucao SELECT retorna um objeto com os dados da consulta.
		$result = mysqli_query($conn,$count);
		 //A funcao mysqli_num_rows insere no objeto $result o nº de registos
		$nregistos=mysqli_num_rows($result);

		$query="INSERT INTO user (id,Name,Email,Password)values ($nregistos+1,'$name','$email','$password')"; 
		$result2 = mysqli_query($conn,$query);

        if($result2==true){
        header("Location:../index.php");
        }else{
        echo '<script> alert("Dados não inseridos!"); </script>';
        sleep(1);
        header("Location:../register.php");
        }

        mysqli_close($conn);
}
?>