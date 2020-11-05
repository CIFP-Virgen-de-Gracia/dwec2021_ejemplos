// Constructor de armas
var Arma = function(nombre) {
  this.nombre = nombre;
  this.potencia = 1;
  
  this.getNombre = function()
  {
      return this.nombre;
  };
  
  this.setNombre = function(nombre)
  {
      this.nombre = nombre;
  };
  
  this.getPotencia = function()
  {
      return this.potencia;
  };
  
  this.setPotencia = function(potencia)
  {
      this.potencia = potencia;
  };  
  
};

// Los métodos que añadimos serán compartidos por todas las armas
Arma.prototype.atacar = function(objetivo) {
  console.log('Zap! '+ this.nombre +' causa ' + this.potencia + ' puntos de daño a ' + objetivo);
};

Arma.prototype.equipar = function() {
  console.log('Se ha equipado ' + this.nombre);
};

// Se instancia una nueva arma
var cuchillo = new Arma('cuchillo');

// Se comprueba que se ha añadido el método atacar y equipar
cuchillo.equipar();
cuchillo.atacar('Zombi');

// Constructor para un tipo especializado de armas
var ArmaConMunicion = function(nombre, maxMunicion) {

  //Se ha de llamar a la clase padre pasándole el contexto this y el nombre del arma como parámetro
  Arma.call(this, nombre);
  
  //Se añaden o modifican las propiedades necesarias
  this.potencia = 2;
  this.maxMunicion = maxMunicion;
  this.municion = maxMunicion;
};

//Se establece como prototipo de ArmaConMunicion el prototipo del padre
ArmaConMunicion.prototype = Object.create(Arma.prototype);
//Corregimos el constructor ya que se ha creado a partir del objeto padre
ArmaConMunicion.prototype.constructor = ArmaConMunicion;

//Aumantamos el prototipo de ArmaConMunición con nuevos métodos
ArmaConMunicion.prototype.atacar = function(objetivo) {
  if (this.municion>0) {
    this.municion--;
    console.log('Bang! '+this.nombre+' causa ' + this.potencia + ' puntos de daño a ' + objetivo);    
  } else {
    console.log('Click! no queda munición!');
  }
};

ArmaConMunicion.prototype.recargar = function() {
  this.municion = this.maxMunicion;
  console.log(this.nombre
 + ' recargada');
};

var pistola = new ArmaConMunicion('Pistola', 2);
pistola.equipar();
pistola.atacar('Zombi');
pistola.atacar('Zombi');
pistola.atacar('Zombi');
pistola.recargar();
pistola.atacar('Zombi');

//Creamos una nueva instancia de ArmaConMunicion y aumentamos con el método atacar.
var escopetaRecortada = new ArmaConMunicion('Escopeta con cañones recortados', 2);
escopetaRecortada.atacar = function(objetivo) {
    console.log('Boom! '+this.nombre+' causa ' + this.potencia * 3 + ' puntos de daño a ' + objetivo);    
};

// Comprobamos el funcionamiento
escopetaRecortada.atacar('Zombi');
escopetaRecortada.atacar('Zombi');
escopetaRecortada.atacar('Zombi');

pistola.atacar('Zombi');

console.log('Es cuchillo una instancia de Object?', cuchillo instanceof Object);
console.log('Es pistola una instancia de Object?', pistola instanceof Object);
console.log('Es escopeta recortada una instancia de Object?', escopetaRecortada instanceof Object);
console.log('Es cuchillo una instancia de Arma?', cuchillo instanceof Arma);
console.log('Es pistola una instancia de Arma?', pistola instanceof Arma);
console.log('Es escopetaRecortada una instancia de Arma?', escopetaRecortada instanceof Arma);
console.log('Es cuchillo una instancia de ArmaConMunicion?', cuchillo instanceof ArmaConMunicion);
console.log('Es pistola una instancia de ArmaConMunicion?', pistola instanceof ArmaConMunicion);
console.log('Es escopetaRecortada una instancia de ArmaConMunicion?', escopetaRecortada instanceof ArmaConMunicion);

