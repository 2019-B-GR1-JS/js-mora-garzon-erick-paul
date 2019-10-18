//inmutables no cambia
const arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log('arreglo', arreglo);
arreglo.push(11);
console.log('arreglo', arreglo);

/*
let arregloNumber = [1,2,3,4];
arregloNumber = ["a","b","c"];
arregloNumber = [true,false,true,false];
arregloNumber = [1,"a",true,false];
arregloNumber = 1;
*/
function suma(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    else{
        return 0;
        //throw new Error("Error");
    }
}
suma(1,2);

arreglo.pop();
console.log('arreglo', arreglo);

arreglo.splice(1,0,1.1);
console.log('arreglo', arreglo);

arreglo.unshift(0);
console.log('arreglo', arreglo);

const respuestaIndice = arreglo.indexOf(4);
console.log('respuesta Indice:', respuestaIndice);

arreglo.splice(respuestaIndice,1);
console.log('arreglo', arreglo);
