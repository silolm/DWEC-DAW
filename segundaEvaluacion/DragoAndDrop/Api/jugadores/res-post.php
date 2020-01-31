<?php
// $servidor = "nba.cqgv7vsphdtj.us-east-2.rds.amazonaws.com";
// $username = "ruut";
// $password = "Holamundo66";
// $basedatos = "nba";

$servidor = "127.0.0.1";
$username = "root";
$password = "";
$basedatos = "nba";

//$consulta="UPDATE jugadores SET Nombre_equipo = ".$_POST["equipo"]." WHERE Nombre = ".$_POST['jugador'];
$consulta="UPDATE jugadores SET Nombre_equipo = "."Lakers"." WHERE Nombre =". "Amparo";

if (isset ($_POST["jugador"])){
    echo "joderrrr";
    $consulta;
}  

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);
# Comprobar conexión
if (!$conn)
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());

$result = mysqli_query($conn, $consulta);

mysqli_close($conn);
?>