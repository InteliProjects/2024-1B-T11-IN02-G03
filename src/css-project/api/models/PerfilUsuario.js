// api/models/PerfilUsuario.js

module.exports = {
  id: {
    type: 'string',
    columnName: 'id',
    allowNull: false,
    required: true,
  },

  attributes: {
    id: {
      type: 'string',
      allowNull: false,
      required: true,
    },
    nome: {
      type: 'string',
      columnName: 'nome',
      allowNull: false,
    },
    idade: {
      type: 'number',
      columnName: 'idade',
      allowNull: false,
    },
    genero: {
      type: 'string',
      columnName: 'genero',
      allowNull: false,
    },
    email: {
      type: 'string',
      columnName: 'email',
      allowNull: false,
    },
    cidade: {
      type: 'string',
      columnName: 'cidade',
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
    horasTotais: {
      type: 'number',
      columnName: 'horasTotais',
      allowNull: false,
      defaultsTo: 0.0,
    },
    bio : {
      type: 'string',
      columnName: 'bio',
      allowNull: true,
      defaultsTo: 'Clique em editar para adicionar uma bio!',
    },
    foto: {
      type: 'string',
      columnName: 'foto',
      allowNull: false,
      defaultsTo: 'https://i.ibb.co/ZfYppNR/image.png',
    },
    capa: {
      type: 'string',
      columnName: 'capa',
      allowNull: false,
      defaultsTo: 'https://placehold.co/1920x1080?text=Clique+em+editar+para+alterar+capa',
      // capa é uma imagem de fundo que fica no perfil do usuário
      // utilizamos um link prático de placeholder para simular a imagem
    },
    disponivel: {
      type: 'boolean',
      columnName: 'disponivel',
      allowNull: false,
      defaultsTo: true,
    },

    // Relações com outros Models 


    voluntarioEmpresa: {
      collection: 'PerfilEmpresa',
      via: 'PerfilUsuario',
      through: 'UsuariosPorEmpresa',
    },
    voluntarioProjeto: {
      collection: 'Projeto',
      via: 'PerfilUsuario',
      through: 'UsuariosPorProjeto',
    },
    idUsuarioRecebe: {
      collection: 'Convite',
      via: 'idUsuarioRecebe',
    },
    idUsuarioEnvia: {
      collection: 'Convite',
      via: 'idUsuarioEnvia',
    },
    idUsuario: {
      collection: 'Voluntariado',
      via: 'idUsuario',
    },
  },
};
