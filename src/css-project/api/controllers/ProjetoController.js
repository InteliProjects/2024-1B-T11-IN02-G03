module.exports = {
  // Action para criar um novo projeto
  create: async function (req, res) {
    try {
      const newProjeto = await Projeto.create(req.body).fetch();
      return res.status(201).json(newProjeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para obter todos os projetos
  find: async function (req, res) {
    try {
      //pega o id do usuario logado
      const id = req.session.userId;

      const projetos = await Projeto.find({
        where: { idCriador: { '!=': id } },
      });
      return res.status(200).json(projetos);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para obter um projeto por ID
  findOne: async function (req, res) {
    try {
      const projeto = await Projeto.findOne({ id: req.params.id });
      if (!projeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      return res.status(200).json(projeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para atualizar um projeto
  update: async function (req, res) {
    try {
      const updatedProjeto = await Projeto.updateOne({ id: req.params.id }).set(
        req.body
      );
      if (!updatedProjeto) {
        console.log('erro1');
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      return res.status(200).json(updatedProjeto);
    } catch (err) {
      console.log('erro2');
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para deletar um projeto
  delete: async function (req, res) {
    try {
      const deletedProjeto = await Projeto.destroyOne({ id: req.params.id });
      if (!deletedProjeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      return res.status(200).json(deletedProjeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Lista todas as acoes que tiver o idCriador igual ao id do usuario
  findMyProjects: async function (req, res) {
    try {
      const projetos = await Projeto.find({ idCriador: req.params.id });
      return res.status(200).json(projetos);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  edit: async function (req, res) {
    try {
      const actionId = req.params.id;
      console.log(actionId + ' actionId');
      const action = await Projeto.findOne({ id: actionId });
      console.log(action + 'action');

      if (!action) {
        return res.status(404).send('Ação não encontrada');
      }

      return res.view('pages/editarAcao/', { action });
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Testes //
  // Controllers que devem ser usados apenas para testes
  // Não possuem método fetch (escrita no banco de dados)
  createTest: async function (req, res) {
    try {
      const newProjeto = await Projeto.create(req.body);
      return res.status(201).json(newProjeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
