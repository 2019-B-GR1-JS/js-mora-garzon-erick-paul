/**
 * Notificacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    perfil:{
      type:'string'
    },
    tipo:{
      type: 'string'
    },
    texto:{
      type: 'string'
    }

  },

};

