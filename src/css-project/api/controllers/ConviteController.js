/**
 * ConviteController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Criação de convite
  create: async function (req, res) {
    try {
      // Atributos do convite
      const { descricao, status, idUsuarioEnvia, idUsuarioRecebe, idProjeto } =
        req.body;

      if (
        !descricao ||
        !status ||
        !idUsuarioEnvia ||
        !idUsuarioRecebe ||
        !idProjeto
      ) {
        // Lança um erro caso algum dos campos esteja vazio
        return res.badRequest({ error: 'Todos os campos são obrigatórios' });
      }

      // Criação do convite
      const novoConvite = await Convite.create({
        descricao,
        status,
        idUsuarioEnvia,
        idUsuarioRecebe,
        idProjeto,
      }).fetch(); // Salva o convite no banco de dados
      return res.json(novoConvite); // Retorna o convite criado
    } catch (error) {
      return res.serverError(error); // Retorna um erro caso ocorra algum problema
    }
  },

  // Encontra um convite
  read: async function (req, res) {
    try {

      // Encontra os convites que o usuário logado recebeu
      const convites = await Convite.find(
        { idUsuarioRecebe: req.session.userId },
      ).populate('idUsuarioEnvia').populate('idProjeto'
      );
      return res.json(convites);
    } catch (error) {
      return res.serverError(error);
    }
  },

  // Testes //
  createTest: async function (req, res) {
    try {
      const { descricao, status, idUsuarioEnvia, idUsuarioRecebe, idProjeto } =
        req.body;

      if (
        !descricao ||
        !status ||
        !idUsuarioEnvia ||
        !idUsuarioRecebe ||
        !idProjeto
      ) {
        return res.status(500).json({ error: 'Necessário preencher todos os campos' });
      }

      const novoConvite = await Convite.create({
        descricao,
        status,
        idUsuarioEnvia,
        idUsuarioRecebe,
        idProjeto,
      });
      //console.log('Convite criado com sucesso');
      return res.status(201).json(novoConvite);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
