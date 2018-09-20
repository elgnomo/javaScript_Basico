"use strict"
//Condición IF-ELSE-IF

var valorUno = 1;
var valorDos = 2;
var resultado = "Sin datos";


if (valorUno > valorDos) {
    resultado = "La primer condición se cumplió";
} else if (valorDos == valorUno) {
    resultado = "La segunda condición se cumplió";
} else if (valorDos == valorUno) {
    resultado = "La segunda condición se cumplió";
} else if (valorDos >= valorUno) {
    resultado = "La segunda condición se cumplió";
} else if (valorDos <= valorUno) {
    resultado = "La segunda condición se cumplió";
} else if (valorDos != valorUno) {
    resultado = "La segunda condición se cumplió";
} else {
    resultado = "No se cumplieron las condiciones";
}

console.log("El resultado de la evaluación if-else-if es: ", resultado);