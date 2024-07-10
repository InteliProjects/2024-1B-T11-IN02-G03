// api/models/Voluntariado.js

module.exports = {
  attributes: {
    // FK - id do usuário que está realizando/realizou o voluntariado
    idUsuario: {
      model: 'PerfilUsuario',
      required: true
    },
    titulo: {
      type: 'string',
      columnName: 'titulo',
      allowNull: false,
    },
    descricao: {
      type: 'string',
      columnName: 'descricao',
      allowNull: true,
    },
    horasTrabalhadas: {
      type: 'number',
      columnName: 'horasTrabalhadas',
      allowNull: false,
    },
    status: {
      type: 'string',
      columnName: 'status',
      allowNull: true,
    },
    dataInicio: {
      type: 'ref',
      columnType: 'date',
      columnName: 'dataInicio',
    },
    dataFim: {
      type: 'ref',
      columnType: 'date',
      columnName: 'dataFim',
    }
  },

  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.dataInicio = new Date();
    return proceed();
  }
};
