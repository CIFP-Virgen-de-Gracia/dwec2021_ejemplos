function cargar()
{
    var estudiantes = ['José', 'María', 'Carlos', 'Montserrat'];
    var codHtml = '';

    codHtml += '<ul>';

    for (var i = 0; i < estudiantes.length; i++) {
        codHtml += '<li>' + estudiantes[i] + '</li>';
    }

    codHtml += '</ul>';

    var contenido = document.getElementById('contenido');
    contenido.innerHTML = codHtml;
}