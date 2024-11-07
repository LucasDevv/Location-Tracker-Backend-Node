# 📍 Location Tracker Backend

![License](https://img.shields.io/badge/license-MIT-blue.svg)

**Location Tracker Backend** é uma aplicação backend segura e escalável construída com **Node.js** e **Express.js**. Ela fornece APIs para autenticação de usuários, gerenciamento de dados de localização e garante uma segurança robusta através da autenticação **JWT** e verificação de **API Key**. Este projeto serve como uma base para aplicações que requerem funcionalidade de rastreamento de localização específica para usuários.

## 📑 Índice

- [📍 Location Tracker Backend](#-location-tracker-backend)
  - [📁 Índice](#-índice)
  - [🚧 Funcionalidades](#-funcionalidades)
  - [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [🛋️ Instalação](#-instalação)
  - [🔧 Configuração](#-configuração)
  - [📄 Documentação da API](#-documentação-da-api)
    - [Autenticação](#autenticação)
    - [Gerenciamento de Localização](#gerenciamento-de-localização)
  - [🔒 Segurança](#-segurança)
  - [📤 Deploy](#-deploy)
  - [👥 Contribuindo](#-contribuindo)
  - [📜 Licença](#-licença)
  - [🗒️ Contato](#-contato)

## 🛠️ Funcionalidades

- **Autenticação de Usuários:**
  - Registro de novos usuários com hash seguro de senhas.
  - Funcionalidade de login com geração de token JWT.
- **APIs Protegidas:**
  - Controle de acesso usando autenticação JWT e verificação de API Key.
- **Gerenciamento de Localização:**
  - Adicionar e recuperar dados de localização específicos para cada usuário.
- **Melhorias de Segurança:**
  - Helmet para proteger cabeçalhos HTTP.
  - Configuração de CORS para gerenciar requisições cross-origin.
  - Rate limiting para prevenir abusos e ataques DDoS.
- **Pronto para Deploy:**
  - Fácil deploy em plataformas como Heroku.
  - Gerenciamento de variáveis de ambiente para configuração segura.

## 🚀 Tecnologias Utilizadas

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Autenticação:**
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Banco de Dados:**
  - [Sequelize](https://sequelize.org/)
  - [MariaDB/MySQL](https://mariadb.org/)
- **Segurança:**
  - [Helmet](https://www.npmjs.com/package/helmet)
  - [CORS](https://www.npmjs.com/package/cors)
  - [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- **Deploy:**
  - [Heroku](https://www.heroku.com/)
- **Outras Ferramentas:**
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [nodemon](https://www.npmjs.com/package/nodemon)

## 📦 Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/location-tracker-backend.git
   cd location-tracker-backend
   ```

2. **Instale as Dependências:**

   Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados.

   ```bash
   npm install
   ```

3. **Configure o Banco de Dados:**

   - Instale e configure [MariaDB](https://mariadb.org/) ou [MySQL](https://www.mysql.com/).
   - Crie um novo banco de dados, por exemplo, `location_tracker`.

4. **Configure as Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do diretório e adicione as seguintes variáveis:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha_forte
   DB_NAME=location_tracker
   JWT_SECRET=seu_jwt_secreto_unico
   API_KEY=sua_api_key_unica123456
   ```

   **Nota:** Substitua os valores de exemplo pelos valores reais do seu ambiente.

5. **Execute as Migrações (se aplicável):**

   Certifique-se de que as tabelas do banco de dados estão configuradas corretamente. Se estiver usando migrações do Sequelize:

   ```bash
   npx sequelize-cli db:migrate
   ```

6. **Inicie o Servidor:**

   - **Modo de Desenvolvimento (com nodemon):**

     ```bash
     npm run dev
     ```

   - **Modo de Produção:**

     ```bash
     npm start
     ```

## 🔧 Configuração

- **Variáveis de Ambiente:**

  O aplicativo utiliza variáveis de ambiente para configuração. Certifique-se de que todas as variáveis necessárias estão definidas no arquivo `.env`.

- **Segurança:**

  - **JWT_SECRET:** Uma chave secreta forte e única para assinar tokens JWT.
  - **API_KEY:** Uma chave única para autenticar requisições de API.

- **Scripts:**

  - **Iniciar o Servidor:**

    ```bash
    npm start
    ```

  - **Iniciar o Servidor com Nodemon (Desenvolvimento):**

    ```bash
    npm run dev
    ```

## 📄 Documentação da API

### Autenticação

#### Registrar um Novo Usuário

- **Endpoint:** `POST /api/auth/register`
- **Descrição:** Registra um novo usuário com um nome de usuário e senha.
- **Corpo da Requisição:**

  ```json
  {
    "username": "usuario1",
    "password": "senha123"
  }
  ```

- **Respostas:**
  - **201 Created:**

    ```json
    {
      "message": "Usuário criado com sucesso."
    }
    ```

  - **400 Bad Request:** Usuário já existe.

    ```json
    {
      "message": "Usuário já existe."
    }
    ```

  - **500 Internal Server Error:**

    ```json
    {
      "message": "Erro no servidor.",
      "error": "Detalhes do erro"
    }
    ```

#### Login de Usuário

- **Endpoint:** `POST /api/auth/login`
- **Descrição:** Autentica um usuário e retorna um token JWT.
- **Corpo da Requisição:**

  ```json
  {
    "username": "usuario1",
    "password": "senha123"
  }
  ```

- **Respostas:**
  - **200 OK:**

    ```json
    {
      "token": "seu_jwt_token_unico"
    }
    ```

  - **400 Bad Request:** Usuário não encontrado ou senha inválida.

    ```json
    {
      "message": "Usuário não encontrado."
    }
    ```

    ```json
    {
      "message": "Senha inválida."
    }
    ```

  - **500 Internal Server Error:**

    ```json
    {
      "message": "Erro no servidor.",
      "error": "Detalhes do erro"
    }
    ```

### Gerenciamento de Localização

**Nota:** Todos os endpoints sob `/api/location` são protegidos e requerem tanto um token JWT válido quanto uma API Key.

#### Adicionar uma Nova Localização

- **Endpoint:** `POST /api/location/send`
- **Descrição:** Adiciona uma nova entrada de localização para o usuário autenticado.
- **Cabeçalhos:**
  - `Authorization: Bearer <seu_jwt_token>`
  - `x-api-key: sua_api_key_unica123456`
- **Corpo da Requisição:**

  ```json
  {
    "latitude": 123.456,
    "longitude": 78.90
  }
  ```

- **Respostas:**
  - **201 Created:**

    ```json
    {
      "message": "Localização registrada com sucesso.",
      "location": {
        "id": 1,
        "user_id": 1,
        "latitude": 123.456,
        "longitude": 78.90,
        "timestamp": "2024-04-27T12:34:56.789Z"
      }
    }
    ```

  - **401 Unauthorized:** Token ou API Key não fornecidos.

    ```json
    {
      "message": "Acesso negado. Token não fornecido."
    }
    ```

    ```json
    {
      "message": "Acesso negado. API Key não fornecida."
    }
    ```

  - **403 Forbidden:** API Key inválida.

    ```json
    {
      "message": "API Key inválida."
    }
    ```

  - **400 Bad Request:** Token inválido.

    ```json
    {
      "message": "Token inválido."
    }
    ```

  - **500 Internal Server Error:**

    ```json
    {
      "message": "Erro no servidor.",
      "error": "Detalhes do erro"
    }
    ```

#### Obter uma String de Exemplo

- **Endpoint:** `GET /api/location/get-string`
- **Descrição:** Recupera uma string de exemplo. (Para fins de teste)
- **Cabeçalhos:**
  - `Authorization: Bearer <seu_jwt_token>`
  - `x-api-key: sua_api_key_unica123456`
- **Respostas:**
  - **200 OK:**

    ```json
    {
      "message": "Esta é a string retornada pelo servidor."
    }
    ```

  - **401 Unauthorized:** Token ou API Key não fornecidos.

    ```json
    {
      "message": "Acesso negado. Token não fornecido."
    }
    ```

    ```json
    {
      "message": "Acesso negado. API Key não fornecida."
    }
    ```

  - **403 Forbidden:** API Key inválida.

    ```json
    {
      "message": "API Key inválida."
    }
    ```

  - **400 Bad Request:** Token inválido.

    ```json
    {
      "message": "Token inválido."
    }
    ```

## 🔒 Segurança

O **Location Tracker Backend** implementa várias medidas de segurança para garantir a integridade dos dados e proteger contra vulnerabilidades comuns:

- **Autenticação JWT:**
  - Autenticação segura de usuários utilizando tokens JWT.
  - Tokens incluem payloads específicos do usuário (`id`, `username`).
  - Tokens possuem tempos de expiração para limitar sua validade.
  
- **Verificação de API Key:**
  - Adiciona uma camada extra de segurança exigindo uma API Key válida nos cabeçalhos das requisições.
  - Garante que apenas aplicações autorizadas possam acessar as APIs.

- **Helmet Middleware:**
  - Define vários cabeçalhos HTTP para proteger a aplicação contra vulnerabilidades conhecidas.

- **Configuração de CORS:**
  - Configurada para permitir requisições apenas de origens autorizadas.

- **Rate Limiting:**
  - Limita o número de requisições de um único IP para prevenir abusos e ataques DDoS.

- **Hashing de Senhas:**
  - As senhas dos usuários são hashadas usando bcryptjs antes de serem armazenadas no banco de dados.
