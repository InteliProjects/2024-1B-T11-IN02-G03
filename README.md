# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Voluntariado Transformador Massivo

## CSS - Constructing Social Services

## Integrantes: 
- <a href="https://www.linkedin.com/in/caio-alcantara-santos/">Caio de Alcantara Santos</a>
- <a href="https://www.linkedin.com/in/giacomo-zema-matizonkas-7ab9072b2/">Giacomo Zema Matizonkas</a>
- <a href="https://www.linkedin.com/in/heitorfariacandido/">Heitor de Faria Candido</a> 
- <a href="https://www.linkedin.com/in/souzajv/">João Victor de Souza Campos</a> 
- <a href="https://www.linkedin.com/in/kauarodrigues/">Kauã Rodrigues dos Santos</a>
- <a href="https://www.linkedin.com/in/lucas-cozzolino-tort-783273270/">Lucas Cozzolino Tort</a> 
- <a href="https://www.linkedin.com/in/bruno-crusinski/">Bruno Carvalho Crusinski</a>

## Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/juliastateri/">Julia Stateri</a>
### Instrutores
- <a href="https://www.linkedin.com/in/cristiano-benites-687647a8/">Cristiano da Silva Benites</a>
- <a href="https://www.linkedin.com/in/bruna-mayer-00a556174/">Bruna Mayer</a> 
- <a href="https://www.linkedin.com/in/egondaxbacher/">Egon Ferreira Daxbacher</a> 
- <a href="https://www.linkedin.com/in/ricardo-missori/">Ricardo José Missori</a>
- <a href="https://www.linkedin.com/in/filipe-gon%C3%A7alves-08a55015b/">Filipe Gonçalves de Souza Nogueira da Silva</a>

## 📝 Descrição

&nbsp;&nbsp;&nbsp;&nbsp; Atualmente, muitas organizações não governamentais (ONGs) e indivíduos com iniciativas sociais enfrentam grandes desafios no momento de encontrar voluntários para seus programas e campanhas. A falta de um meio de comunicação e divulgação eficaz restringe o alcance e o potencial impacto dessas iniciativas. Além disso, é importante reconhecer a necessidade de fortalecer os laços dentro da comunidade de voluntários que já existe. Dessa forma, surge a necessidade de estabelecer uma comunidade onde esses indivíduos possam não só contribuir para efetivas mudanças, mas também encontrar apoio e orientação mútua ao enfrentar esses desafios. <br>
&nbsp;&nbsp;&nbsp;&nbsp;A nossa solução para esse problema é uma plataforma centrada no voluntariado onde organizações podem encontrar pessoas disponíveis para trabalho voluntário. Além disso, pessoas dispostas a se voluntariar podem encontrar ações sociais próximas de si e se candidatarem. Ou seja, a ideia principal da plataforma é ser um local onde pessoas possam se cadastrar e demonstrar áreas de interesse e as organizações sociais vão até elas quando precisarem de voluntários. Como adendo, uma organização ou usuário poderá cadastrar ações próprias diretamente na plataforma e as pessoas poderão se candidatar por lá.<br>
&nbsp;&nbsp;&nbsp;&nbsp;A solução proposta por nossa equipe é a criação de uma plataforma estilo LinkedIn dedicada à centralização dos atores do mercado de Voluntariado, com ênfase no voluntário; permitindo que voluntários e organizações divulguem ações sociais, exponham seu currículo de projetos sociais para os demais e busquem por projetos, pessoas e ONGs que se alinham com suas causas. <br>


## 📝 Link de demonstração

Link da plataforma desenvolvida: <a href="https://two024-1b-t11-in02-g03.onrender.com/social">https://two024-1b-t11-in02-g03.onrender.com/social</a> <br>

Link de vídeo de demonstração da plataforma: <a href="https://www.youtube.com/watch?v=Mh7uRrSC7WU">https://www.youtube.com/watch?v=Mh7uRrSC7WU</a>
## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>assets</b>: aqui estão os arquivos relacionados a elementos não-estruturados deste repositório, como imagens.

- <b>documentos</b>: aqui estão todos os documentos do projeto, como o Web Application  Document (WAD) bem como documentos complementares, na pasta "outros".

- <b>src</b>: Todo o código fonte criado para o desenvolvimento do projeto de aplicação web, incluindo a pasta css-project, onde temos todos os arquivos essenciais para o funcionamento de uma aplicação Sails Js.

- <b>README.md</b>: arquivo que serve como guia introdutório e explicação geral sobre o projeto e a aplicação (o mesmo arquivo que você está lendo agora).

## 💻 Configuração para desenvolvimento e execução do código

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o Node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 20.14.0 LTS)
2. Baixar e instalar o Git: [https://git-scm.com/downloads](https://git-scm.com/downloads) (versão 2.45.2)
3. Clone o repositório em questão: Abra um "prompt de comando" ou "terminal" no seu computador, navegue até um diretório apropriado para você e rode o seguinte comando:
```sh
git clone https://github.com/Inteli-College/2024-1B-T11-IN02-G03.git
```
4. No mesmo terminal anterior, navegue até a pasta css-project e instale as dependências novamente:

```sh
cd src/css-project
```
```sh
npm install
```
Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto.

5. Instale o Sails:

```sh
npm install -g sails
```

6. Antes de rodar a aplicação, entre no arquivo datastore.js e configure o link para o seu banco de dados. Além disso, no Controller de autenticação, adicione as credenciais do Firebase.

7. Ainda na pasta src/css-project, rode a aplicação:

```sh
sails lift
```

8. Agora você pode acessar a aplicação através do link http://localhost:1337/ em seu navegador

## 🗃 Histórico de lançamentos

* 0.5.0 - 20/06/2024 - Polimento da plataforma e testes de usabilidade com diversos usuários
     
* 0.4.0 - 07/06/2024 - Testes automatizados, grande parte do frontend e backend da aplicação finalizados
     
* 0.3.0 - 24/05/2024 - Atualizações de protótipos e segunda versão da aplicação web com criação e display de ações sociais
     
* 0.2.0 - 10/05/2024 - Protótipos de alta fidelidade, modelagem de banco de dados e primeira versão da aplicação web com cadastro de usuário

* 0.1.0 - 26/04/2024 - Arquitetura de Software e Wireframes 

## 📋 Licença/License


<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Inteli-College/2024-1B-T11-IN02-G03">Voluntariado Transformador Massivo</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.inteli.edu.br/">Inteli</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/caio-alcantara">Caio de Alcantara Santos</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/Zema02">Giacomo Zema Matizonkas</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/HeitorCand">Heitor de Faria Candido</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/souzajv">João Souza Campos</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/kauarodriguessss">Kauã Rodrigues dos Santos</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/lucastort1">Lucas Cozzolino Tort</a>, <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/bcrusinski">Bruno Carvalho Crusinski</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>

