<?php
function consulta(){
$servidor = "nba.cqgv7vsphdtj.us-east-2.rds.amazonaws.com";
$username = "ruut";
$password = "Holamundo66";
$basedatos = "nba";

# Crear conexión
$conn = mysqli_connect($servidor, $username, $password, $basedatos);
# Comprobar conexión
if (!$conn) {
    die("Conexi&ocacuten fallida: " . mysqli_connect_error());
}

$consulta = "SELECT * FROM jugadores";
$result = mysqli_query($conn, $consulta);

$jugadores = [];
while ($fila = mysqli_fetch_array($result)) {
    $jugador = [[
        "Nombre" => $fila[1],
        "Altura" => $fila[5],
        "Peso" => $fila[6]
    ]];

    $jugadores = array_merge($jugadores, $jugador);
}

mysqli_free_result($result);
mysqli_close($conn);

return $jugadores;
}
?>

<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>Gráficos</title>
    <link href="../css/style.css" rel="stylesheet" type="text/css"/>
    <script src="../js/app.js"></script>
    <title>Pruebas</title>
</head>
<body>

<div id="div1">
    <select><?php
    $resultado = consulta();

    for ($i=0; $i < count($resultado) ; $i++) { 
        echo "<option>" . $resultado[$i]["Nombre"] ."</option>";
    }
    
    ?></select>
    <div draggable="true" id="drag1">pruebas</div>
</div>

<div id="div2"></div>
</body>

</html>