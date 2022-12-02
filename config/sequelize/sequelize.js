const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-MP02-Sobotka-s20439', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;