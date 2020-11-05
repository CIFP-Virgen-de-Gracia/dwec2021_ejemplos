/* JS es un lenguaje basado en prototipos.
 * Cuando se intenta acceder a una propiedad o a un método se busca:
 * - Instancia del objeto
 * - Prototipo del objeto
 * - Prototipo del prototipo
 * ...
 * - Object.Prototipo
 * 
 * Un constructor en JavaScript es una función que crea un objeto. Por convención, 
 * el nombre de esta función siempre empieza con mayúsculas y la creación del objeto 
 * se realiza con el operador new.
 * 
 * Cuando se utiliza una función como constructor , el prototipo del objeto 
 * creado referencia al de la función constructora, por lo que este hereda todas 
 * las propiedades y métodos establecidos en el prototipo. Por consiguiente, sólo 
 * los objetos generados a partir de este patrón tienen acceso al prototipo 
 * automáticamente.
 */

var Persona = function (nombre) {
    this.nombre = nombre;
};

Persona.prototype.saludar = function () {
    console.log('Hola, mi nombre es ' + this.nombre);
};

var jugador = new Persona('Ricardo');

jugador.saludar();


