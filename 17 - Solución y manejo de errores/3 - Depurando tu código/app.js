"use strict";
//herencia de  metódos y propiedades

class Producto { //clase padre
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    static get infoTienda() { //este disponible aunque no se haga instancia
        console.log('Productos de la tienda Gnomo');
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia() {
        return this.tiempoGarantia;
    }
}

class Pantalla extends Producto { //para que puede extender es hijo
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie) //dentro del constructor del hijo
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido() {
        this.garantia = 1;
        console.log('La pantalla ${this.marca} se ha encendido');
    }

    volumen() {
        console.log("El volumen se ha modificado");
    }

    info() {
        console.log("La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas");
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new Pantalla('13579', 'Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('24680', 'Origin', 'Artemis', 80);