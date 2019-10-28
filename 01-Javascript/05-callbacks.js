//05-callbacks
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
        console.log('for each valorActual: ',valorActual);
    }
    )
);

function forMapLocal(arreglo, funcion) {
    const arregloMapeado = [];

    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        arregloMapeado.push(
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        )
    );
    }
    return arregloMapeado;
}


function forFilterLocal(arreglo, funcion) {
    const arregloFiltrado = [];

    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        if(funcion(arreglo[indiceInicial])===true){
            arregloFiltrado.push(arreglo[indiceInicial])
        }
    }
    return arregloFiltrado;
}


function forReduceLocal(arreglo, funcion, valorInicial){
    let valor = valorInicial;
    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        valor = funcion(valor,arreglo[indiceInicial]);
        //console.log('valor:', valor);
    }
    return valor;
}


function forSomeLocal(arreglo, funcion){

    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        if(funcion(arreglo[indiceInicial])===true){
            return true;
        }/*else
        {
            return false;
        }*/
    }
    return false;
}


function forEveryLocal(arreglo, funcion){

    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        if(funcion(arreglo[indiceInicial])===false){
            return false;
        }/*else
        {
            return true;
        }*/
    }
    return true;
}


function forFindLocal(arreglo, funcion){
    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        if(funcion(arreglo[indiceInicial])===true){
            return arreglo[indiceInicial];
        }/*else
        {
            return undefined;
        }*/
    }
    return undefined;
}


function forFindIndexLocal(arreglo, funcion){
    for(let indiceInicial = 0; indiceInicial< arreglo.length; indiceInicial++) {
        if(funcion(indiceInicial)===true){
            return arreglo[indiceInicial];
        }/*else
        {
            return -1;
        }*/
    }
    return -1;
}


console.log('map arreglo :', forMapLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        return valorActual+3;
    }
));

console.log('filter arreglo :', forFilterLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        return valorActual>3;
    }
));

console.log('reduce arreglo :', forReduceLocal(arregloNumerosUno,
    (valorInicial, valorActual, indice, array)=>{
        return valorInicial + valorActual;
    },3
));

console.log('some :', forSomeLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        return valorActual>2 && valorActual<5;
    }
));

console.log('every :', forEveryLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        return valorActual>0;
    }
));

console.log('find :', forFindLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        return valorActual === 4;
    }
));

console.log('find index :', forFindIndexLocal(arregloNumerosUno,
    (valorActual, indiceActual, arreglo)=>{
        return valorActual === 4;
    }
));
