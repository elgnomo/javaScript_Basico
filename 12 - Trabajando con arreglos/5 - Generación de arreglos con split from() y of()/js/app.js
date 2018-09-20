"use strict"
//generación de arreglos con split() from() y of()


//--- split()

// var mensaje = "ceviche, tacos, pasta";

// var platillos = mensaje.split(', ');

//--- Array.from();
var platillosHTML = Array.from(document.querySelectorAll('.platillos p')) //nos conectamos al html

var platillos = platillosHTML.map(platillo => platillo.textContent) //Iteracion automatica *platillo el nombre que quieras

//--- Array.of();

var platillos = Array.of("ceviche", "tacos", "pasta"); //creau un array

console.log(platillos)