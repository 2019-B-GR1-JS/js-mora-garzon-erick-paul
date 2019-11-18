
// const numero = 0;
const numero: number = 0;
//const nombre: string = 0; //en typescript no se puede, pero en javascriot si
//let nombre = "Erick";

//Duck Typing
//infiere el tipo de dato
//si camina, vuela, suena, parece pato, entonces es pato
let nombre = "Erick";
//nombre = 1; //error
let fecha: Date; //Date -> Clase
                // Tipo de dato "Date"
fecha = new Date(2012,2,3);
//fecha = 1;
//fecha = "1";

let erick:Estudiante; //Date -> interfaz
                    //Tipo de dato "estudiante"

erick = {
    nombre: "Erick",
    edad: 23,
};

interface  Estudiante {

    nombre:string;
    edad: number;

}

function holaMundo():void {
    console.log('Hola mundo');
}

function  mensaje(nombre: string):void {
    console.log('Hola',nombre);
}

function caluladora(
    numUno: number,
    ...numeros: any[]
): number {
    console.log('Hacer calculadora', nombre);
    return numUno;
}

function universidad(
    nombre: string,
    edad?: number, //opcional
):string {
    return `${nombre} Edad: ${edad}`;
}

universidad("Erick");
universidad("Erick",2);//no mandar mas parametros de los establecidos o error

interface Departamento {
    nombre:string;
    id:number;
    facultad: Facultad | number: numero;
}

interface Facultad {
    nombre: string;
    id: number;
}


const departamentoSistemas = {
    nombre: "Sistemas",
    id:1,
    facultad:{  //facultad esta relacionada
        nombre: "Sistemas",
        id:1
    }
};

const departamentoSistemasSinRelaciones: Departamento = {
    nombre: "Sistemas",
    id:1,
    facultad:1
};

function imprimirDepartamento(
    departamento:Departamento
){
    const departamentoId = departamento.facultad as number + 1;
}