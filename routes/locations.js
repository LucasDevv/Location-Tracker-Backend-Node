// routes/locations.js
const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const authMiddleware = require('../middlewares/authMiddleware');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');

// Rota para enviar localização
router.post('/send', authMiddleware, apiKeyMiddleware, locationController.addLocation);

// Rota para receber uma string
router.get('/get-string', authMiddleware, apiKeyMiddleware, locationController.getString);

module.exports = router;
