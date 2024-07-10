const assert = require('assert');
const controller = require('../../../api/controllers/UsuarioController');
require('nyc');
const { mockAsync, res, USER } = require('../../util/index');
describe('UsuarioController', () => {
  it('Deve criar usuário com sucesso', async () => {
    let databaseStub = mockAsync(PerfilUsuario, 'create', USER);
    const req = {
      body: USER,
    };

    const result = await controller.createTest(req, res);
    //console.log('resultado:' + result);

    assert.strictEqual(databaseStub.calledOnce, true); // Verifica se o método create foi chamado uma vez
    assert.deepStrictEqual(result, USER); // Verifica se o resultado é igual ao objeto de usuário enviado
  });

  it('Deve deletar usuário com sucesso', async () => {
    const databaseStub = mockAsync(PerfilUsuario, 'destroy', USER);
    const req = {
      params: {
        id: USER.id,
      },
    };

    const result = await controller.deleteTest(req, res);

    assert.strictEqual(databaseStub.calledOnce, true); // Verifica se o método destroy foi chamado uma vez
    assert.deepStrictEqual(result.id, USER.id); // Verifica se o resultado é igual ao objeto de usuário enviado
  });

  it('Deve retornar os usuários que se declararam disponíveis', async () => {
    const perfisDisponiveis = [USER];
    const databaseStub = mockAsync(PerfilUsuario, 'find', perfisDisponiveis);
    req = {
      session: {
        userId: USER.id,
      },
    };

    const result = await controller.readDisponiveis(req, res);

    assert.strictEqual(databaseStub.calledOnce, true); // Verifica se o método find foi chamado uma vez
    assert.deepStrictEqual(result, perfisDisponiveis); // Verifica se o resultado é igual ao objeto de usuário enviado
  });

  it('Deve retornar falha ao não encontrar um usuário por id', async () => {
    const databaseStub = mockAsync(PerfilUsuario, 'find', [USER]);

    req = {
      params: {
        id: USER.id,
      },
    };
    const result = await controller.read(req, res);
    assert.strictEqual(databaseStub.calledOnce, true); // Verifica se o método find foi chamado uma vez
    assert.deepStrictEqual(result, { error: 'Usuário não encontrado' }); // Verifica se o resultado é igual ao objeto de usuário enviado
  });

  it('Deve retornar um usuário por id', async () => {

    const existingUser = {
      email: 'email@teste.com.br',
      estado: 'SP',
      genero: 'Masculino',
      horasTotais: 0,
      id: 'aa-bb-22-df-2f-23',
      idade: 20,
      nome: 'caio',
      pais: 'Brasil',
      senha: 'asdasdasd',
    };

    const databaseStub = mockAsync(PerfilUsuario, 'findOne', existingUser);

    req = {
      params: {
        id: 'aa-bb-22-df-2f-23',
      },
    };
    const result = await controller.read(req, res);
    //console.log(result);
    assert.strictEqual(databaseStub.calledOnce, true); // Verifica se o método find foi chamado uma vez
    assert.deepStrictEqual(result, existingUser); // Verifica se o resultado é igual ao objeto de usuário enviado
  });
});
