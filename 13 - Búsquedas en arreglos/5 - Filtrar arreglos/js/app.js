"use strict"
//filtrar arreglos

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
];

var resultado = null;
//resultado =  menu.find(platillo => platillo.pais == 'México');
//Solo la primera insidencia
resultado = menu.filter(platillo => platillo.pais == 'México');
//Se trae todos :)
console.log(resultado);