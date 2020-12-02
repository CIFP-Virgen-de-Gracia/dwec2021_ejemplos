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
            dataType: 'html',
            type: 'post',
            success: function (response) {
                $("#respuesta").html(response);
            }
        });

    });

});
