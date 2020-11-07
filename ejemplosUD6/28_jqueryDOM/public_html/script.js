var $lista = $('ul');

var $nuevoItem1 = $('<li>Element append</li>');
$lista.append($nuevoItem1);

var $nuevoItem2 = $('<li>Element prepend</li>');
$lista.prepend($nuevoItem2);

var $nuevoItem3 = $('<ul><li>Element before</li></ul>');
$lista.before($nuevoItem3);

var $nuevoItem4 = $('<ul><li>Element after</li></ul>');
$lista.after($nuevoItem4);