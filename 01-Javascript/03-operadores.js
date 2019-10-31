//03-operadores
const arreglo =[1,2,3,4,5,6,7,8,9,10];

for (const i in arreglo){ //indices
    console.log('I:',i);
}

for(const i of arreglo){ //valores
    console.log('I:',i);
}

const respuestaForEach = arreglo.forEach(
    function (valorActual,indiceActual,arreglo) {
        console.log('valor Actual',valorActual);
        console.log('indice Actual',indiceActual);
        console.log('arreglo',arreglo);

    }
);
console.log('respuesta for each:',respuestaForEach);




//devolver un arreglo donde a cada elemento se sume 5

const respuestaMap = arreglo.map( //Transformar -> mutar arreglo
    function (valorActual,indiceActual,arreglo) {
        return valorActual+5;

    }//devolver un elemento
); //devuelve un nuevo arreglo transformado
console.log('respuesta Map:',respuestaMap);
console.log('arreglo',arreglo);

const respuestaMap2 = arreglo.map(r => r + 5);
console.log('respuesta Map2:',respuestaMap2);
console.log('arreglo',arreglo);

//elementos mayores a 7

const respuestaFilter = arreglo.filter(
    function (valorActual,indiceActual,arreglo) {
        return valorActual>7;

    } // devolver expresion -> truty o falsy
); //nuevo arreglo -> filtrado
console.log('respuesta filter:',respuestaFilter);
console.log('arreglo',arreglo);

const respuestaSome = arreglo.some(
    function (valorActual,indiceActual,arreglo) {
        return valorActual>9 && valorActual < 11;

    } //
); //Devuelve -> booleano
console.log('respuesta some:',respuestaSome);
console.log('arreglo',arreglo);

const respuestaEvery = arreglo.every(
    function (valorActual,indiceActual,arreglo) {
        return valorActual>1;

    } //
); //Devuelve -> booleano
console.log('respuesta Every:',respuestaEvery);
console.log('arreglo',arreglo);

//((x/2) + 7) < 10
//concatenar operadores
const respuesta = arreglo.map(
    (x) => (x/2)+7).filter((y)=> y < 10);
console.log('respuesta :',respuesta);

const respuesta2 = arreglo.map(
    (x) => (x/2)+7).some((y)=> y < 10);
console.log('respuesta2 :',respuesta2);






const respuestaFind = arreglo.find(
    (valorActual, indice, arreglo) => {
        return valorActual === 10;
    }
);
console.log('respuestaFind :',respuestaFind);

const respuestaFindIndex = arreglo.findIndex(
    (valorActual) => {
        return valorActual === 10;
    }
);
console.log('respuestaFindIndex :',respuestaFindIndex);

const respuestaReduce = arreglo.reduce(
    (valorInicial, valorActual, indice, array) => {
        return valorInicial + valorActual;
    },2 //valor inicial
);
console.log('respuesta Reduce :',respuestaReduce);