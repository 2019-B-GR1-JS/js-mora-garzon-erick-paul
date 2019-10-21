function imprimirMensaje(mensaje){
    //console.log("Mensaje");
    //console.log(`Mensaje ${mensaje}`); //mesaje is undefined
    console.log("Mensaje "+ mensaje);
    //no hay return
}

const respuesta = imprimirMensaje({a:1});
console.log(respuesta); // void -> undefined

//ingresar unicamente string a la funcion
function imprimirMensaje(mensaje){
    if(typeof mensaje === 'number' ||
    typeof mensaje === 'string'){
        console.log(`Mensaje ${mensaje}`);
    }else
    {
        console.error("Error");
    }
    //console.log("Mensaje");
    //console.log(`Mensaje ${mensaje}`); //mesaje is undefined si la funcion es void
    //console.log("Mensaje "+ mensaje);
    //no hay return
}

function imprimirMensaje(mensaje){
    if(typeof mensaje === 'number' ||
        typeof mensaje === 'string'){
        const impresion = `Mensaje ${mensaje}`;
        console.log(impresion);
        return impresion;
    }else
    {
        console.error("Error");
    }

}

function sumarDosElementos(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}
console.log(
    sumarDosElementos(1,6)
);
/*
function sumarElementos(numeroUno, ...otro){ //otro es un arreglo [2,3,4,5]
    console.log(otro);
}
sumarElementos(1,2,3,4,5);
*/

// ... -> destructurar parametros
function sumarElementos(numeroUno, ...arregloParametrosInfinitos){ //otro es un arreglo [2,3,4,5]
    if(arregloParametrosInfinitos){
        //arreglo.reduce((a,b)=>a+b,numeroUno);
        return arregloParametrosInfinitos
            .reduce((
                valorInicial, valorActual)=>{
                return valorInicial + valorActual;
                },
                numeroUno
            )
    }else {
        return numeroUno;
    }
}
const suma = sumarElementos(1,2,3,4,5);
console.log(suma);

const restar = function restarF(a,b) {
    return a-b;
};

function restar2(a,b) {
    return a-b;
};

const restar1 = function (a,b) { //se omite el nombre de la funcion
    return a-b;
};

//fat arrow function => anonymous function
const restar3 = (a,b) =>{
    return a-b;
};

const restar4 = {
    nombre:'restar',
    restarNumeros: (a,b)=>{ //anonymous function
        return a-b;
    },
    restarNumeros: function (a,b) {
        return a-b;
    }
};


console.log(restar(3,5));
console.log(restar2(3,5));
//console.log(restarF(3,5)); //no esta definido
console.log(restar1(3,5));
console.log(restar3(3,5));



const transformarAMayuscula = (letra) =>{
    return letra.toUpperCase();
};

const transformarAMayuscula2 = (letra) => letra.toUpperCase();
const transformarAMayuscula3 = letra => letra.toUpperCase();

//const filtrarArreglo = arreglo.filter(a => a.id>4);

const arregloNumerosUno = [1,2,3,4,5,6];
const arregloNumerosDos = [7,8,9,10,11,12];
const arregloUnido = [...arregloNumerosUno, ...arregloNumerosDos];
//destructurar el arreglo
sumarElementos(...arregloNumerosUno); //sumarElementos(1,2,3,4,5,6);
sumarDosElementos(...arregloNumerosUno);

//destructuracion de objetos
const objetoErick = {
    nombre: 'Erick',
};
const objetoMora = {
    apellido: 'Mora'
};
const objetoErickMora = {
  ...objetoErick,
  ...objetoMora,
  edad: 12,
};
//objetoErickMora.edad = 22;
//delete objetoErickMora.edad;

const oEMEnString = JSON.stringify(objetoErickMora); //transforma el objeto a un string json
console.log(oEMEnString);
const oEMClonado = JSON.parse(oEMEnString); //transforma string con formato json a objeto
console.log(oEMClonado);
oEMEnString.edad=22;
console.log(oEMClonado);
console.log(objetoErickMora);

function cambiarEdad(edad,objeto) {
    objeto.edad = edad;
    return objeto;

}

const clonadoEM ={
    ...objetoErickMora
};
clonadoEM.edad = 21;
console.log(clonadoEM);
console.log(objetoErickMora);

