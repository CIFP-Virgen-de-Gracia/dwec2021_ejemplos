var inicializacion = function() {
  var $titulos = $(':header');
  $titulos.addClass('rojo');

  var $titulosEnContenedor = $('div :header');
  $titulosEnContenedor.addClass('cursiva');
};

$(document).ready(inicializacion);