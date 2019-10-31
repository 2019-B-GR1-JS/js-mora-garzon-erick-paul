//5-1-3-2-4
//no 1: 5-3-2-4
const fileSystem = require('fs');
console.log(('1) Iniciando'));
/*fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
    //() => { //callback
        //console.log('3) Leyendo archivo');
        callbackLeerArchivo,
    //}
);
console.log('2) Finalizando');

fileSystem.readFile(
    './04-funciones.js',
    'utf8',
    //() => { //callback
    //console.log('3) Leyendo archivo');
    callbackLeerArchivo,
    //}
);

fileSystem.readFile(
    './03-operadores.js',
    'utf8',
    //() => { //callback
    //console.log('3) Leyendo archivo');
    callbackLeerArchivo,
    //}
);

fileSystem.readFile(
    './02-objetoss.js',
    'utf8',
    //() => { //callback
    //console.log('3) Leyendo archivo');
    callbackLeerArchivo,
    //}
);

fileSystem.readFile(
    './01-variabless.js',
    'utf8',
    //() => { //callback
    //console.log('3) Leyendo archivo');
    callbackLeerArchivo,
    //}
);

fileSystem.readFile(
    './02-objetos.js',
    'utf8',
    //() => { //callback
    //console.log('3) Leyendo archivo');
    callbackLeerArchivo,
    //}
);

fileSystem.readFile(
    './01-variables.js',
    'utf8',
    //() => { //callback
    //console.log('3) Leyendo archivo');
    callbackLeerArchivo,
    //}
);


function callbackLeerArchivo(error, datos) {
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error:error,
            error,
        })
    }
    else{
        console.log('Datos: ',datos);
    }
    console.log('3) Leyendo archivo')

}

*/


fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
    (error, datos) => {
        if (error) {
            console.error({
                mensaje: 'Error leyendo archivo',
                // error: error,
                error,
            })
        } else {
            console.log('Datos: ', datos);
            fileSystem.readFile(
                './04-funciones.js',
                'utf8',
                (error, datos) => {
                    if (error) {
                        console.error({
                            mensaje: 'Error leyendo archivo',
                            // error: error,
                            error,
                        })
                    } else {
                        console.log('Datos: ', datos);
                        fileSystem.readFile(
                            './03-operadores.js',
                            'utf8',
                            (error, datos) => {
                                if (error) {
                                    console.error({
                                        mensaje: 'Error leyendo archivo',
                                        // error: error,
                                        error,
                                    })
                                } else {
                                    console.log('Datos: ', datos);
                                    fileSystem.readFile(
                                        './02-objetos.js',
                                        'utf8',
                                        (error, datos) => {
                                            if (error) {
                                                console.error({
                                                    mensaje: 'Error leyendo archivo',
                                                    // error: error,
                                                    error,
                                                })
                                            } else {
                                                console.log('Datos: ', datos);
                                                fileSystem.readFile(
                                                    './01-variables.js',
                                                    'utf8',
                                                    (error, datos) => {
                                                        if (error) {
                                                            console.error({
                                                                mensaje: 'Error leyendo archivo',
                                                                // error: error,
                                                                error,
                                                            })
                                                        } else {
                                                            console.log('Datos: ', datos);
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        }
    }
);

function callbackLeerArchivo(error, datos) {
    if (error) {
        consol.error({
            mensaje: 'Error leyendo archivo',
            // error: error,
            error,
        })
    } else {
        console.log('Datos: ', datos);
    }
}


console.log('2) Finalizando');