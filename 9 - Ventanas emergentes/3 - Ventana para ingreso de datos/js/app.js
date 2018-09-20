"use strict"
//ventana para ingreso de datos

const video = document.querySelector('.ositoVideo');

video.addEventListener("ended", function () {
    let email = prompt("Escribe tu correo para ver mas videos", "ejemplo@correo.com");

    if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});