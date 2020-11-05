function cargar()
{
    //Primera versión
    var elementosSecundaria = document.getElementsByClassName('secundaria');

    console.log('Mostramos los elementos de texto de la clase="secundaria":');
    for (var i = 0; i < elementosSecundaria.length; i++) {
        console.log(elementosSecundaria[i].textContent);
    }

    var elementosLista = document.getElementsByTagName('li');
    console.log('Mostramos los elementos de texto de la lista (<li></li>):');
    for (i = 0; i < elementosLista.length; i++) {
        console.log(elementosLista[i].textContent);
    }

    var elementoContiguo = document.getElementById('contiguo');
    console.log('Mostramos el contenido de texto de los elementos con id="continguo": ' + elementoContiguo.textContent);

    //Segunda versión
    console.log('-- Cabeceras h1 de la clase secundaria --');
    var elementosTitulos = document.querySelectorAll('h1.secundaria');
    for (var i = 0; i < elementosTitulos.length; i++) {
        console.log(elementosTitulos[i].textContent);
    }

    console.log('-- Todos los elementos de la primera lista --');
    var elementosLista = document.querySelectorAll('li');
    for (var i = 0; i < elementosLista.length; i++) {
        console.log(elementosLista[i].textContent);
    }

    console.log('-- Primeros elementos de las listas --');
    var elementosPrimeros = document.querySelectorAll('li:first-child');
    for (var i = 0; i < elementosPrimeros.length; i++) {
        console.log(elementosPrimeros[i].textContent);
    }
}
