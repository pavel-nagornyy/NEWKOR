<?php
$to = "overpoweredtrue@yandex.ru"; // емайл получателя данных из формы 
$tema = "Заявка с сайта n-service"; // тема полученного емайла 
$message = "Имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "Номер телефона: ".$_POST['tel']."<br>"; //полученное из формы name=tel
$message .= "Сообщение: ".$_POST['text']."<br>"; //полученное из формы name=text
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;
?>