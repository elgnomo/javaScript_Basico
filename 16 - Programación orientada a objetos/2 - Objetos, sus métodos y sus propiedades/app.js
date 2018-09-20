"use strict";
//objetos, sus métodos y sus propiedades

class Pantalla {
    constructor(marca, modelo, pulgadas) { //propiedades
        this.marca = marca; //Asignacion directamente 
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() { //metodos
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) { //Definimos funcion que recibe dato, y con este mismo asigamos el  valor
        this.kgs = value.trim();
    }

    get peso() { //retorna el dato
        return this.kgs;
    }
}

const tvSala = new Pantalla('Master', 'Oasis', 55); //Se le manda parametros
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

// function Pantalla(marca, modelo, pulgadas) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.pulgadas = pulgadas;
// }


// Pantalla.prototype.encendido = function () {
// console.log(`La pantalla ${this.marca} se ha encendido`);  
// };


// Pantalla.prototype.volumen = function () {
// console.log(`El volumen se ha modificado`);    
// };

// Pantalla.prototype.info = function () {
// console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);     
// }