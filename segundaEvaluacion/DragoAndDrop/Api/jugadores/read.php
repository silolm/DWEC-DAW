<?php
include '../config/conexion.php';

$consulta = "SELECT * FROM jugadores";

if (isset($_GET["equipo"]))
    $consulta = $consulta . " WHERE Nombre_equipo LIKE " . "'" . $_GET["equipo"] . "'";

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);
# Comprobar conexión
if (!$conn)
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());

$result = mysqli_query($conn, $consulta);

$jugadores = [];
while ($fila = mysqli_fetch_array($result)) {
    $jugador = [[
        "Nombre" => $fila[1],
        "Equipo" => $fila[6]
    ]];
    $jugadores = array_merge($jugadores, $jugador);
}

mysqli_free_result($result);
mysqli_close($conn);

echo json_encode($jugadores);
