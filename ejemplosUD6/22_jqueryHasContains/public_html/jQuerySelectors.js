var inicializacion = function() {
  $('p:has("a")').addClass('rojo');
  $('p:contains("Comte")').addClass('negrita');
};

/*En los casos en los que la eficiencia sea crítica, es más recomendable hacer
*$('p').filter(:has('a')).addClass('rojo')
*De este modo filtramos con el selector de CSS primero que está optimizado y sobre
*éste utilizamos los filtros propios de jQuery.
* */
 
$(document).ready(inicializacion);