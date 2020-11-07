var inicializacion = function() {
  var $primeros = $('li:first-child');
  $primeros.addClass('rojo');

  var $ultimos = $('li:last-child');
  $ultimos.addClass('verde');
};

$(document).ready(inicializacion);
