
var Arma = function(nombre, potencia) {
  this.nombre = nombre;
  this.potencia = potencia;
  this.atacar = function(objetivo) {
    console.log('Zas! ataca con ' + this.nombre + ' y causa ' + this.potencia + ' puntos de daño a ' + objetivo);
  };
};

var ArmaConMunicion = function(nombre, potencia, municion) {
  Arma.call(this, nombre, potencia); //this.nombre = nombre; this.potencia = potencia; this.atacar = funcion atacar de Arma.
  this.municion = municion;

  this.atacar = function(objetivo) {
    if (this.municion > 0) {
      console.log('Bang! ataca con ' + this.nombre + ' y causa ' + this.potencia + ' puntos de daño a ' + objetivo);
      this.municion--;
    } else {
      console.log('Click! no hay munición!');
    }
  };
};

var Persona = function(nombre) {
  this.nombre = nombre;
  this.atacar = function(objetivo) {
    if (this.arma) {
      console.log(this.nombre+' va a atacar');
      this.arma.atacar(objetivo);
    } else {
      console.log('No se puede atacar porque no hay arma equipada!');
    }
  };

  this.equipar = function(arma) {
    console.log(this.nombre + ' ha equipado ' + arma.nombre);
    this.arma = arma;
  };

};

var ricardo = new Persona('Ricardo');
var cuchillo = new Arma('Cuchillo', 2);
var pistola = new ArmaConMunicion('Pistola', 3, 2);

ricardo.atacar('Zombi');
ricardo.equipar(cuchillo);
ricardo.atacar('Zombi');
ricardo.equipar(pistola);
ricardo.atacar('Zombi');
ricardo.atacar('Zombi');
ricardo.atacar('Zombi');

