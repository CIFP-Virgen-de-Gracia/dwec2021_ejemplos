function cargar()
{
    var parrafo = document.getElementById("parrafo");

    parrafo.classList.add("rojo");
    parrafo.classList.add("negrita");

    alert("Hemos añadido los estilos rojo y negrita.\n\n Ahora eliminaremos el estilo rojo.\n\n Pulse una tecla para continuar");

    parrafo.classList.remove("rojo");

    alert("Hemos eliminado el estilo rojo.\n\n Ahora eliminaremos también la negrita.\n\n Pulse una tecla para continuar.");

    parrafo.classList.remove("negrita");

}