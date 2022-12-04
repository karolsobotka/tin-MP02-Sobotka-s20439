const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin_MP02_Sobotka_s20439', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
});

module.exports = sequelize;