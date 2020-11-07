//Interfaces fluidas
var inicializacion = function() {
  $(':text').val(12345678);
  $(':input').addClass('tabular');

  $(':radio')
    .add(':checkbox')
    .addClass('casillas');
};

$(document).ready(inicializacion);