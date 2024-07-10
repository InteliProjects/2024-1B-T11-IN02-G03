/**
 * Convite.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string',
      columnName: 'descricao',
      allowNull: false,
    },
    status: {
      type: 'string',
      columnName: 'status',
      allowNull: false,
    },

    // Relações com outros Models

    idUsuarioEnvia: {
      model: 'PerfilUsuario',
      required: true
    },
    idUsuarioRecebe: {
      model: 'PerfilUsuario',
      required: true
    },
    idProjeto: {
      model: 'Projeto',
      required: true
    },
  },

};

