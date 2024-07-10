/**
 * UsuarioPorProjetoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    try {
      // o PerfilUsuario e o id do usuário que está logado
      req.body.PerfilUsuario = req.session.userId;

      console.log('Request Body:', req.body);
      const usuarioPorProjeto = await UsuariosPorProjeto.create(req.body).fetch();
      return res.json(usuarioPorProjeto);
    } catch (error) {
      return res.serverError(error);
    }
  },
  // Encontra os usuários de um projeto
  find: async function (req, res) {
    try {
      const usuarioPorProjeto = await UsuariosPorProjeto.find(
        { where: { Projeto: req.params.id } }
      );
      return res.json(usuarioPorProjeto);
    } catch (error) {
      return res.serverError(error);
    }
  },

  // Testes //
  // Controllers que devem ser usados apenas para testes
  // Não possuem método fetch (escrita no banco de dados)
  createTest: async function (req, res) {
    try {
      const usuarioPorProjeto = await UsuariosPorProjeto.create(req.body);
      return res.status(200).json(usuarioPorProjeto);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  findTest: async function (req, res) {
    try {
      const usuarioPorProjeto = await UsuariosPorProjeto.find(
        { where: { Projeto: req.params.id } }
      );
      return res.status(200).json(usuarioPorProjeto);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

