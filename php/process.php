<?php 

	
header("Location:https://techmn.es/");

$name = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

//here header and value for the form
$cabeceras .= $email. "\r\n";

if(mail('moi34_5@hotmail.com', $name, $mensaje,$cabeceras)){
	echo "correo send";
}else{
	echo "there an error!";
}
	

die();




 ?>