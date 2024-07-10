const assert = require('assert');
const controller = require('../../../api/controllers/ConviteController');
require('nyc');
const { mockAsync, res, CONVITE } = require('../../util/index');

describe('ConviteController', () => {
  it('Deve enviar um convite de um usuário para outro', async () => {
    let databaseStub = mockAsync(Convite, 'create', CONVITE);
    const req = {
      body: CONVITE,
    };

    const result = await controller.createTest(req, res);
    //console.log(result);

    assert.strictEqual(databaseStub.calledOnce, true); // Verifica se o método create foi chamado uma vez
    assert.deepStrictEqual(result, CONVITE); // Verifica se o resultado é igual ao objeto de convite enviado
  });

  it('Deve retornar erro ao enviar um convite com campos vazios', async () => {
    let databaseStub = mockAsync(Convite, 'create', CONVITE);
    const req = {
      body: {
        id: 'c29dc543-2fd4-4419-8739-c25e820fa0e8',
        idUsuarioEnvia: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
        idUsuarioRecebe: 'vf346w6-09f6-3j8e-a9be-3b4f4k0db4gg',
        idProjeto: '',
        descricao: 'convite',
        status: 'pendente',
      },
    };

    const result = await controller.createTest(req, res);
    console.log(result);

    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, {
      error: 'Necessário preencher todos os campos',
    });
  });
});
