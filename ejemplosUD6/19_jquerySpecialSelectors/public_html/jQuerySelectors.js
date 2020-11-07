var inicializacion = function() {
  var $primeros = $('li:first-child'); //Selector CSS, obtiene los primeros hijos de li
  $primeros.addClass('rojo');

  var $ultimos = $('li:last-child'); //Selector CSS, obtiene los últimos hijos de li
  $ultimos.addClass('verde');

  var $primer = $('li:first'); //Selector jQuery, obtiene de todos los li, el primero
  $primer.addClass('negrita');

  var $ultimo = $('li:last'); //Selector jQuery, obtiene de todos los li, el último
  $ultimo.addClass('cursiva');
};

$(document).ready(inicializacion);