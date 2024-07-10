# WebAPI e endpoints

&nbsp;&nbsp;&nbsp;&nbsp; A WebAPI é uma API RESTful que permite a comunicação entre o frontend e o backend da aplicação. Ela é responsável por realizar o gerenciamento dos usuários, projetos e autenticação na plataforma. A API foi desenvolvida utilizando o framework Sails.js e a linguagem de programação JavaScript. A seguir, são apresentados os endpoints disponíveis na API, bem como suas descrições, métodos, parâmetros e respostas.

# PerfilUsuarioController

O `PerfilUsuarioController` é responsável por realizar o gerenciamento dos usuários na plataforma. Ele permite a criação, leitura e deleção de perfis de usuários.

## Endpoints

### Criar Perfil de Usuário

- **URL**: `/user`
- **Método**: `POST`
- **Descrição**: Cria um novo perfil de usuário na plataforma.
- **User Story Relacionada**: US05 - "Como universitário que deseja se voluntariar, gostaria de criar um perfil na plataforma, a fim de poder exibir os trabalhos que já fiz, informações como a quantidade de horas que já trabalhei e obter reconhecimento por isso."
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "id": "string",
    "nome": "string",
    "idade": "number",
    "email": "string",
    "senha": "string",
    "cidade": "string",
    "estado": "string",
    "pais": "string",
    "horasTotais": "number",
    "genero": "string"
  }
  ```
- **Respostas**:
  - **201 CREATED**:
    ```json
    {
      "id": "string",
      "nome": "string",
      "idade": "number",
      "email": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "horasTotais": "number",
      "genero": "string"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao criar um novo usuário"
    }
    ```

### Deletar Perfil de Usuário

- **URL**: `/user/delete/{id}`
- **Método**: `DELETE`
- **Descrição**: Deleta um perfil de usuário na plataforma.
- **User Story Relacionada**: US06 - "Como universitário que deseja se voluntariar, gostaria de editar as informações do meu perfil na plataforma, a fim de mantê-lo atualizado com as mais recentes informações sobre os meus voluntariados."
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `id`: `string` (ID do perfil do usuário a ser deletado)
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "id": "string",
      "nome": "string",
      "idade": "number",
      "email": "string",
      "senha": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "horasTotais": "number",
      "genero": "string"
    }
    ```
  - **500 Not Found**:
    ```json
    {
      "error": "Erro ao deletar usuário"
    }
    ```

### Ler Perfil de Usuário

- **URL**: `/user/{id}`
- **Método**: `GET`
- **Descrição**: Retorna um perfil de usuário na plataforma.
- **User Story Relacionada**: US05 - "Como universitário que deseja se voluntariar, gostaria de criar um perfil na plataforma, a fim de poder exibir os trabalhos que já fiz, informações como a quantidade de horas que já trabalhei e obter reconhecimento por isso."
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `id`: `string` (ID do perfil do usuário a ser lido)
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "id": "string",
      "nome": "string",
      "idade": "number",
      "email": "string",
      "senha": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "horasTotais": "number",
      "genero": "string"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "error": "Usuário não encontrado"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao buscar usuário"
    }
    ```

<br>
<br>

# EmailAuthController

O `EmailAuthController` é responsável por realizar a autenticação de usuários na plataforma por meio de e-mail e senha utilizando o serviço de autenticação do Firebase.

## Endpoints

### Autenticar Usuário (Login)

- **URL**: `/emailLogin`
- **Método**: `POST`
- **Descrição**: Autentica um usuário na plataforma por meio de e-mail e senha.
- **User Story Relacionada**: US12 - "Como voluntária que busca colaboradores para minhas ações, gostaria de me cadastrar na plataforma a fim de conseguir utilizá-la completamente."
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "string",
    "senha": "string"
  }
  ```
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "user": {
        "uid": "string",
        "email": "string",
        "outras informações do usuário que são retornadas pelo Firebase"
      }
    }
    ```
  - **500 Internal Server Error**:
    ```json
    {
      "error": "mensagem de erro do Firebase"
    }
    ```

### Registrar Usuário (Cadastro)

- **URL**: `/emailSignUp`
- **Método**: `POST`
- **Descrição**: Registra um novo usuário na plataforma por meio de e-mail e senha.
- **User Story Relacionada**: US12 - "Como voluntária que busca colaboradores para minhas ações, gostaria de me cadastrar na plataforma a fim de conseguir utilizá-la completamente."
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Respostas**:
  - **200 Created**:
    ```json
    {
      "user": {
        "uid": "string",
        "email": "string",
        "outras informações do usuário que são retornadas pelo Firebase"
      }
    }
    ```
  - **500 Internal Server Error**:
    ```json
    {
      "error": "mensagem de erro do Firebase"
    }
    ```

### Deslogar Usuário (Logout)

- **URL**: `/emailLogout`
- **Método**: `POST`
- **Descrição**: Desloga um usuário da plataforma.
- **User Story Relacionada**: US12 - "Como voluntária que busca colaboradores para minhas ações, gostaria de me cadastrar na plataforma a fim de conseguir utilizá-la completamente."
- **Headers**:
  - `Content-Type: application/json`
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "message": "Usuário deslogado com sucesso"
    }
    ```
  - **500 Internal Server Error**:
    ```json
    {
      "error": "mensagem de erro do Firebase"
    }
    ```

