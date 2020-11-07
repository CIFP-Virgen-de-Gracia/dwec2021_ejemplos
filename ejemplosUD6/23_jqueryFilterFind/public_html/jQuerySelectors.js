var inicializacion = function() {
  var $lista = $('ul');

  $filter = $lista.filter('li'); //En lista no se encuentra ningún elemento li
  $filter.addClass('filter');

  $find = $lista.find('li'); //En este caso busca entre cada uno de los descendientes
  //de ul que están en lista.
  
  $find.addClass('find');
  //Con removeClass borramos clases
  //Con toogleClass, si existe la clase la borra y si no existe la añade.
  
  console.log('Elements a la lista:', $lista.length);
  console.log('Elements \'li\' filtrados:', $filter.length);
  console.log('Elements \'li\' encontrados:', $find.length);
}

$(document).ready(inicializacion);