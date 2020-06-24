<?php
$number = $_POST['number'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];

$number = htmlspecialchars($number);
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$number = urldecode($number);
$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);
$message = urldecode($message);

$number = trim($number);
$name = trim($name);
$tel = trim($tel);
$email = trim($email);
$message = trim($message);
$myemail = "pavel.nagornyy@gmail.com";
mail($myemail, $name, $email, $message);
?>
