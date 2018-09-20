"use strict"
//Operadores de concatenación

var valorUno = 1;
var valorDos = 2;

var nombre = "Efrain";
var alias = "Gnomo";

// concatenacion de numeros
var concatNumeros = valorUno + valorDos;
console.log("Los números " + valorUno + " y " + valorDos + " usados como números concatenados hacen una suma igual a: ", concatNumeros);

// concatenacion de cadenas de text
var concatTexto = nombre + " " + alias;
console.log("Los textos " + nombre + " y " + alias + " se unen para formar: ", concatTexto);

// concatenacion de numeros como text
var concatNumComoTxt = "2" + "8";
console.log("Los números 2 y 8 usados como texto se unen para formar: ", concatNumComoTxt);

// concatenacion de text y numero
var concatTxtNum = valorUno + "8";
console.log("El número " + valorUno + " usado como número y 8 como texto se unen para formar: ", concatTxtNum);