function cargar()
{
    var central = document.getElementById('central');
    var elementsSublista = central.querySelectorAll('li[data-cantidad="0"]');

    for (var i = 0; i < elementsSublista.length; i++) {
        console.log(elementsSublista[i].textContent + ' (data-cantidad=' + elementsSublista[i].getAttribute('data-cantidad') + ')');
    }
}