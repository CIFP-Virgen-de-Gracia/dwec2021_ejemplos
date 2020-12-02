$(document).ready(function () {

    $("#texto").blur(function () {

        var dni = this.value;
        var parametros = {
            "id": dni
        };
        //llamada al fichero PHP con AJAX
        $.ajax({
            data: parametros,
            url: 'personas.php',
            dataType: 'json',
            type: 'post',
            success: function (response) {
                if (response.success) {
                    var output = "<h1>" + response.data.message + "</h1>";
                    //recorremos cada usuario
                    $.each(response.data.users, function (key, value) {
                        output += "<h2>Detalles del usuario " + value['DNI'] + "</h2>";
                        //recorremos los valores de cada usuario
                        $.each(value, function (userkey, uservalue) {
                            output += '<ul>';
                            output += '<li>' + userkey + ': ' + uservalue + "</li>";
                            output += '</ul>';
                        });
                    });

                    //Actualizamos el HTML del elemento con id="#response-container"
                    $("#respuesta").html(output);
                } else {
                    //response.success no es true
                    $("#respuesta").html('No ha habido suerte: ' + response.data.message);
                }
            }
        });

    });

});
