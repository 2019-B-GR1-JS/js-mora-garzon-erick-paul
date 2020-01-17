/**
 * Tweet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    perfil:{
      type:'string'
    },
    nombre:{
      type:'string'
    },
    usuario:{
      type: 'string'
    },
    tiempo:{
      type: 'string'
    },
    texto:{
      type: 'string'
    },
    imagen:{
      type: 'string'
    },
    comentarios:{
      type: 'number'
    },
    retweets:{
      type: 'number'
    },
    gusta:{
      type: 'number'
    }

  },

};

