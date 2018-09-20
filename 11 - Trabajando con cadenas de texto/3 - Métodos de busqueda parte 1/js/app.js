"use strict"
//métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf
// resultado = mensaje.indexOf("aprendiendo");
// lastIndexOf
//resultado = mensaje.lastIndexOf("aprendiendo");
// search:
//resultado = mensaje.search("aprendiendo");
// search | Expresión regular
resultado = mensaje.search(/ja/i);
//No importa si es mayuscula o minuscila

console.log(resultado);