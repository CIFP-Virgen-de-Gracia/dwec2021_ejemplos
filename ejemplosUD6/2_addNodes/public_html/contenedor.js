function cargar()
{
    //Añadir elementos al contenedor
    var contenedor = document.getElementById('contenedor');

    contenedor.appendChild(document.createElement('p'));
    contenedor.appendChild(document.createElement('div'));
    contenedor.insertBefore(document.createElement('h1'), contenedor.firstChild);

    console.log('El contenedor tiene otros nodos: ' + contenedor.hasChildNodes());

    console.log('Contiene ' + contenedor.childNodes.length + ' nodos');

    for (var i = 0; i < contenedor.childNodes.length; i++) {
        console.log('Tiene un nodo del tipo ' + contenedor.childNodes[i].nodeType + ': ' + contenedor.childNodes[i].nodeName);
    }
    
    //Este código añade el elemento automáticamente a contenedor2 y lo elimina de contenedor1
    var contenedor2 = document.getElementById('contenedor2');
    var titulo1 = document.getElementById('titulo1');
    contenedor2.appendChild(titulo1);
    
    //El método para borrar elementos sería removeChild;
    //
    //También podemos clonar nodos
    var contenedor3 = document.getElementById('contenedor3');

    for (var i=0; i<5; i++) {
        var clonedNode = contenedor3.firstElementChild.cloneNode(true);
        console.log(clonedNode);
        contenedor3.appendChild(clonedNode);
    }
}


