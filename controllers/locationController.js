// controllers/locationController.js
const { Location } = require('../models');

exports.addLocation = async (req, res) => {
    const userId = req.user.id;
    const { latitude, longitude } = req.body;
    try {
        const location = await Location.create({ user_id: userId, latitude, longitude });
        res.status(201).json({ message: 'Localização registrada com sucesso.', location });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor.', error: error.message });
    }
};

exports.getString = async (req, res) => {
    // Implementar lógica para retornar uma string. Exemplo simples:
    res.json({ message: 'Esta é a string retornada pelo servidor.' });
};
