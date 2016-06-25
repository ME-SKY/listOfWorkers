<?php /* получаем все записи и выносим их в таблицу */
 require 'connection.php';
$sql="SELECT * FROM emps";
$result = mysqli_query($conn,$sql);
/* вначале идет окно(div id='editing') в которое будет заноситься запись для редактирования из edituser.php
, потом вставляются записи в таблицу , добавляем обработчик на click для кнопки "редактировать" для каждой записи*/

while($row = mysqli_fetch_array($result)) {
    echo json_encode($row['id']);
    echo json_encode($row['name']);
    echo json_encode($row['surname']);
    echo json_encode($row['patronymic']);
    echo json_encode($row['zpt']);
    echo json_encode($row['hourlyzpt']);


}

?>
