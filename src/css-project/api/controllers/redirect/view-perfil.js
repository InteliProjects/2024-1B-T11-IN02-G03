module.exports = {


  friendlyName: 'View perfil page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/perfil',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
