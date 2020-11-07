var $lista1 = $('#lista1 li');
var $lista2 = $('#lista2 li');

$lista1.on('click mouseenter mouseout', function () {
    $(this).toggleClass('rojo');
});

$lista1.on('click', function () {
    $(this).off('mouseenter mouseout');
});

$lista2.dblclick(function () {
    $(this).remove();
});