<?php

//echo $_POST['id'];

$dbserver = "localhost";
$dbuser = "inma";
$password = "Chubaca2020";
$dbname = "ejemplo";

$database = new mysqli($dbserver, $dbuser, $password, $dbname);

$jsondata = array();

$consulta = "SELECT * FROM personas WHERE DNI = '" . $_POST['id'] . "'";
if ($result = $database->query($consulta)) {
    if ($result->num_rows > 0) {
        $jsondata["success"] = true;
        $jsondata["data"]["message"] = sprintf("Se han encontrado %d usuarios", $result->num_rows);
        $jsondata["data"]["users"] = array();
        while ($row = $result->fetch_object()) {
            $jsondata["data"]["users"][] = $row;
        }
    } else {
        $jsondata["success"] = false;
        $jsondata["data"] = array(
            'message' => 'No se encontró ningún resultado.'
        );
    }
} else {

    $jsondata["success"] = false;
    $jsondata["data"] = array(
        'message' => $database->error
    );
}

$database->close();

header("Content-Type: application/json", true);
echo json_encode($jsondata, JSON_FORCE_OBJECT);
