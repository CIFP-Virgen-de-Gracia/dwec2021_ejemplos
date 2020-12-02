function cargar() {

    texto = document.getElementById("texto");
    respuesta = document.getElementById("respuesta");
    texto.addEventListener("blur", function (event) {
        var dni = texto.value;
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', 'personas.php', true)
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        httpRequest.send("id="+dni);
        httpRequest.onreadystatechange = function () {
            //readyState es 4
            if (httpRequest.readyState == 4) {
               respuesta.innerHTML = httpRequest.responseText;
            }
        }
    }, true);







    /*$("#texto").blur(function () {
     
     
     //llamada al fichero PHP con AJAX
     $.ajax({
     data: parametros,
     url: 'personas.php',
     dataType: 'html',
     type: 'post',
     success: function (response) {
     $("#respuesta").html(response);
     }
     });
     
     });*/

}