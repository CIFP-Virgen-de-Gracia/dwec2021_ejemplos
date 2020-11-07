var inicializacion = function() {  
  var $text = $(':input');
  var $parrafo1 = $('p:first');
  var $parrafo2 = $('p:last');
  
  console.log($text.val());
  $text.val('Maria');
  
  console.log($parrafo1.html());
  $parrafo1.html("<ul><li>Elemento 1</li><li>Elemento 2</li></ul>");
  
  console.log($parrafo2.text());
  $parrafo2.text("El contenido textual de este párrafo ha sido modificado");
};

$(document).ready(inicializacion);