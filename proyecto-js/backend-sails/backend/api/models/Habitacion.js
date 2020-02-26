/**
 * Habitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numHabitacion:{
      type:'string',
      required: true,
      unique: true
    },
    estado:{
      type: 'string',
      isIn:[
        'ocupado',
        'disponible'
      ]
    },
    idTipoHabitacion: {
      model: 'TipoHabitacion' //Modelo Papa
    },
    idPiso: {
      model: 'Piso' //Modelo Papa
    },
    luces:{
      collection:'luz', // Modelo Hijo
      via:'idHabitacion' //Nombre del Campo foreign key
    },
    usuariosPorHabitacion:{
      collection:'habitacionPorUsuario', // Modelo Hijo
      via:'idHabitacion' //Nombre del Campo foreign key
    }

  },

};

