
function funcionPresentacion() {
  console.log('Hola, mi nombre es ' + this.nombre + ', tengo ' + this.edad + ' años y soy ' + this.ocupacion);
}

var funcionSalir = function() {
  console.log(this.nombre + ' abandona la sala');
};

//Declaración literal de objetos
var persona = {
  nombre: 'Ricardo',
  ocupacion: 'Policia',
  edad: 40,
  presentacion: funcionPresentacion,
  salir: funcionSalir
};

// El contexto de estas funciones es el objeto persona
persona.presentacion();
persona.salir();

// El contexto de estas invocaciones es el objeto window
funcionPresentacion();
funcionSalir();

