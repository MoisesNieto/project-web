<?php 


header("Location:../index.html");

echo	$name = $_POST['name'];
echo    $email = $_POST['email'];
echo	$mensaje = $_POST['message'];

//here header and value for the form
$cabeceras .= $email. "\r\n";

if(mail('moi34_5@hotmail.com', $name, $mensaje,$cabeceras)){
	echo "correo enviado";
}else{
	echo "there an error!";
}
die();




 ?>