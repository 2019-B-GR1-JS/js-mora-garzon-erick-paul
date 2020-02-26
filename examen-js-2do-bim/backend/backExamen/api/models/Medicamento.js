/**
 * Medicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numero: {
      type: 'string'
    },
    nombre: {
      type: 'string'
    },
    composicion: {
      type: 'string'
    },
    uso: {
      type: 'string'
    },
    fechaCaducidad: {
      type: 'string'
    },
    numeroPastillas: {
      type: 'string'
    },
    precio: {
      type: 'string'
    },
    idPaciente: {
      model: 'paciente',
      required: true
    }
  },

};
