function cargar()
{
    console.log('Nombre de los formularios de un documento: ', document.forms.length);

    for (var i = 0; i < document.forms.length; i++) {
        console.log('id del formualario que tiene por índice ' + i + ':', document.forms[i].id);
    }
}

