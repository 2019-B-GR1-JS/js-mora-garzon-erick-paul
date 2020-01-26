/**
 * HabitacionPorUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idHabitacion: {
      model: 'Habitacion' //Modelo Papa
    },
    idUsuario: {
      model: 'Usuario' //Modelo Papa
    }

  },

};

