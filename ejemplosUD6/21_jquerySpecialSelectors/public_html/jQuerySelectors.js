/**
 * Aunque odd se refiere a los elementos impares y even a los pares, el primer elemento
 * marcado tiene como índice 0 y por ello se considera par.
 */
var inicializacion = function() {
  var $impares = $('tr:odd');
  $impares.addClass('azul');

  var $pares = $('tr:even');
  $pares.addClass('gris');

  var $columnasAlternas = $('td:odd');
  $columnasAlternas.addClass('negrita');
};

$(document).ready(inicializacion);