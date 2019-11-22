//07-promesas
/*
const fs = require('fs'); //fs=filesystem


const sumarDosNumeros = (correcto) => {
    return new Promise(
        (resolve, reject) => {
            if (correcto) {
                resolve('YETI');
            } else {
                reject('BUU');
            }
        }
    );
};


const promesaSumarDosNumeros = sumarDosNumeros(5);
console.log('01) iniciar');

promesaSumarDosNumeros.then(
    (ok) => {
        console.log('ok', ok);
    }
).catch(
    (error) => {
        console.log('error', error);
    }
);
console.log('02) terminar');


const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve, rej -> reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => { //Callback
                    if (error) {
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
            );
        }
    );
};

leerArchivo('./05-callbacksbtgb.js')
    .then(
        (contenidoCallbacks)=>{
            console.log(contenidoCallbacks);
            return leerArchivo('./04-funciones.js')
        }
    )
    .then(
        (contenidoFuncionesjs)=>{
            console.log(contenidoFuncionesjs);
            return leerArchivo('./03-operadores.js')
        }
    )
    .catch(
        (error)=>{
            console.error('Error',error);
        }
    );

console.log('leer archivo',leerArchivo('./05-callbacks.js'));

*/

// 07-promesas.js
const fs = require('fs');

const sumarDosNumeros = (correcto) => {
    return new Promise(
        (resolve, reject) => {
            if (correcto) {
                resolve('YEII');
            } else {
                reject('BUUUU');
            }
        }
    );
};

const promesaSumarDosNumeros = sumarDosNumeros(true);
console.log('01) Iniciar');
promesaSumarDosNumeros
    .then(
        (ok) => {
            console.log('Ok', ok);
        }
    )
    .catch(
        (error) => {
            console.log('Error', error);
        }
    );
console.log('02) Terminar');

const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve, rej -> reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => { // Callback
                    if (error) {
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
            );
        }
    );
};

leerArchivo('./05-callbackrrs.js')
    .then(
        (contenidoCallbackjs)=>{
            console.log(contenidoCallbackjs);
            return leerArchivo('04-funciones.js') // PROMESA
        }
    )
    .then(
        (contenidoFuncionesjs)=>{
            console.log(contenidoFuncionesjs);
        }
    ).catch(
    (error)=>{
        console.error('Error',error);
    }
);

const nombreArchivo = './05-callbacks.js';
//Cuando sea sincrono
//try catch
console.log('Inicia sincrono');
try{
    const contenidoArchivo = fs.readFileSync(nombreArchivo,'utf-8');
        //console.log(contenidoArchivo);
    console.log('se leyo sincronico');

}catch (error) {
    console.error('Error: ', error);
}
console.log('Termina sincrono');

//transformar una promesa a codigo sincrono
//function o function anonymous

//1) async (permite usar codigo asincrono dentro de la funcion)
//2) Para transformar promesa -> sincrono
// "await"

async function leerArchivoSync() {
    try{
        const contenido = await leerArchivo(nombreArchivo); //promesa
        console.log(contenido);
        console.log('Leimos con async await');
        return 1;
    }catch (error) {
        console.log('error',error);
        return 0;
    }
}
leerArchivoSync()
    .then(
        (numero)=>{
            console.log(numero); //1
        }
    ).catch(
    (numero)=> {
        console.log(numero); //0
    }
); //promesa