// api/models/UsuariosPorProjeto.js

module.exports = {
  // relaciona usuários com ações sociais
  attributes: {
    funcao: {
      type: 'string',
      columnName: 'funcao',
      allowNull: false,
    },
    horasContadas: {
      type: 'number',
      columnName: 'horasContadas',
      allowNull: false,
    },
    dataEntrada: {
      type: 'ref',
      columnType: 'date',
      columnName: 'dataEntrada',
    },
    PerfilUsuario: {
      model: 'PerfilUsuario',
      columnName: 'id_usuario',
      required: true
    },
    Projeto: {
      model: 'Projeto',
      columnName: 'id_projeto',
      required: true
    }
  },
  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.dataEntrada = new Date();
    return proceed();
  }
};
