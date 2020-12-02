<?php

//echo $_POST['id'];

$dbserver = "localhost";
$dbuser = "inma";
$password = "Chubaca2020";
$dbname = "ejemplo";

$database = new mysqli($dbserver, $dbuser, $password, $dbname);

$respuesta = "No hay datos";

$consulta = "SELECT * FROM personas WHERE DNI = '" . $_POST['id'] . "'";
//echo $consulta;
if ($result = $database->query($consulta)) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_array()) {
            $respuesta = $row['DNI'].' '.$row['Nombre'].' '.$row['Tfno'];
        }
        $result->close();
    }
}
$database->close();

echo $respuesta;
