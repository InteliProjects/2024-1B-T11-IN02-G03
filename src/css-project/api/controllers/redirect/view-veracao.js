module.exports = {
  friendlyName: 'View veracao page',
  description: 'Display the dashboard "Welcome" page.',
  exits: {
    success: {
      viewTemplatePath: 'pages/editarAcao',
      description: 'Display the welcome page for authenticated users.',
    },
  },
  fn: async function () {
    return {};
  },
};
