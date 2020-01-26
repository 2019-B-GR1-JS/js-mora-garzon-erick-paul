/**
 * Luz.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    estado:{
      type: 'string',
      isIn:[
        'apagado',
        'encendido'
      ]
    },

    idHabitacion: {
      model: 'Habitacion' //Modelo Papa
    }

  },

};

