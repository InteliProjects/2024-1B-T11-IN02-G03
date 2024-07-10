console.log('Loading policies configuration');

module.exports.policies = {
  '*': 'isAuthenticated',


  // 'UsuarioController': {
  //   '*': true,
  //   create: true,
  //   put: true,
  //   delete: true,
  //   post: true,
  // },

  // 'GoogleAuth': {
  //   '*': true,
  //   'googleLogin': true,
  // },

  'EmailAuthController': {
    'emailLogin': true,
    'emailSignUp': true,
  }
};

console.log('Policies configuration loaded');
