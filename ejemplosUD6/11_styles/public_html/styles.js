
var mostrarEstilos = function (element) {
    var estilo = element.style;
    var css = window.getComputedStyle(parrafo, null);

    for (var i = 0; i < estilo.length; i++)
        console.log(estilo[i] + ':' + css[estilo[i]] + ";");

};

var addStyle = function (element, clave, valor) {
    element.style[clave] = valor;
};

var removeStyle = function (element, clave) {
    addStyle(element, clave, null);
};

var updateStyle = function (element, clave, valor) {
    addStyle(element, clave, valor);
};

function cargar()
{
    var parrafo = document.getElementById('parrafo');

    console.log("-- Estilo original --");
    mostrarEstilos(parrafo);
    addStyle(parrafo, 'font-size', '30px');
    removeStyle(parrafo, 'color');
    updateStyle(parrafo, 'font-weight', 'lighter');

    console.log("-- Estilo modificado --");
    mostrarEstilos(parrafo);
}