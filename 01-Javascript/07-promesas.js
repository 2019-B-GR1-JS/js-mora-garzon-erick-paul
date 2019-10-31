//07-promesas

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

leerArchivo('./05-callbacks.js')
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
    );

console.log('leer archivo',leerArchivo('./05-callbacks.js'));

