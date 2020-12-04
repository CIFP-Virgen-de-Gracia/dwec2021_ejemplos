/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.ajax({
    url: 'http://api.flickr.com/services/feeds/photos_public.gne',
    success: procesarRespuesta,
    dataType: "jsonp",
    jsonp: "jsoncallback",
    data: {
        tags: 'kitten',
        format: 'json'
    }
});

function procesarRespuesta(datos) {
    console.log(datos);
    var images = datos.items;

    for (var i = 0; i < images.length; i++) {
        var $img = $('<img>');
        $img.attr('src', images[i].media.m);
        $img.attr('title', images[i].title);
        $img.attr('alt', images[i].title);
        $('body').append($img);
    }
}
;