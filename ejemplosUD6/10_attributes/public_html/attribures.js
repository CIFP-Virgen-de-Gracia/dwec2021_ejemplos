function cargar()
{
    var titulo = document.getElementById('titulo');

    titulo.setAttribute('title', 'Esto se muestra al situar el cursor');
    titulo.removeAttribute('class');
    console.log('El identificador es: ' + titulo.getAttribute('id'));
}