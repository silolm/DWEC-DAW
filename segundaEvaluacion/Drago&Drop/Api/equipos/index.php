<?php
// $servidor = "nba.cqgv7vsphdtj.us-east-2.rds.amazonaws.com";
// $username = "ruut";
// $password = "Holamundo66";
// $basedatos = "nba";

$servidor = "127.0.0.1";
$username = "root";
$password = "";
$basedatos = "nba";

$consulta = "SELECT * FROM equipos";

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);
# Comprobar conexión
if (!$conn)
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());

$result = mysqli_query($conn, $consulta);

$equipos = [];
while ($fila = mysqli_fetch_array($result)) {
    $equipo = [[
        "Nombre" => $fila[0]
    ]];

    $equipos = array_merge($equipos, $equipo);
}

mysqli_free_result($result);
mysqli_close($conn);

echo json_encode($equipos);
?>