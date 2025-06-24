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
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true
});

User.createUser = async function(username, password, email) {
    return await User.create({ username, password, email });
};

User.findByUsername = async function(username) {
    return await User.findOne({ where: { username } });
};

module.exports = User;