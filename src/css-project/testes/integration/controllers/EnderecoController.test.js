const assert = require('assert');
const sinon = require('sinon');
const axios = require('axios');
require('nyc');
const proxyquire = require('proxyquire');
const NodeGeocoder = require('node-geocoder');

describe('EnderecoController', () => {
  let req;
  let res;
  let axiosStub;
  let geocoderStub;
  let EnderecoController;

  beforeEach(() => {
    req = {
      params: {},
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    axiosStub = sinon.stub(axios, 'get');
    const geocoderInstance = { geocode: sinon.stub() };
    geocoderStub = geocoderInstance.geocode;

    // Mock dependencies using proxyquire
    EnderecoController = proxyquire('../../../api/controllers/EnderecoController', {
      'axios': axios,
      'node-geocoder': () => geocoderInstance,
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Deve retornar dados de endereço e coordenadas quando o CEP é válido', async () => {
    req.params.cep = '01001000';

    axiosStub.resolves({
      data: {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
      },
    });

    geocoderStub.resolves([{
      latitude: -23.55052,
      longitude: -46.633308,
    }]);

    await EnderecoController.consultarCEP(req, res);

    assert(axiosStub.calledOnce);
    assert(geocoderStub.calledOnce);
    assert(res.json.calledWith({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      latitude: -23.55052,
      longitude: -46.633308,
    }));
  });

  it('Deve retornar erro 400 quando o CEP não é encontrado ^^^^', async () => {
    req.params.cep = '00000000';

    axiosStub.resolves({
      data: {
        erro: true,
      },
    });

    await EnderecoController.consultarCEP(req, res);

    assert(axiosStub.calledOnce);
    assert(res.status.calledWith(400));
    assert(res.json.calledWith({ error: 'CEP não encontrado' }));
  });

  it('Deve retornar erro 500 quando ocorre um erro na consulta do CEP ^^^^', async () => {
    req.params.cep = '01001000';

    axiosStub.rejects(new Error('Erro na consulta do CEP'));

    await EnderecoController.consultarCEP(req, res);

    assert(axiosStub.calledOnce);
    assert(res.status.calledWith(500));
    assert(res.json.calledWith({ error: 'Erro na consulta do CEP' }));
  });

  it('Deve retornar erro 500 quando ocorre um erro na geocodificação ^^^^', async () => {
    req.params.cep = '01001000';

    axiosStub.resolves({
      data: {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
      },
    });

    geocoderStub.rejects(new Error('Erro na geocodificação'));

    await EnderecoController.consultarCEP(req, res);

    assert(axiosStub.calledOnce);
    assert(geocoderStub.calledOnce);
    assert(res.status.calledWith(500));
    assert(res.json.calledWith({ error: 'Erro na geocodificação' }));
  });
});