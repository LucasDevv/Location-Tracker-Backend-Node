// index.js
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/locations');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/location', locationRoutes);

// Sincronização com o banco de dados e iniciar o servidor
const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });
