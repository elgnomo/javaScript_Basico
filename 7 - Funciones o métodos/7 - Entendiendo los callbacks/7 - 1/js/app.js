"use strict"
//Calllbacks

/*Ejemplo 1
function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3, function (resultado) {
    console.log('Suma', resultado)
},function (resultado) {
    console.log('Resta', resultado)
})
*/


/*Ejemplo 2
function funcionPrincipal(callback) {
    alert('hago algo y llamo al callback avisando que terminé');
    callback('Miguel');
}

funcionPrincipal(function (nombre) {
    alert('me llamo ' + nombre);
});
*/

function funcionPrincipal(callback1, callback2, callback3) {
    //código de la función principal
    callback1();
    //más código de la función principal
    callback2();
    //más código de la función principal
    callback3();
    //más código si fuera necesario
}

function callback1() {
    alert('primer callback');
}

function callback2() {
    alert('segundo callback');
}

function callback3() {
    alert('tercer callback');
}

funcionPrincipal(callback1, callback2, callback3);



// calcular(d1, d2, func, func)