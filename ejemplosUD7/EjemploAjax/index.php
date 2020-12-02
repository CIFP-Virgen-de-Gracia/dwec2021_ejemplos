<!DOCTYPE html>
<html lang="es-ES">
    <head>
        <meta charset="utf-8">
        <title>Ejemplo de Ajax con jQuery, PHP y JSON</title>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script src="miscript.js"></script>
    </head>
    <body>
        <h1>Este ejercicio usa html para enviar datos entre la petición Ajax y PHP.</h1>
        <form name="formu" id="formulario" method="POST">
            <input id="texto" size="50" type="text" value="" name="texto" placeholder="Escribe un DNI a buscar y cuando la caja pierda el foco se buscará...">
        </form>
        <p id="respuesta"></p>
    </body>
</html>
