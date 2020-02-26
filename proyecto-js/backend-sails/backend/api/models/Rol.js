/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreRol:{
      type:'string',
      unique: true,
      required: true,
      minLength: 3,
      maxLength: 20
    },
    rolesPorUsuario:{
      collection:'rolPorUsuario', // Modelo Hijo
      via:'idRol' //Nombre del Campo foreign key
    }

  },

};

