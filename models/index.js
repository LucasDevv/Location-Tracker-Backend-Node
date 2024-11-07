// models/index.js
const sequelize = require('../config/database');
const User = require('./user');
const Location = require('./location');

// Definindo relações
User.hasMany(Location, { foreignKey: 'user_id' });
Location.belongsTo(User, { foreignKey: 'user_id' });

const db = {
    sequelize,
    User,
    Location,
};

module.exports = db;
