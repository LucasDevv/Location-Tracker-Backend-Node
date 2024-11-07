# 📍 Location Tracker Backend

![License](https://img.shields.io/badge/license-MIT-blue.svg)

**Location Tracker Backend** é uma aplicação backend segura e escalável construída com Node.js e Express.js. Ela fornece APIs para autenticação de usuários, gerenciamento de dados de localização e garante uma segurança robusta através da autenticação JWT e verificação de API Key. Este projeto serve como uma base para aplicações que requerem funcionalidade de rastreamento de localização específica para usuários.

## Table of Contents

- [📍 Location Tracker Backend](#-location-tracker-backend)
  - [Table of Contents](#table-of-contents)
  - [🛠️ Features](#️-features)
  - [🚀 Technologies Used](#-technologies-used)
  - [📦 Installation](#-installation)
  - [🔧 Configuration](#-configuration)
  - [📄 API Documentation](#-api-documentation)
    - [Authentication](#authentication)
    - [Location Management](#location-management)
  - [🔒 Security](#-security)
  - [📤 Deployment](#-deployment)
  - [👥 Contributing](#-contributing)
  - [📜 License](#-license)
  - [📝 Contact](#-contact)

## 🛠️ Features

- **User Authentication:**
  - Registra novos usuários com hashing seguro de senhas.
  - Funcionalidade de login com geração de token JWT.
- **Protected APIs:**
  - Controle de acesso usando autenticação JWT e verificação de API Key.
- **Location Management:**
  - Adiciona e recupera dados de localização específicos para cada usuário.
- **Security Enhancements:**
  - Helmet para proteger cabeçalhos HTTP.
  - Configuração de CORS para gerenciar requisições cross-origin.
  - Rate limiting para prevenir abusos e ataques DDoS.
- **Deployment Ready:**
  - Fácil de deployar em plataformas como Heroku.
  - Gerenciamento de variáveis de ambiente para configuração segura.

## 🚀 Technologies Used

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Authentication:**
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Database:**
  - [Sequelize](https://sequelize.org/)
  - [MariaDB/MySQL](https://mariadb.org/)
- **Security:**
  - [Helmet](https://www.npmjs.com/package/helmet)
  - [CORS](https://www.npmjs.com/package/cors)
  - [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- **Deployment:**
  - [Heroku](https://www.heroku.com/)
- **Others:**
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [nodemon](https://www.npmjs.com/package/nodemon)

## 📦 Installation

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/location-tracker-backend.git
   cd location-tracker-backend
