/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var inicializar = function() {
  var boton = document.getElementById('add');
  boton.onclick = addLinea;
};

// Inicialización de la aplicación
document.body.onload = inicializar;

var addLinea = function() {
  var nombreProducto = document.getElementById('producto').value;
  var cantidadProducto = document.getElementById('cantidad').value;
  var precioUnitario = document.getElementById('precio-unitario').value;
  var totalProducto = cantidadProducto * precioUnitario;

  addFilaTaula(nombreProducto, cantidadProducto, precioUnitario, totalProducto);
  recalcularTotal();
  resetLinea();
};

var addFilaTaula = function(nombreProducto, cantidadProducto, precioUnitario, totalProducto) {
  var cosTaula = document.querySelector('tbody');

  var fila = document.createElement('tr');

  var col1 = document.createElement('td');
  var col2 = document.createElement('td');
  var col3 = document.createElement('td');
  var col4 = document.createElement('td');
  var col5 = document.createElement('td');

  col1.innerHTML = nombreProducto + ' (detalle)';
  col2.innerHTML = cantidadProducto;
  col3.innerHTML = precioUnitario + '€';
  col4.innerHTML = totalProducto + '€';
  col5.innerHTML = '(eliminar)';
  
  col1.addEventListener('click', mostrarDetalle);
  col5.addEventListener('click', eliminarFila);

  fila.appendChild(col1);
  fila.appendChild(col2);
  fila.appendChild(col3);
  fila.appendChild(col4);
  fila.appendChild(col5);
  
  cosTaula.appendChild(fila);
};

var recalcularTotal = function() {
  var files = document.querySelectorAll('tbody tr');
  var valorBase = 0;
  
  for (var i=0; i<files.length; i++) {
    var columnaUltima = files[i].lastElementChild;
    var columnaPenultima = columnaUltima.previousElementSibling;
    var valorTotalFila = parseFloat(columnaPenultima.textContent);
    valorBase += valorTotalFila;
  }

  var elementBase = document.getElementById('base-imponible');
  elementBase.innerHTML = valorBase;

  var elementPercentatgeIVA = document.querySelector('[data-iva]');
  var valorPercentatgeIVA = elementPercentatgeIVA.getAttribute('data-iva');
  var valorIVA = parseFloat(valorPercentatgeIVA * valorBase);

  var elementIVA = document.getElementById('iva');
  elementIVA.innerHTML = valorIVA;

  var elementTotal = document.getElementById('total');
  elementTotal.innerHTML = valorBase + valorIVA;
};

var resetearLinea = function() {
  document.getElementById('producto').value = '';
  document.getElementById('cantidad').value = 0;
  document.getElementById('precio-unitario').value = 0;
};


var mostrarDetalle = function() {
  var mensaje = 'Detalle de la factura:\n';
  var elementsFila = this.parentNode.getElementsByTagName('td');
  var etiquetes = ['Producto', 'Cantidad', 'Precio unitario', 'Precio total'];

  for (var i = 0; i < elementsFila.length; i++) {
    mensaje += '\t' + etiquetes[i] + ': ' + elementsFila[i].textContent + '\n';
  }

  alert(mensaje);
};

var eliminarFila = function() {  
  this.parentNode.parentNode.removeChild(this.parentNode);
  recalcularTotal();
};



