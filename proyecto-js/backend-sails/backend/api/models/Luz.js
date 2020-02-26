/**
 * Luz.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numLuz:{
      type:'string',
      required: true,
      unique: true
    },

    estado:{
      /*type: 'string',
      isIn:[
        'apagado',
        'encendido'
      ]*/
      type: "boolean",
      defaultsTo: false
    },

    idHabitacion: {
      model: 'Habitacion' //Modelo Papa
    }

  },

};

