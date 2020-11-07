var $etiquetas = $('label');
var $casillas = $(':checkbox');

var mostrarEstilos = function(elemento){
    var estilo = elemento.style;
    var $elemento = $(elemento);
    for(var i = 0; i < estilo.length; i++)
        console.log(estilo[i]+":"+$elemento.css(estilo[i])+";");
};

var mostrarId = function($items) {
  $items.each(function(index) {
    var $element = $(this);

    console.log('Atributo id de la etiqueta ' + index + ':', $element.attr('id'));
  });
};

var addTextToId = function($items, text) {
  $items.each(function() {
    var $element = $(this);
    $element.attr('id', $element.attr('id') + text);
  });
};

var mostrarMarcada = function($items) {
  $items.each(function(index) {
    var $element = $(this);
    console.log('Casilla ' + index + ' marcada?', $element.prop('checked'));
  });
};

var parrafo = document.getElementById('parrafo');
var $parrafo = $(parrafo);
console.log("-Estilo original-");
mostrarEstilos(parrafo);

$parrafo.css('font-size', '30px');
$parrafo.css('color', '');
$parrafo.css('font-weight', 'lighter');

console.log("-Estilo modificado-");
mostrarEstilos(parrafo);


mostrarId($etiquetas);
console.log('Añadido texto a los ids...');
addTextToId($etiquetas, 'casilla');
mostrarId($etiquetas);

console.log('Estado de las casillas');
mostrarMarcada($casillas);