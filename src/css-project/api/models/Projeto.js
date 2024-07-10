// api/models/Projeto.js

module.exports = {
  attributes: {
    id: {
      type: 'string',
      columnName: 'idProjeto',
      allowNull: false,
      unique: true,
      required: true,
    },
    idCriador: {
      type: 'string',
      columnName: 'idCriador',
      allowNull: false,
    },
    nome: {
      type: 'string',
      columnName: 'nome',
      allowNull: false,
    },
    descricao: {
      type: 'string',
      columnName: 'descricao',
      allowNull: false,
    },
    dataInicio: {
      type: 'string',
      columnName: 'dataInicio',
      allowNull: false,
    },
    dataFim: {
      type: 'string',
      columnName: 'dataFim',
      allowNull: false,
    },
    cidade: {
      type: 'string',
      columnName: 'cidade',
      allowNull: false,
    },
    cep: {
      type: 'string',
      columnName: 'cep',
      allowNull: false,
    },
    bairro: {
      type: 'string',
      columnName: 'bairro',
      allowNull: false,
    },
    estado: {
      type: 'string',
      columnName: 'estado',
      allowNull: false,
    },
    pais: {
      type: 'string',
      columnName: 'pais',
      allowNull: false,
    },
    linkImg:{
      type: 'string',
      columnName: 'linkImg',
      allowNull: false,
    },
    numeroVagas: {
      type: 'number',
      columnName: 'numeroVagas',
      allowNull: false,
    },
    isOng: {
      type: 'boolean',
      columnName: 'ong',
      defaultsTo: false,
      allowNull: false,
    },
    cnpj: {
      type: 'string',
      columnName: 'cnpj',
    },
    nomeOng: {
      type: 'string',
      columnName: 'nomeOng',
    },
    emailOng: {
      type: 'string',
      columnName: 'emailOng',
    },

    // Relações com outros Models

    voluntarioProjeto: {
      collection: 'PerfilUsuario',
      via: 'Projeto',
      through: 'UsuariosPorProjeto'
    },
    ProjetoEmpresa: {
      collection: 'PerfilEmpresa',
      via: 'Projeto',
      through: 'EmpresasPorProjeto'
    },
    convites: {
      collection: 'Convite',
      via: 'idProjeto',
    },
  },
};
