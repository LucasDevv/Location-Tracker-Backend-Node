// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');

// Registro de usuário
router.post('/register', apiKeyMiddleware, authController.register);

// Login de usuário
router.post('/login', apiKeyMiddleware, authController.login);

module.exports = router;
