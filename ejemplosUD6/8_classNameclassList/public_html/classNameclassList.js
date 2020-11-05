var addClass = function (element, className) {
    var existe = false;
    for (var i = 0; i < element.classList.length; i++) {
        if (element.classList[i] === className)
            existe = true; // No habría que añadirla

    }
    if (!existe)
        element.className += ' ' + className;
};

var removeClass = function (element, className) {
    var newClassName = '';
    for (var i = 0; i < element.classList.length; i++) {
        if (element.classList[i] !== className)
            newClassName += element.classList[i] + ' ';
    }
    element.className = newClassName;
};

function cargar()
{

    var elementH1 = document.getElementsByTagName('h1')[0];
    var elementP = document.getElementsByTagName('p')[0];

    addClass(elementH1, 'rojo');
    addClass(elementH1, 'rojo');
    console.log(elementH1.className); // No se duplica

    removeClass(elementH1, 'principal');
}