"use strict"
//ventana de alerta

const video = document.querySelector('.ositoVideo');

video.addEventListener("ended", function () {
    alert("MENSAJE \n\n El video ha terminado");
});