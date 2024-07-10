const assert = require('assert');
const controller = require('../../../api/controllers/ProjetoController');
require('nyc');
const sinon = require('sinon');
const { mockAsync, res, PROJETO } = require('../../util/index');

describe('ProjetoController', () => {
  it('Deve criar um novo projeto', async () => {
    let databaseStub = mockAsync(Projeto, 'create', PROJETO);
    const req = {
      body: PROJETO,
    };

    const result = await controller.createTest(req, res);

    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, PROJETO);
    databaseStub.restore();
  });

  it('Deve encontrar um projeto por id', async () => {
    let databaseStub = mockAsync(Projeto, 'findOne', PROJETO);
    const req = {
      params: {
        id: PROJETO.id,
      },
    };

    const result = await controller.findOne(req, res);

    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, PROJETO);
    databaseStub.restore();
  });

  it('Deve falhar ao passar um id de projeto não-existente', async () => {
    let databaseStub = mockAsync(Projeto, 'findOne', {
      erro: 'Projeto não encontrado',
    });
    const req = {
      params: {
        id: 'id-inexistente',
      },
    };

    const result = await controller.findOne(req, res);
    //console.log(result);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, { erro: 'Projeto não encontrado' });

    databaseStub.restore();
  });

  it('Deve atualizar um projeto', async () => {
    const updateOneStub = sinon.stub(Projeto, 'updateOne').returns({
      set: sinon.stub().returns(PROJETO),
    });
    const req = {
      params: {
        id: PROJETO.id,
      },
      body: PROJETO,
    };

    const result = await controller.update(req, res);

    assert.strictEqual(updateOneStub.calledOnce, true);
    assert.deepStrictEqual(result, PROJETO);
    updateOneStub.restore();
  });

  it('Deve deletar um projeto', async () => {
    let databaseStub = mockAsync(Projeto, 'destroyOne', PROJETO);
    const req = {
      params: {
        id: PROJETO.id,
      },
    };

    const result = await controller.delete(req, res);

    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, PROJETO);
    databaseStub.restore();
  });

  it('Deve retornar todos os projetos criados pelo usuário logado', async () => {
    let databaseStub = mockAsync(Projeto, 'find', [PROJETO]);
    const req = {
      params: {
        id: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
      },
    };

    const result = await controller.findMyProjects(req, res);
    //console.log(result);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, [PROJETO]);
    databaseStub.restore();
  });

  it ('Deve retornar erro ao tentar criar um projeto com campos vazios', async () => {
    let databaseStub = mockAsync(Projeto, 'create', {
      error: 'Todos os campos são necessários',
    });
    const req = {
      body: {
        id: 'c29dc543-2fd4-4419-8739-c25e820fa0e8',
        idUsuario: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
        nome: '',
        descricao: 'projeto',
        status: 'pendente',
      },
    };

    const result = await controller.createTest(req, res);
    //console.log(result);

    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, {
      error: 'Todos os campos são necessários',
    });
    databaseStub.restore();
  });
});
