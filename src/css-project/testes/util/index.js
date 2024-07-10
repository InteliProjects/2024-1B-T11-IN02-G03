/* eslint-disable no-unused-vars */
const sinon = require('sinon');

// Mocka funções assíncronas de um model para retornar um valor específico
function mockAsync(obj, method, returnValue) {
  // Verifica se o método já foi substituído por um stub
  if (obj[method].restore) {
    return obj[method];
  }

  // Cria um stub para o método
  const stub = sinon.stub(obj, method).resolves(returnValue);

  // Retorna o stub
  return stub;
}

const USER = {
  id: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
  nome: 'caio',
  idade: 20,
  email: 'email@teste.com.br',
  senha: 'asdasdasd',
  cidade: 'São Paulo',
  estado: 'SP',
  pais: 'Brasil',
  horasTotais: 0,
  genero: 'Masculino',
};

const CONVITE = {
  id: 'c29dc543-2fd4-4419-8739-c25e820fa0e8',
  idUsuarioEnvia: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
  idUsuarioRecebe: 'vf346w6-09f6-3j8e-a9be-3b4f4k0db4gg',
  idProjeto: '8002f781-9b86-4b0c-a74a-7058bd75e696',
  descricao: 'convite',
  status: 'pendente'
};

const PROJETO = {
  id: 'a2827556-4417-4ecb-bdfc-75ae089d2a74',
  idCriador: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
  nome: 'Projeto Teste',
  descricao: 'Projeto de teste',
  dataInicio: '2021-06-01',
  dataFim: '2021-06-30',
  cidade: 'São Paulo',
  estado: 'SP',
  pais: 'Brasil',
  numeroVagas: 10,
};

const USUARIOPORPROJETO = {
  funcao: 'Desenvolvedor',
  horasContadas: 0,
  dataEntrada: new Date(),
  PerfilUsuario: 'da231w3-09d5-4c8e-a9be-9f4f4a9db4rr',
  Projeto: 'a2827556-4417-4ecb-bdfc-75ae089d2a74',
};

// Captura a resposta do controller
const res = {
  status: (status) => ({
    json: (result) => result,
  }),
};

module.exports = {
  mockAsync,
  res,
  USER,
  CONVITE,
  PROJETO,
  USUARIOPORPROJETO
};
