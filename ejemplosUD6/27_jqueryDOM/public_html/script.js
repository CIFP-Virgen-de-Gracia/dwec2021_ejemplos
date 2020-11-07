var $contenedor = $('#contenedor');

var $nuevoParrafo = $('<p>');
$nuevoParrafo.html('Párrafo normal');

var $nuevoParrafoConEnfasis = $('<p id="parrafo2"><em>Párrafo con énfasis</em></p>');

$contenedor.append($nuevoParrafo);
$contenedor.append($nuevoParrafoConEnfasis);

var parrafo3= document.createElement('p');
parrafo3.innerHTML = 'Párrafo para clonar';

var $parrafoClonar = $(parrafo3);
$contenedor.append($parrafoClonar);
