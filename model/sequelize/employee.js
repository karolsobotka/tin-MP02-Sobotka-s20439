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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false

    },
    phone_number: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true,
        validate: {
            len: {
                args: [9,9],
                msg: "Pole powinno zawierać 9 znaków"
            },
            
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,120],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Employee;