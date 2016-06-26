<?php
 require 'connection.php';
$sql="SELECT * FROM emp";
$result = mysqli_query($conn,$sql);

while(($con[] = mysqli_fetch_row($result)) || array_pop($con));
exit(json_encode($con))

// while($row = mysqli_fetch_array($result)) {
//     echo json_encode($row['id']);
//     echo json_encode($row['name']);
//     echo json_encode($row['surname']);
//     echo json_encode($row['patronymic']);
//     echo json_encode($row['zpt']);
//     echo json_encode($row['hourlyzpt']);
//
//
// }

?>
