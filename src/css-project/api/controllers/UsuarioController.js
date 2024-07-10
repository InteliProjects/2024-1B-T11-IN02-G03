/* eslint-disable no-unused-vars */

/**
 * PerfilUsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    console.log('chegou no create');
    try {
      let id = req.body.id;
      let nome = req.body.nome;
      let idade = req.body.idade;
      let email = req.body.email;
      let senha = req.body.senha;
      let cidade = req.body.cidade;
      let estado = req.body.estado;
      let pais = req.body.pais;
      let horasTotais = req.body.horasTotais;
      let genero = req.body.genero;
      console.log('pegou os dados do body');
      const perfilUsuario = await PerfilUsuario.create({
        id,
        nome,
        idade,
        email,
        senha,
        cidade,
        estado,
        pais,
        horasTotais,
        genero,
      }).fetch();
      console.log('criou o perfil');
      return res.status(201).json(perfilUsuario);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  delete: async function (req, res){
    try{
      let id = req.params.id;
      const perfilUsuario = await PerfilUsuario.destroy({id}).fetch();
      return res.status(200).json(perfilUsuario);
    } catch (error){
      return res.status(500).json({error: error});
    }
  },

  //ler usuario apartir do id
  read: async function (req, res) {
    try {
      let id = req.params.id;
      const perfilUsuario = await PerfilUsuario.findOne({ id });
      if (!perfilUsuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      return res.status(200).json(perfilUsuario);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  // Retorna todos os usuários que se declaram disponíveis
  // No momento, retorna todos os usuários, exceto o usuário logado
  // Isso porque todos os usuários estão como disponíveis
  // Para implementar a funcionalidade, deve se adicionar um campo disponivel
  // na model PerfilUsuario
  readDisponiveis: async function (req, res) {
    const id = req.session.userId;
    try {
      const perfisDisponiveis = await PerfilUsuario.find({
        where: { id: { '!=':  id} }
      });
      return res.status(200).json(perfisDisponiveis);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuários disponíveis' });
    }
  },


  update: async function (req, res) {
    try {
      let id = req.params.id;
      let nome = req.body.nome;
      let idade = req.body.idade;
      let email = req.body.email;
      let senha = req.body.senha;
      let cidade = req.body.cidade;
      let estado = req.body.estado;
      let pais = req.body.pais;
      let horasTotais = req.body.horasTotais;
      let genero = req.body.genero;
      let bio = req.body.bio;
      let foto = req.body.foto;
      let capa = req.body.capa;
      const perfilUsuario = await PerfilUsuario.updateOne({ id }).set({
        nome,
        idade,
        email,
        senha,
        cidade,
        estado,
        pais,
        horasTotais,
        genero,
        bio,
        foto,
        capa,
      });
      if (!perfilUsuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      return res.status(200).json(perfilUsuario);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },


  // Testes //
  // Controllers que devem ser usados apenas para testes
  // Não possuem método fetch (escrita no banco de dados)
  createTest: async function (req, res) {
    //console.log('chegou no create test');
    try {
      let id = req.body.id;
      let nome = req.body.nome;
      let idade = req.body.idade;
      let email = req.body.email;
      let senha = req.body.senha;
      let cidade = req.body.cidade;
      let estado = req.body.estado;
      let pais = req.body.pais;
      let horasTotais = req.body.horasTotais;
      let genero = req.body.genero;
      //console.log('pegou os dados do body');
      const perfilUsuario = await PerfilUsuario.create({
        id,
        nome,
        idade,
        email,
        senha,
        cidade,
        estado,
        pais,
        horasTotais,
        genero,
      });
      //console.log('criou o perfil');
      return res.status(201).json(perfilUsuario);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  deleteTest: async function (req, res){
    try{
      let id = req.params.id;
      const perfilUsuario = await PerfilUsuario.destroy({id});
      return res.status(200).json(perfilUsuario);
    } catch (error){
      return res.status(500).json({error: error});
    }
  },
};



