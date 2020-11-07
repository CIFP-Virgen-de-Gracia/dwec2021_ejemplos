$cuadrados = $('div');
$cuadrados.click(function () {
    $(this).addClass('rojo');
    $cuadrados.off();
    $('h1').html('Cuadrado seleccionado');
});