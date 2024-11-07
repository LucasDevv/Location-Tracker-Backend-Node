// middlewares/apiKeyMiddleware.js
require('dotenv').config();

module.exports = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        return res.status(401).json({ message: 'Acesso negado. API Key não fornecida.' });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ message: 'API Key inválida.' });
    }

    next();
};
