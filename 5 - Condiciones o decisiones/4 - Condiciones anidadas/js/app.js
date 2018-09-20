"use strict"
//Condiciones anidadas

var valorUno = 1;
var valorDos = 2;
var valorTres = 3;
var resultado = "Sin datos";

if (valorUno > valorDos) {
	resultado = "La condición se cumplió";

	if (valorTres < valorDos) {
		if (valorTres < valorDos) {
			resultado = "Evaluación anidada verdadera";
		} else {
			resultado = "No se cumplió la evaluación anidada";
		}
	} else {
		resultado = "No se cumplió la evaluación anidada";
	}

} else {
	resultado = "No se cumplió la evaluación";
}

console.log("El resultado de la evaluación anidada es: ", resultado);