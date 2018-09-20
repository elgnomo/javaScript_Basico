"use strict"
//iterando arreglos con forEach

var platillos = ["ceviche", "tacos", "pasta"];

// platillos.forEach( platillo => console.log(platillo) )

platillos.forEach((platillo, index) => console.log(index, platillo))
//primero funcion platillo
//primero dato despues indice
//recibe una funcion, recomiendan arrow fuctiion