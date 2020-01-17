/**
 * Tendencia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numero:{
      type:'string'
    },
    tema:{
      type: 'string'
    },
    tweets:{
      type: 'string'
    }

  },

};