### Verificar Autenticação do Usuário

- **URL**: `/checkUser`
- **Método**: `GET`
- **Descrição**: Verifica se um usuário está autenticado na plataforma.
- **User Story Relacionada**: US12 - "Como voluntária que busca colaboradores para minhas ações, gostaria de me cadastrar na plataforma a fim de conseguir utilizá-la completamente."
- **Headers**:
  - `Content-Type: application/json`
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "currentUser": {
        "uid": "string",
        "email": "string",
        "outras informações do usuário que são retornadas pelo Firebase"
      }
    }
    ```
  - **401 Unauthorized**:
    ```json
    {
      "error": "Usuário não autenticado"
    }
    ```

<br>
<br>

# ProjetoController

O `ProjetoController` é responsável por realizar o gerenciamento dos projetos na plataforma. Ele permite a criação, leitura, atualização e deleção de projetos.

## Endpoints

### Criar Projeto

- **URL**: `/criarAcao/create`
- **Método**: `POST`
- **Descrição**: Cria um novo projeto na plataforma.
- **User Story Relacionada**: US02 - "Como diretor de uma ONG, gostaria de cadastrar uma ação social em nome da minha ONG na plataforma, a fim de divulgá-la e angariar mais voluntários para a causa."
- **Exemplo de requisição:** <br>

```javascript
const responseAcao = await fetch("/criarAcao/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formDataAcao),
            });

            const dataAcao = await responseAcao.json();
            console.log("Ação social cadastrada com sucesso:", dataAcao);
            alert("Ação social cadastrada com sucesso!");
            window.location.href = "/social"; // Redireciona após sucesso
          } catch (error) {
            console.error("Erro ao cadastrar ação social:", error);
            alert("Erro ao cadastrar ação social.");
          }
```

- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "id": "string",
    "idCriador": "string",
    "nome": "string",
    "descricao": "string",
    "dataInicio": "string",
    "dataFim": "string",
    "cidade": "string",
    "estado": "string",
    "pais": "string",
    "numeroVagas": "number"
  }
  ```
- **Respostas**:
  - **201 CREATED**:
    ```json
    {
      "id": "string",
      "idCriador": "string",
      "nome": "string",
      "descricao": "string",
      "dataInicio": "string",
      "dataFim": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "numeroVagas": "number"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao criar projeto"
    }
    ```

### Listar Projetos

- **URL**: `/getAcao/all`
- **Método**: `GET`
- **Descrição**: Retorna todos os projetos cadastrados na plataforma.
- **User Story Relacionada**: US08 - "Como gestora de projetos e voluntária de longa data, gostaria de visualizar todas as oportunidades de trabalho filtradas por áreas disponíveis na plataforma."
- **Headers**:
  - `Content-Type: application/json`
- **Respostas**:
  - **200 OK**:
    ```json
    [
      {
        "id": "string",
        "idCriador": "string",
        "nome": "string",
        "descricao": "string",
        "dataInicio": "string",
        "dataFim": "string",
        "cidade": "string",
        "estado": "string",
        "pais": "string",
        "numeroVagas": "number"
      }
    ]
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao obter projetos"
    }
    ```

### Obter Projeto por ID do Criador

