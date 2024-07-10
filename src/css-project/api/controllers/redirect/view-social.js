module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {
    success: {
      viewTemplatePath: 'pages/home',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
