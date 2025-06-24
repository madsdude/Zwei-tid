const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

User.createUser = async function(username, password) {
    return await User.create({ username, password });
};

User.findByUsername = async function(username) {
    return await User.findOne({ where: { username } });
};

module.exports = User;