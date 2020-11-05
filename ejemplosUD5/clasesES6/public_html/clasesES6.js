

class Criatura {
  constructor(nombre) {
    this._nombre = nombre;
    this._movimiento = 10;
    this._potencia = 1;
  };

  //No son métodos tradicionales, sino propiedades computadas
  get nombre(){
      return this._nombre;
  };
  
  set nombre(n){
      this._nombre = "El nombre es: "+n;
  };
  
  get movimiento() {
      return this._movimiento;
  }
  
  set movimiento(m) {
      this._movimiento = m;
  }
  
  get potencia() {
      return this._potencia;
  };
  
  set potencia(p) {
      this._potencia = p;
  };
  
  caminar() {
    console.log(this.nombre + ' camina ' + this.movimiento + ' metros');
  };

  atacar(objetivo) {
    console.log(this.nombre + ' ataca a ' + objetivo.nombre + ' y la causa ' + this.potencia + ' puntos de daño');
  };
  
}

class Perro extends Criatura {
  constructor() {
    super('Perro');
    this.potencia = 2;
  };
  
  

  saltar() {
    console.log(this.nombre + ' salta ' + this.movimiento / 5 + ' metros');
  };
}

class PerroZombie extends Perro {
  constructor() {
    super();
    this.nombre = 'Perro Zombie'; //this._nombre va a contener El nombre es: Perro Zombie.
  };

  saltar() {
    console.log(this.nombre + ' intenta saltar... pero no puede');
  };
}

var perro = new Perro();
var perroZombie = new PerroZombie();

perro.caminar();
perro.atacar(perroZombie);
perro.saltar();
perroZombie.atacar(perro);
perroZombie.saltar();
perroZombie.caminar();

console.log('perroZombie es una instancia de Object?', perroZombie instanceof Object);
console.log('perroZombie es una instancia de Criatura?', perroZombie instanceof Criatura);
console.log('perroZombie es una instancia de Perro?', perroZombie instanceof Perro);
console.log('perroZombie es una instancia de PerroZombie?', perroZombie instanceof PerroZombie);

