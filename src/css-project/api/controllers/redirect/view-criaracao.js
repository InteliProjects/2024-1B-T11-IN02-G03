module.exports = {


  friendlyName: 'View Acao page',


  description: 'Mostra a pagina de criar acao.',


  exits: {

    success: {
      viewTemplatePath: 'pages/criarAcao',
      description: 'Mostra a pagina de criar acao.'
    },

  },


  fn: async function () {

    console.log('View Acao page');

    return {};

  }


};
