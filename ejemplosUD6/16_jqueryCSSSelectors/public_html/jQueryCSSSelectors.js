var inicializacion = function() {
  var $central = $('div .central');
  $central.addClass('rojo'); //Añade la clase rojo a los elementos
  $central.removeClass('rojo'); //Elimina la clase rojo 
  $central.toggleClass('rojo'); //Comprueba si existe, si no, la añade, y si existe la borra

  var $tercer = $('#tercer');
  $tercer.addClass('verde');
};
  
$(document).ready(inicializacion);

