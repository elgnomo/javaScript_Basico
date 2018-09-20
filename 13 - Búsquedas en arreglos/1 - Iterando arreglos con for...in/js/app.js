"use strict"
//iterando arreglos con for...in

var platillos = ["ceviche", "tacos", "pasta"];

for (let platillo in platillos) { //Valor de uno en uno
    console.log(platillos[platillo])
}

for (let i in platillos) { //Valor de uno en uno
    console.log(platillos[i])
}