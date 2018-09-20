"use strict";
//Obteniendo datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function () {

    fetch('http://jsonplaceholder.typicode.com/posts') //traemos un chingo de datos
        .then(data => data.json()) //performasear los datos
        .then(data => {
            posts = data;
            mostrarDatos(posts)
        })

});

function mostrarDatos(posts) {
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}