- **URL**: `/getAcao/findMy/{idCriador}`
- **Método**: `GET`
- **Descrição**: Retorna todos os projetos cadastrados na plataforma por um determinado criador.
- **User Story Relacionada**: US11 - "Como voluntária que busca colaboradores para minhas ações, gostaria de conseguir editar as ações que criei, de forma a mantê-las atualizadas e coerentes com o estado do meu projeto.
- **Exemplo de requisição:** <br>
```javascript
fetch(`/getAcao/findMy/${idUsuarioEnvia}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
```
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `idCriador`: `string` (ID do criador dos projetos a serem lidos)
- **Respostas**:
  - **200 OK**:
    ```json
    [
      {
        "id": "string",
        "idCriador": "string",
        "nome": "string",
        "descricao": "string",
        "dataInicio": "string",
        "dataFim": "string",
        "cidade": "string",
        "estado": "string",
        "pais": "string",
        "numeroVagas": "number"
      }
    ]
    ```
  - **404 Not Found**:
    ```json
    {
      "error": "Projetos não encontrados"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao obter projetos"
    }
    ```

### Obter Projeto por ID

- **URL**: `/getAcao/id/{id}`
- **Método**: `GET`
- **Descrição**: Retorna um projeto cadastrado na plataforma por um determinado ID.
- **User Story Relacionada**: US09 - "Como gestora de projetos e voluntária de longa data, gostaria de obter detalhamento sobre uma ação em específico na qual estou interessada a fim de conhecer mais e decidir se realmente irei me voluntariar naquele caso."
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `id`: `string` (ID do projeto a ser lido)
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "id": "string",
      "idCriador": "string",
      "nome": "string",
      "descricao": "string",
      "dataInicio": "string",
      "dataFim": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "numeroVagas": "number"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "error": "Projeto não encontrado"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao obter projeto"
    }
    ```

### Atualizar Projeto

- **URL**: `/updateAcao/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza um projeto na plataforma.
- **User Story Relacionada**: US11 - "Como voluntária que busca colaboradores para minhas ações, gostaria de conseguir editar as ações que criei, de forma a mantê-las atualizadas e coerentes com o estado do meu projeto."
- **Exemplo de requisição:** <br>
```javascript
 const response = await fetch(`/updateAcao/${idAcao}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: actionName,
            descricao: actionDesc,
            dataInicio: actionStartDate,
            dataFim: actionEndDate,
            estado: actionState,
            cidade: actionCity,
            numeroVagas: actionVagas,
          }),
        });
```
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "id": "string",
    "idCriador": "string",
    "nome": "string",
    "descricao": "string",
    "dataInicio": "string",
    "dataFim": "string",
    "cidade": "string",
    "estado": "string",
    "pais": "string",
    "numeroVagas": "number"
  }
  ```
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "id": "string",
      "idCriador": "string",
      "nome": "string",
      "descricao": "string",
      "dataInicio": "string",
      "dataFim": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "numeroVagas": "number"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao atualizar projeto"
    }
    ```

### Deletar Projeto

- **URL**: `/deleteAcao/:id`
- **Método**: `DELETE`
- **Descrição**: Deleta um projeto na plataforma.
- **User Story Relacionada**: US11 - "Como voluntária que busca colaboradores para minhas ações, gostaria de conseguir editar as ações que criei, de forma a mantê-las atualizadas e coerentes com o estado do meu projeto."
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `id`: `string` (ID do projeto a ser deletado)
- **Respostas**:
  - **200 OK**:
    ```json
    {
      "id": "string",
      "idCriador": "string",
      "nome": "string",
      "descricao": "string",
      "dataInicio": "string",
      "dataFim": "string",
      "cidade": "string",
      "estado": "string",
      "pais": "string",
      "numeroVagas": "number"
    }
    ```
  - **500 Not Found**:
    ```json
    {
      "error": "Erro ao deletar projeto"
    }
    ```

<br>

# UsuarioPorProjetoController

O `UsuarioPorProjetoController` é responsável por realizar o gerenciamento dos usuários associados a um projeto na plataforma. Ele permite a criação, leitura, atualização e deleção de usuários associados a um projeto.

## Endpoints

### Adicionar Usuário a um Projeto

