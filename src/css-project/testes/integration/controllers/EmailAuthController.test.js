const sinon = require('sinon');
const assert = require('assert');
const proxyquire = require('proxyquire');

describe('EmailAuthController', () => {
  let req; let res; let authStub; let controller;

  beforeEach(() => {
    req = {
      body: {},
      session: {},
      params: {}
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    authStub = {
      signInWithEmailAndPassword: sinon.stub(),
      createUserWithEmailAndPassword: sinon.stub(),
      signOut: sinon.stub(),
      getAuth: sinon.stub().returns({
        currentUser: null
      }),
    };

    controller = proxyquire('../../../api/controllers/EmailAuthController', {
      'firebase/auth': authStub
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Deve fazer login com email e senha', async () => {
    req.body.email = 'test@example.com';
    req.body.password = 'password123';

    const user = { uid: '12345', email: 'test@example.com' };
    authStub.signInWithEmailAndPassword.resolves({ user });

    await controller.emailLogin(req, res);

    assert(authStub.signInWithEmailAndPassword.calledOnce);
    assert.strictEqual(req.session.authenticated, true);
    assert.strictEqual(req.session.userId, user.uid);
    assert(res.json.calledWith({ user }));
  });

  it('Deve retornar erro se falhar ao fazer login com senha inválida e mostrar mensagem de erro do firebase acima no console', async () => {
    req.body.email = 'test@example.com';
    req.body.password = 'wrongpassword';

    const error = new Error('Login failed');
    authStub.signInWithEmailAndPassword.rejects(error);

    await controller.emailLogin(req, res);

    assert(authStub.signInWithEmailAndPassword.calledOnce);
    assert(res.status.calledWith(500));
    assert(res.json.calledWith({ error: error.message }));
  });

  it('Deve retornar erro ao criar conta com senha inválida', async () => {
    req.body.email = 'newuser@example.com';
    req.body.password = '123';

    const user = { uid: '67890', email: 'newuser@example.com' };
    authStub.createUserWithEmailAndPassword.resolves({ user });

    await controller.emailSignUp(req, res);

    assert(authStub.createUserWithEmailAndPassword.calledOnce);
    assert.strictEqual(req.session.authenticated, true);
    assert.strictEqual(req.session.userId, user.uid);
    assert(res.json.calledWith({ user }));
  });

  it('Deve retornar erro ao falhar em deslogar o usuário', async () => {
    authStub.signOut.resolves();

    await controller.emailLogout(req, res);

    assert(authStub.signOut.calledOnce);
    assert.strictEqual(req.session.authenticated, false);
    assert.strictEqual(req.session.userId, null);
    assert(res.json.calledWith({ message: 'Usuário deslogado' }));
  });

  it('Deve retornar erro se falhar ao verificar usuário e mostrar mensagem do firebase no console', async () => {
    const error = new Error('Check user failed');
    authStub.getAuth.throws(error);

    await controller.checkUser(req, res);

    assert(authStub.getAuth.calledOnce);
    assert(res.status.calledWith(500));
    assert(res.json.calledWith({ error: 'Erro ao verificar usuário' }));
  });
});
