function cargar()
{
    var elementH1 = document.getElementsByTagName('h1')[0];
    var elementP = document.getElementsByTagName('p')[0];

    elementH1.tagName = 'H2';

    console.log('-- Tag de los elementos --');
    console.log(elementH1.tagName);
    console.log(elementP.tagName);

    console.log('-- Clases de los elementos --');
    console.log(elementH1.className);
    console.log(elementP.className);

    console.log('-- Modificación de las clases de los elementos --');
    elementH1.className = elementH1.className + ' ampliada';
    elementP.className = 'Cambios por nuevas clases ';

    console.log('-- Clases de los elementos ampliados--');
    console.log(elementH1.className);
    console.log(elementP.className);

    console.log('-- Lista de clases del párrafo --');
    for (var i = 0; i < elementP.classList.length; i++) {
        console.log("Clases " + i + ":" + elementP.classList[i]);
    }

    console.log('-- Identificadores de los elementos --');
    console.log('Cabecera: ' + elementH1.id);
    console.log('Párrafo: ' + elementP.id);
    elementH1.id = 'Actualizado';
    elementP.id = elementP.id + ' actualizado';

    console.log('-- Identificadores de los elementos actualizados --');
    console.log('Cabecera: ' + elementH1.id);
    console.log('Párrafo: ' + elementP.id);
}

