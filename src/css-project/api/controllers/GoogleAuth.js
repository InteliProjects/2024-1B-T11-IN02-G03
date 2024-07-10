const firebase = require('../services/firebase');

module.exports = {
  // Embora este controller ainda não esteja implementado no projeto,
  // no futuro, ele pode ser usado para realizar a autenticação
  // na plataforma via Google
  googleLogin: async (req, res) => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      // Aqui você pode salvar as informações do usuário no banco de dados
      // ou realizar outras ações necessárias

      return res.json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao fazer login com o Google' });
    }
  }
};
