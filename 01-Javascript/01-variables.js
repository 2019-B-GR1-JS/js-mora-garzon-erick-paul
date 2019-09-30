//JSON
// var nombre = "Erick";

//Mutable cambia NUNCA usar:
let nombre = "Erick";
nombre = "Paul";

//Inmutable: no se permite cambiar valor:
//const nombre2 = "Erick";
//nombre2 = 1;

const mensaje = `sdjhfbjhf`;

console.log(typeof nombre, 'nombre');
let numeros = 1;
console.log(typeof numeros, 'numeros');
numeros = 1.1;
console.log(typeof numeros, 'numeros');
let casado = false;
console.log(typeof casado, 'casado');
let hijos = null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');


//Condicion
//Truty
//Falsy

if ("") { //falsy
    console.log("Truty");
} else {
    console.log("Falsy");
}

if ("a") { //truty
    console.log("Truty");
} else {
    console.log("Falsy");
}

if (-1) { //truty
    console.log("Truty");
} else {
    console.log("Falsy");
}

if (0) { //falsy
    console.log("Truty");
} else {
    console.log("Falsy");
}

if (1) { //truty
    console.log("Truty");
} else {
    console.log("Falsy");
}

if (null) { //falsy
    console.log("Truty");
} else {
    console.log("Falsy");
}

if ({}) { //JSON vacio //truty
    console.log("Truty");
} else {
    console.log("Falsy");
}

if ([]) { //arreglo vacio //truty
    console.log("Truty");
} else {
    console.log("Falsy");
}

//objeto JSON

const erick = {
    "nombre": 'Erick',
    'apellido': "Mora",
    edad: 10,
    casado: false,
    hijos: null,
    hermana: {nombre: "Carolina"},
    mascotas:[
        {
            nombre:"Cachetes",
        }
    ],

};

console.log(erick.nombre); // Erick
console.log(erick.hermana); //{nombre: "Carolina"}
console.log(erick.mascotas[0].nombre); //Cachetes
erick.sueldo = 1.2;
erick["deudas"] = 10000;

console.log(erick); // imprime todos los elementos del objeto json
delete erick.hijos; // elimina el atributo hijos del objeto json
console.log(erick); // se imprime sin el atributo hijos
