/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required: true,
      minLength: 3,
      maxLength: 30
    },
    apellido:{
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 30
    },
    numCedula:{
      type: 'string',
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 15
    },
    telefono:{
      type: 'string',
      minLength: 5,
      maxLength: 20
    },
    correo:{
      type: 'string',
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 60
    },
    password:{
      type: 'string',
      required: true,
      minLength: 5,
      maxLength: 20
    },
    rol: {
      type: 'string',
      isIn: [
        'Administrador',
        'Usuario'
      ],
      defaultsTo: 'Usuario'
    },
    usuariosPorHabitacion:{
      collection:'habitacionPorUsuario', // Modelo Hijo
      via:'idUsuario' //Nombre del Campo foreign key
    },
    rolesPorUsuario:{
      collection:'rolPorUsuario', // Modelo Hijo
      via:'idUsuario' //Nombre del Campo foreign key
    }


  },

};

