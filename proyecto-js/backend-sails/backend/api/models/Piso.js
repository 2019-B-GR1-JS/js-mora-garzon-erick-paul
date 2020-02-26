/**
 * Piso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombrePiso:{
      type:'string',
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 20
    },

    habitaciones:{
      collection: 'habitacion',
      via: 'idPiso'
    }

  },

};

