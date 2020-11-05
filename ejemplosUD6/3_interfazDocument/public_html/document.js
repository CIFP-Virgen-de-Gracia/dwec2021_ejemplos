function cargar()
{
    var titulo1 = document.getElementById('titulo1');

    var nuevoNodoDeTexto = document.createTextNode('Este es el segundo añadido dinámicamente');
    titulo1.appendChild(nuevoNodoDeTexto);
    
    //Creamos elementos que van a pertenecer a contenedor
    var contenedor = document.getElementById('contenedor');

    var nuevoElemento = document.createElement('h1');
    var nuevoText = document.createTextNode('Esta es la cabecera');

    nuevoElemento.appendChild(nuevoText);
    contenedor.appendChild(nuevoElemento);
}

