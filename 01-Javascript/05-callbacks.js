
function calculo(numUno, numDos, funcionCalculo){
    const total = numUno + numDos;
    return funcionCalculo(numUno, numDos, total);
}

const numeroUno = 3;
const numeroDos = 5;
const suma = (numUno, numDos, total)=>{
    return total;
};
console.log(suma); //Definicion function
console.log(suma( //Ejecucion function
    1,
    2,
    3));

const resultadoCalculo = calculo(
    numeroUno,
    numeroDos,
    //suma
    (numUno,numDos,total)=>{
        return total/2;
    }
);

console.log(resultadoCalculo);

function forEachLocal(arreglo, funcion) {
    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++){
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );

    }
    console.log('arreglo',arreglo);
}

const arregloNumerosUno = [1,2,3,4,5,6];

console.log(forEachLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        console.log('for each valorActual',valorActual);
    }
    ));

function forMapLocal(arreglo, funcion, valor) {
    const arregloMapeado = [];

    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
        arregloMapeado[indiceInicial]=arreglo[indiceInicial]+valor;

    }
    return arregloMapeado;
}



function forFilterLocal(arreglo, funcion, valor) {
    const arregloFiltrado = [];
    let indice2 = 0;
    for(let indiceInicial = valor; indiceInicial< arreglo.length; indiceInicial++) {
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
        arregloFiltrado[indice2] = arreglo[indiceInicial];
        indice2++;
    }
    return arregloFiltrado;
}



function forReduceLocal(arreglo, funcion, valorInicial){

    let valor = 0;
    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        funcion(
            valorInicial,
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
        valor = valorInicial + arreglo[indiceInicial];
    }
    return valor;
}





console.log('map arreglo', forMapLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        //console.log('map arreglo',arreglo);
    },
    10
));

console.log('filter arreglo', forFilterLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        //console.log('filter arreglo',arreglo);

    },
    3
));

console.log('reduce arreglo', forReduceLocal(arregloNumerosUno,
    (valorInicial, valorActual, indice, array)=>{
        //console.log('filter arreglo',arreglo);

    },
    0

));