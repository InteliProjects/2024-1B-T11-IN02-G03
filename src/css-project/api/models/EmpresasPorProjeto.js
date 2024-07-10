/**
 * EmpresasPorProjeto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // Este model ainda não está sendo utilizado no projeto
    // porém faz parte da modelagem original, onde a empresa (ONG)
    // pode ter um perfil próprio, com informações sobre a empresa
    funcao: {
      type: 'string',
      columnName: 'funcao',
      allowNull: false,
    },
    dataEntrada: {
      type: 'ref',
      columnType: 'date',
      columnName: 'dataEntrada',
    },
    Projeto: {
      model: 'Projeto',
      columnName: 'id_projeto',
      required: true
    },
    PerfilEmpresa: {
      model: 'PerfilEmpresa',
      columnName: 'id_perfil_empresa',
      required: true
    },

  },
  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.dataEntrada = new Date();
    return proceed();
  }
};

