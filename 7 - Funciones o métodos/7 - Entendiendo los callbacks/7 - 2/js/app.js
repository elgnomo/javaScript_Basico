"use strict";

/* Ejemplo 1
function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function () {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}

asyncSqrt(2, function (value, result) {
    console.log('END execution with value =', value, 'and result =', result);
});
console.log('COMPLETED ?');*/

/*
    1. Sumar 2 números.
    2. El resultado elevarlo al cuadrado.
    3. El resultado dividirlo entre 2.
    4. El resultado sustraerle 100.
    5. El resultado validar si es mayor a 0.
    
*/
var call1;
var call2;

function operaciones() {
    call1 = parseInt(document.getElementById("valorUno").value);
    call2 = parseInt(document.getElementById("valorDos").value);
    sumar(call1, call2, callbackSumar);
    // sumar(call1, call2, function (resultadoSumar) {
    //     console.log("Suma de 2 números ", resultadoSumar);
    //     cuadrado(resultadoSumar, function (resultadoCuadrado) {
    //         console.log("Cuadrado de la suma: ", resultadoCuadrado);
    //         dividir(resultadoCuadrado, function (resultadoDividir) {
    //             console.log("Division entre 2: ", resultadoDividir);
    //             sustraer(resultadoDividir, function (resultadoSustraer) {
    //                 console.log("Sustraer 100: ", resultadoSustraer);
    //                 esMayorCero(resultadoSustraer, function (resultadoFinal) {
    //                     console.log(resultadoFinal);
    //                 })
    //             })
    //         })
    //     })
    // });
}

function sumar(num1, num2, callback) {
    callback(num1 + num2);
}

function cuadrado(num, callback) {
    callback(num * num);
}

function dividir(num, callback) {
    callback(num / 2);
}

function sustraer(num, callback) {
    callback(num - 100);
}

function esMayorCero(num, callback) {
    if (num > 0) {
        callback("Mayor a 0");
    } else {
        callback("Menor o igual a 0")
    }
}

function callbackSumar(resultadoSumar) {
    console.log("Suma de 2 numeros: ", resultadoSumar);
    cuadrado(resultadoSumar, callbackCuadrado)
}

function callbackCuadrado(resultadoCuadrado) {
    console.log("Cuadrado de la suma: ", resultadoCuadrado);
    dividir(resultadoCuadrado, callbackDividir);
}

function callbackDividir(resultadoDividir) {
    console.log("Division entre 2: ", resultadoDividir);
    sustraer(resultadoDividir, callbackSustraer)
}

function callbackSustraer(resultadoSustraer) {
    console.log("sustraer 100: ", resultadoSustraer);
    esMayorCero(resultadoSustraer, callbackResultadoFinal);
}

function callbackResultadoFinal(resultadoFinal) {
    console.log(resultadoFinal);
}


// sumar(call1, call2, function (resultadoSumar) {
//     console.log("Suma de 2 números ", resultadoSumar);
//     cuadrado(resultadoSumar, function (resultadoCuadrado) {
//         console.log("Cuadrado de la suma: ", resultadoCuadrado);
//         dividir(resultadoCuadrado, function (resultadoDividir) {
//             console.log("Division entre 2: ", resultadoDividir);
//             sustraer(resultadoDividir, function (resultadoSustraer) {
//                 console.log("Sustraer 100: ", resultadoSustraer);
//                 esMayorCero(resultadoSustraer, function (resultadoFinal) {
//                     console.log(resultadoFinal);
//                 })
//             })
//         })
//     })
// });