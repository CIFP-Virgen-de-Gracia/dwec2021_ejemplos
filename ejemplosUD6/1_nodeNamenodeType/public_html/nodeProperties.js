function cargar()
{
    var primer = document.getElementById("primer");
    var segundo = document.getElementById("segundo");
    var contenedor = document.getElementById("contenedor");
    
    //nodeName, nodeType y textContet
    console.log(document.nodeName);
    console.log(document.nodeType);
    console.log(primer.nodeName);
    console.log(primer.nodeType);
    console.log(primer.textContent); //Texto del elemento primer
    
    //Nodo padre
    console.log(primer.parentNode.nodeName); //Mostrará el nombre del nodo padre de primer. Es un DIV.
    
    //Nodos hijos
    console.log(contenedor.firstElementChild.textContent); //Mostrará el contenido del primer párrafo
    console.log(contenedor.lastElementChild.textContent); //Mostrará el contenido del tercer párrafo

    //Nodos hermanos
    console.log(segundo.previousElementSibling.textContent); //Mostrará el contenido del primer párrafo
    console.log(segundo.nextElementSibling.textContent); //Mostrará el contenido del tercer párrafo

    //Obtener todos los descendientes
    console.log("El contenedor contiene otros nodos: "+contenedor.hasChildNodes());
    console.log("El contenedor contiene exactamente: "+contenedor.childNodes.length);
    
    //Aparecerán más nodos hijos porque tiene en cuenta los saltos de línea como texto
    for(var i = 0; i < contenedor.childNodes.length; i++)
        console.log(contenedor.childNodes[i].nodeType + " " + contenedor.childNodes[i].nodeName);
    
    
}

