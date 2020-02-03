/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

//Importar modulo nodejs (usarlo)
//const modulo = require ('moduloRaspberry');

  const axios = require('axios');
const moduloRaspberry = {
  calcularProximidad: function (){
    return Math.random() * (10 - 0) + 0;

  }
};

module.exports.bootstrap = async function() {

  setInterval( //Ejecutar lo mismo cada dos segundos
    async ()=>{
      const valor = moduloRaspberry.calcularProximidad();
      console.log('Valor proximidad: ', valor);
      //1337 -> iot
      //1338 -> backend
      //POST http://localhost:1338/MonitoreoMovimiento {'valor':valor}

      const respuestaServidor = await axios
        .post('/http://localhost:1338/MonitoreoMovimiento',
          {
            valor: valor
          }
        );

          console.log('respuestaServidor', respuestaServidor);



    },
    2000 // 2 segundos
  );


};