- **URL**: `/usuarioPorProjeto/create`
- **Método**: `POST`
- **Descrição**: Adiciona um usuário a um projeto na plataforma.
- **User Story Relacionada**: US10 - "Como gestora de projetos e voluntária de longa data, gostaria de me inscrever em uma ação de voluntariado de minha escolha na plataforma, para poder contribuir com ações que são de meu interesse"
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "idUsuario": "string",
    "idProjeto": "string",
    "horasContadas": "number",
    "funcao": "string",
    "dataEntrada": "string"
  }
  ```
- **Respostas**:
  - **201 CREATED**:
    ```json
    {
      "idUsuario": "string",
      "idProjeto": "string",
      "horasContadas": "number",
      "funcao": "string",
      "dataEntrada": "string"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao adicionar usuário ao projeto"
    }
    ```

### Listar Usuários Associados a um Projeto

- **URL**: `/usuarioPorProjeto/find/:idProjeto`
- **Método**: `GET`
- **Descrição**: Retorna todos os usuários associados a um projeto na plataforma.
- **User Story Relacionada**: US10 - "Como gestora de projetos e voluntária de longa data, gostaria de me inscrever em uma ação de voluntariado de minha escolha na plataforma, para poder contribuir com ações que são de meu interesse"
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `idProjeto`: `string` (ID do projeto a ser lido)
- **Respostas**:
  - **200 OK**:
    ```json
    [
      {
        "idUsuario": "string",
        "idProjeto": "string",
        "horasContadas": "number",
        "funcao": "string",
        "dataEntrada": "string"
      }
    ]
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao obter usuários associados ao projeto"
    }
    ```
    <br>

# ConviteController

O `ConviteController` é responsável por realizar o gerenciamento dos convites de usuários associados a um projeto na plataforma. Ele permite a criação e leitura de convites.

## Endpoints

### Criar Convite

- **URL**: `/convite/create`
- **Método**: `POST`
- **Descrição**: Cria um novo convite de usuário associado a um projeto na plataforma.
- **User Story Relacionada**: US04 - "Como diretor de uma ONG, gostaria de convidar voluntários promissores para engajarem nas ações sociais da minha ONG, com o intuito de trazer voluntários que agreguem valor à minha organização."
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "idUsuarioEnvia": "string",
    "idUsuarioRecebe": "string",
    "idProjeto": "string",
    "descricao": "string",
    "status": "string"
  }
  ```
- **Respostas**:
  - **201 CREATED**:
    ```json
    {
      "idUsuarioEnvia": "string",
      "idUsuarioRecebe": "string",
      "idProjeto": "string",
      "descricao": "string",
      "status": "string"
    }
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao criar convite"
    }
    ```

### Listar Convites de um Usuário

- **URL**: `/convite/find/`
- **Método**: `GET`
- **Descrição**: Retorna todos os convites de um usuário na plataforma.
- **User Story Relacionada**: US04 - "Como diretor de uma ONG, gostaria de convidar voluntários promissores para engajarem nas ações sociais da minha ONG, com o intuito de trazer voluntários que agreguem valor à minha organização."
- **Headers**:
  - `Content-Type: application/json`
- **Parâmetros**:
  - `idUsuarioRecebe`: `string` (ID do usuário a ser lido)
- **Respostas**:
  - **200 OK**:
    ```json
    [
      {
        "idUsuarioEnvia": "string",
        "idUsuarioRecebe": "string",
        "idProjeto": "string",
        "descricao": "string",
        "status": "string"
      }
    ]
    ```
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao obter convites"
    }
    ```

<br>
<br>

# Endpoints de Páginas

&nbsp;&nbsp;&nbsp;&nbsp; Os endpoints de páginas são responsáveis por renderizar as páginas da aplicação web. Eles são utilizados para exibir as páginas de login, cadastro, perfil do usuário, criação de projetos, entre outras.

# Mostrar pagina de Criar Projeto (Ação)

- **URL**: `/criarAcao`
- **Método**: `GET`
- **Descrição**: Mostra a página de criação de um novo projeto na plataforma.
- **User Story Relacionada**: US02 - "Como diretor de uma ONG, gostaria de cadastrar uma ação social em nome da minha ONG na plataforma, a fim de divulgá-la e angariar mais voluntários para a causa."
- **Headers**:
  - `Content-Type: application/json`
- **Respostas**:
  - **200 OK**: Renderiza a página `pages/criarAcao`.
  - **500 Bad Request**:
    `json
    {
      "error": "Erro ao exibir página de criação de projeto"
    }
    `
    <br>
    <br>

# Mostrar pagina home da plataforma

- **URL**: `/social`
- **Método**: `GET`
- **Descrição**: Mostra a página inicial da plataforma.
- **User Story Relacionada**: US08 - "Como gestora de projetos e voluntária de longa data, gostaria de visualizar todas as oportunidades de trabalho filtradas por áreas disponíveis na plataforma."
- **Headers**:
  - `Content-Type: application/json`
- **Respostas**:
  - **200 OK**: Renderiza a página `pages/social`.
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao exibir página inicial"
    }
    ```

<br>
<br>

# Mostrar pagina de perfil do usuário

- **URL**: `/perfil`
- **Método**: `GET`
- **Descrição**: Mostra a página de perfil do usuário na plataforma.
- **User Story Relacionada**: US05 - "Como universitário que deseja se voluntariar, gostaria de criar um perfil na plataforma, a fim de poder exibir os trabalhos que já fiz, informações como a quantidade de horas que já trabalhei e obter reconhecimento por isso."
- **Headers**:
  - `Content-Type: application/json`
- **Respostas**:
  - **200 OK**: Renderiza a página `pages/perfil`.
  - **500 Bad Request**:
    ```json
    {
      "error": "Erro ao exibir página de perfil do usuário"
    }
    ```

<br>
