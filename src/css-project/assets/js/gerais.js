document.addEventListener('DOMContentLoaded', () => {

  // url direfente de /login
  if (window.location.pathname !== '/login'
    && window.location.pathname !== '/cadastro'
    && window.location.pathname !== '/'
  ) {

    notifyUser();
  }
});

function notifyUser() {



  fetch('/convite/find', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('Notificação');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let acao = data;

      if (acao.length !== 0) {
        document.getElementById('notificacaoTitulo').classList.add('hidden');
      }

      acao.forEach((acao) => {
        const card = document.createElement('div');
        card.classList.add(
          'w-full',
          'bg-transparent',

          'overflow-hidden',

        );
        card.innerHTML = `
            <div class="info p-6 text-start ">
              <h2 class="text-lg font-bold text-gray-800">${acao.idProjeto.nome}</h2>
              <p class="text-sm text-gray-600">${acao.descricao}</p>
            </div>
          `;

        document.querySelector('#popNotificacao').appendChild(card);

      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}
