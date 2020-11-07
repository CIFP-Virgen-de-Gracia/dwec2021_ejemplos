var generarTabla = function(alumnos) {
  var html = '<table>' + generarCabecera();

  for (var i = 0; i < alumnos.length; i++) {
    html += generarFila(alumnos[i]);
  }

  html += '</table>';

  return html;
};

var generarCabecera = function() {
  var cabecera = '<tr>';
  cabecera += '<th>nombre</th>';
  cabecera += '<th>apellidos</th>';
  cabecera += '</tr>';
  return cabecera;
};

var generarFila = function(alumno) {
  var fila = '<tr>';
  fila += '<td>' + alumno.nombre + '</td>';
  fila += '<td>' + alumno.apellido + '</td>';
  fila += '</tr>';
  return fila;
};

var inicializacion = function() {
  var alumnos = [
    {nombre: 'Josep', apellido: 'Sánchez'},
    {nombre: 'Maria', apellido: 'Torres'},
    {nombre: 'Alex', apellido: 'Puig'},
    {nombre: 'Ana', apellido: 'Pérez'}
  ];
  
  var html = generarTabla(alumnos);

  var $tabla = $(html);
  $(document.body).append($tabla);
};

$(document).ready(inicializacion);