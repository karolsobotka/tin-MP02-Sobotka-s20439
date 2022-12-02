const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employee = sequelize.define('Employee',{
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_number: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Employee;