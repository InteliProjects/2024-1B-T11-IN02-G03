/* eslint-disable quotes */
document.addEventListener('DOMContentLoaded', () => {
  //verifica se a url é a home "/social"
  if (window.location.pathname === '/social') {
    initialize();
  } else if (window.location.pathname === '/perfil') {
    console.log('Perfil page loaded');
  } else {
    console.log('Outra página');
  }
});


function initialize() {
  console.log('Social page loaded');
  checkUser().then((userId) => {
    if (userId) {
      getUserData(userId).then((userData) => {
        if (userData) {
          updateUserUI(userData);
          displayActions();
        }
      });

      loadUserActions();

      setupLogoutButton();
      setupCloseModal();
      loadUsers("/user/disponiveis");
    }
  });


}
function setupLogoutButton() {
  document.getElementById('logout-btn').addEventListener('click', () => {
    fetch('/emailLogout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/';
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
}

async function checkUser() {
  try {
    const response = await fetch('/checkUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Success:', data.uid);
    return data.uid;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


async function getUserData(uid) {
  try {
    const response = await fetch(`/user/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

function updateUserUI(user) {
  document.getElementById(
    'textName'
  ).innerText = `${user.nome}`;

  document.getElementById(
    'imgUser'
  ).src = `${user.foto || 'https://i.ibb.co/ZfYppNR/image.png'}`;
}

// Função para obter ações sociais
async function getActions() {
  try {
    const response = await fetch(`/getAcao/all/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching actions:', error);
  }
}

// Função para exibir ações sociais
async function displayActions() {
  const actions = await getActions();
  if (actions) {
    document.querySelector('.grid').innerHTML = '';


    actions.forEach(async (acao) => {

      await getLocation(acao);

      const card = document.createElement('div');
      card.classList.add(
        'card',
        'flex',
        'flex-col',
        'justify-between',
        'rounded-lg',
        'bg-white',
        'w-30',
        'h-auto',
        'shadow-lg',
        'mb-8'
      );
      card.innerHTML = `
        <img
          src="${acao.linkImg}"
          alt="Imagem da ação"
          style="object-fit: cover"
          class="mt-6 mx-4 rounded-lg shadow-xl h-64 bg-cover bg-center object-cover object-top"
        />
        <div class="info p-6 text-center">
          <p class="title text-black font-semibold text-xl mb-4">
            ${acao.nome}
          </p>
        </div>
        <div class="px-6">
          <p class="text-[#c7c7c7] font-normal">
            ${acao.descricao}
          </p>
        </div>
        <div class="px-8 py-6">
          <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-6">
            <div
              class="bg-customYellow h-2.5 rounded-full sm:w-1/2 md:w-3/4 lg:w-2/3 xl:w-1/2"
              style="width: 100%"
            ></div>
          </div>
        </div>
        <div class="footer pb-4 px-4 border-gray-200 flex items-center justify-between">
          <p class="text-xs">
            Disponível<br/><strong class="text-xl">${acao.numeroVagas} Vagas</strong>
          </p>
          <button
            type="button"
            class="transition duration-300 hover:bg-customYellow hover:text-customBlue-dark action select-none border-none outline-none shadow-xl text-white font-bold text-xs py-4 px-6 bg-customBlue rounded-md"
          >
            Quero ajudar!
          </button>
        </div>
      `;

      document.querySelector('.grid').appendChild(card);

      //evento de clicar no card
      card.addEventListener("click", () => openModal(acao));
    });

  }
}

// Função para abrir o modal
function openModal(acao) {
  let [diaInicio, mesInicio, anoInicio] = acao.dataInicio.split("-");
  let [diaFim, mesFim, anoFim] = acao.dataFim.split("-");

  const inscreverBtn = document.getElementById("inscreverBtn");
  inscreverBtn.replaceWith(inscreverBtn.cloneNode(true));

  document
    .getElementById("inscreverBtn")
    .addEventListener("click", () => {
      (async function () {
        await inscreverAcao(acao.id);
      })();
    });

  document.getElementById("modal-nome").innerText = acao.nome;
  document.getElementById("modal-descricao").innerText = acao.descricao;
  document.getElementById(
    "modal-data-inicio"
  ).innerText = `Data de Início: ${diaInicio}/${mesInicio}/${anoInicio}`;
  document.getElementById(
    "modal-data-fim"
  ).innerText = `Data Final: ${diaFim}/${mesFim}/${anoFim}`;
  document.getElementById(
    "modal-cidade"
  ).innerText = `Cidade: ${acao.cidade}`;
  document.getElementById(
    "modal-estado"
  ).innerText = `Estado: ${acao.estado}`;
  document.getElementById(
    "modal-vagas"
  ).innerText = `Quantidade de Vagas: ${acao.numeroVagas}`;
  document.getElementById("modal").classList.remove("hidden");

  setTimeout(() => {
    document.querySelector("#modal > div").classList.remove("scale-95");
  }, 100);
}

// Função para inscrever-se em uma ação
async function inscreverAcao(id) {
  try {
    const response = await fetch(`/usuarioPorProjeto/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        funcao: "Desenvolvedor",
        horasContadas: 0,
        Projeto: id,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `error! status: ${response.status}, message: ${errorMessage}`
      );
    }

    const result = await response.json();
    alert("Inscrição realizada com sucesso!");
    console.log(result);
  } catch (error) {
    console.error("Error during subscription:", error);
  }
}

// Fechar o modal
function setupCloseModal() {
  document.getElementById("close-modal").addEventListener("click", () => {
    document.querySelector("#modal > div").classList.add("scale-95");
    setTimeout(() => {
      document.getElementById("modal").classList.add("hidden");
    }, 200);
  });

  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal")) {
      document.querySelector("#modal > div").classList.add("scale-95");
      setTimeout(() => {
        document.getElementById("modal").classList.add("hidden");
      }, 200);
    }
  });
}



// No seu componente ou serviço do frontend Sails.js

let listaAcoes = [];

async function getLocation(acao) {
  try {
    const response = await fetch(`/endereco/consultarCEP/${acao.cep}`);
    if (!response.ok) {
      throw new Error('Erro ao consultar CEP');
    }
    const data = await response.json();
    console.log('CEP consultado:', data);
    listaAcoes.push({ acao, data });
    console.log('Lista de ações:', listaAcoes);
    return data;
  } catch (error) {
    console.error('Erro ao consultar CEP:', error.message);
    return null;
  }
}

function loadUsers(url) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      const grid = document.getElementById("users");
      grid.innerHTML = ""; // Clear existing content
      data.forEach((user) => {

        const card = document.createElement("div");
        card.classList.add(
          "bg-white",
          "p-8",
          "rounded-lg",
          "shadow-md",
          "hover:shadow-lg",
          "transition-shadow",
          "justify-between",
          "w-30",
          "h-auto"
        );
        card.innerHTML = `
    <div>
        <img
        src="${user.capa}"
        alt="Capa do Usuário"

        class="relative rounded h-32 w-full object-cover object-center"

        style="margin-bottom: -55%;"
    </div>
    <div class="h-80 flex items-center justify-center">
        <img
        src="${user.foto || "https://via.placeholder.com/150"}"
        alt="Imagem do Usuário"
        class="mt-6 mx-4 rounded-lg shadow-xl h-36 w-36 object-cover object-top absolute border-2"
        />
    </div>

    <h2 class="text-2xl font-bold mb-3 text-black capitalize"
    style="margin-top: -15%;">

      ${user.nome}
    </h2>
    <hr class="mb-2">
    <div class="flex justify-center items-center gap-4 mb-2">
      <p class="text-gray-600">
        <i class="fa-solid fa-cake-candles text-customBlue text-xl"></i> 
          ${user.idade}
      </p>
      <p class="text-gray-600">
        <i class="fa-regular fa-clock text-customBlue text-xl"></i> 
          ${user.horasTotais}
      </p>
      <p class="text-gray-600">
        <i class="fa-solid fa-person-half-dress text-customBlue text-2xl"></i> 
          <span class="capitalize">${user.genero}</span>
      </p>
      </div>
       <p class="text-gray-600">
       <i class="fa-solid fa-location-dot text-customBlue text-xl"></i> 
       <span class="capitalize">${user.pais} -</span>
       <span class="capitalize">${user.cidade},</span>
       <span class="capitalize">${user.estado}</span>
      </p>
    <hr class="mt-2">
    <button
      class="bg-customBlue hover:bg-customYellow hover:text-customBlue-dark text-white font-bold py-4 px-6 text-xs rounded-md mt-4 transition duration-300"
      id = "convidar">
      Convidar para ação
    </button>
  `;
        const inviteBtn = card.querySelector("#convidar");
        card.addEventListener("click", () => openModalUser(user));
        grid.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function loadUserActions() {
  fetch("/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let idUsuarioEnvia = data.uid;
      console.log("Success:", data.uid);

      // Carrega as ações que o usuário logado criou
      fetch(`/getAcao/findMy/${idUsuarioEnvia}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          data.forEach((acao) => {
            const option = document.createElement("option");
            option.value = acao.id;
            option.innerText = acao.nome;
            document.getElementById("select-acao").appendChild(option);
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

}

function openModalUser(user) {
  console.log(user);
  // pega o id do usuário que estamos vendo os detalhes a fim de enviar o convite
  let idUsuarioRecebe = user.id;

  console.log(idUsuarioRecebe, user.nome);
  document.getElementById("select-acao").style.display = "block";
  document.getElementById("modal-nome").innerText = user.nome;
  let botaoConvidar = document.getElementById("modal-convidar");
  botaoConvidar.style.display = "block";

  botaoConvidar.replaceWith(botaoConvidar.cloneNode(true));

  document
    .getElementById("modal-convidar")

    .addEventListener("click", () => {
      // Pega o id do usuário que está logado e envia o convite
      fetch("/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let idUsuarioEnvia = data.uid;
          console.log("Success:", data.uid);

          // Pega o id da ação selecionada
          let idProjeto = document.getElementById("select-acao").value;

          // Envia o convite
          fetch("/convite/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              descricao: "Convite para ação",
              status: "Pendente",
              idUsuarioEnvia: idUsuarioEnvia,
              idUsuarioRecebe: idUsuarioRecebe,
              idProjeto: idProjeto,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              alert("Convite enviado com sucesso!");

              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });


    });


  document.getElementById(
    "modal-descricao"
  ).innerText = `Idade: ${user.idade}`;
  document.getElementById(
    "modal-data-inicio"
  ).innerText = `Cidade: ${user.cidade}`;
  document.getElementById(
    "modal-data-fim"
  ).innerText = `Estado: ${user.estado}`;
  document.getElementById(
    "modal-cidade"
  ).innerText = `País: ${user.pais}`;
  document.getElementById(
    "modal-estado"
  ).innerText = `Horas Totais: ${user.horasTotais}`;
  document.getElementById(
    "modal-vagas"
  ).innerText = `Gênero: ${user.genero}`;
  document.getElementById("modalUsers").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector("#modalUsers > div").classList.remove("scale-95");
  }, 100);


  //fecha o modal
  document.getElementById("close-modalUsers").addEventListener("click", () => {
    document.querySelector("#modalUsers > div").classList.add("scale-95");
    setTimeout(() => {
      document.getElementById("modalUsers").classList.add("hidden");
    }, 200);
  });

  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalUsers")) {
      document.querySelector("#modalUsers > div").classList.add("scale-95");
      setTimeout(() => {
        document.getElementById("modalUsers").classList.add("hidden");
      }, 200);
    }
  });
}


