<?php
include '../config/conexion.php';

$datos = json_decode(file_get_contents("php://input"));

$equipo = $datos->equipo;
$jugador = $datos->jugador;

$consulta = "UPDATE jugadores SET Nombre_equipo = " . "'$equipo'" . " WHERE Nombre = " . "'$jugador'";

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);
# Comprobar conexión
if (!$conn)
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());

$result = mysqli_query($conn, $consulta);

mysqli_close($conn);
