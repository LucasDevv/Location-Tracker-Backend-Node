// models/location.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Location = sequelize.define('Location', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL(9,6),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(9,6),
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'locations',
    timestamps: false,
});

module.exports = Location;
