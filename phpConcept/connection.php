<?php
/* установка соединения */
$conn = new mysqli('localhost','1149951','123rqwe4asdvzxcf', '1149951db2');
/* проверка соединения */
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8"); //установка кодировки
?>
