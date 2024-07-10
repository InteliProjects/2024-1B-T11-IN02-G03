// api/controllers/EnderecoController.js

const axios = require('axios');
const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
  provider: 'openstreetmap',
});

// Este controller utiliza uma API externa para converter
// um cep em uma localização geográfica
module.exports = {
  consultarCEP: async function (req, res) {
    try {
      const { cep } = req.params;
      // Chama a API com o cep passado como parâmetro
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
      });

      //console.log('CEP:', response);

      if (response.data.erro) {
        return res.status(400).json({ error: 'CEP não encontrado' });
      }
      // Formata o endereço
      const address = `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`;
      const formattedAddress = encodeURIComponent(address).replace(/%20/g, '+').replace(/%2C/g, ',').replace(/%2D/g, '-');
      //https://nominatim.openstreetmap.org/search?addressdetails=1&q=Avenida+Higien%C3%B3polis%2C+Higien%C3%B3polis%2C+S%C3%A3o+Paulo+-+SP&format=json
      const location = await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${formattedAddress}&format=json`, {
        method: 'GET',
      });

      console.log(location.data[0]);
      console.log('Location:', location.data[0].lat, location.data[0].lon);


      return res.json({
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
        latitude: location.data[0].lat,
        longitude: location.data[0].lon,
      });
    } catch (error) {
      console.error('Erro ao consultar CEP e geocodificar:', error.message);
      res.status(500).json({ error: error.message });
    }
  },
};
