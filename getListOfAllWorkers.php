<?php
 require 'connection.php';
$sql="SELECT * FROM emp";
$result = mysqli_query($conn,$sql);

while(($con[] = mysqli_fetch_row($result)) || array_pop($con));
exit(json_encode($con))



?>
