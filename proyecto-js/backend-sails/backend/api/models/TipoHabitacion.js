/**
 * TipoHabitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreTipo:{
      type:'string',
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20
    },
    habitaciones:{
      collection: 'habitacion',
      via: 'idTipoHabitacion'
    }

  },

};

