var estado = '#verde';

var cambiarEstado = function() {

  var $luces = $(estado);
  $luces.toggleClass('encendida');

  switch (estado) {
      
    case '#verde':
      estado = '#ambar';
      break;

    case '#ambar':
      estado = '#rojo';
      break;

    case '#rojo':
      estado = '#verde';
      break;
  }

  $luces = $(estado);
  $luces.toggleClass('encendida');
};

$('button').click(cambiarEstado);