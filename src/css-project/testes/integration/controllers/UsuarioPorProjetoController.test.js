const assert = require('assert');
const controller = require('../../../api/controllers/UsuarioPorProjetoController');
require('nyc');
const { mockAsync, res, PROJETO, USER, USUARIOPORPROJETO } = require('../../util/index');

describe('UsuarioPorProjetoController', () => {
  it('Deve adicionar um novo usuário ao projeto', async () => {
    let databaseStub = mockAsync(UsuariosPorProjeto, 'create', USUARIOPORPROJETO);
    const req = {
      body: {
        PerfilUsuario: USER.id,
        Projeto: PROJETO.id,
      }
    };

    const result = await controller.createTest(req, res);
    //console.log(result);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, USUARIOPORPROJETO);
    databaseStub.restore();
  });

  it('Deve retornar os usuários de um projeto', async () => {
    let databaseStub = mockAsync(UsuariosPorProjeto, 'find', [USUARIOPORPROJETO]);
    const req = {
      params: {
        id: PROJETO.id,
      }
    };

    const result = await controller.findTest(req, res);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, [USUARIOPORPROJETO]);
    databaseStub.restore();
  });

  it('Deve retornar nada ao não encontrar usuários de um projeto', async () => {
    let databaseStub = mockAsync(UsuariosPorProjeto, 'find', []);
    const req = {
      params: {
        id: PROJETO.id,
      }
    };

    const result = await controller.findTest(req, res);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, []);
    databaseStub.restore();
  });
});
