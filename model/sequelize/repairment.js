const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Repairment = sequelize.define('Repairment',{
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [1, 1],
                msg: "Pole powinno zawierać id auta naprawianego"
            },
        }
    },
    mechanic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [1, 1],
                msg: "Pole powinno zawierać id mechanika naprawiającego"
            },
        }
    },
    description: { 
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 300],
                msg: "Pole powinno zawierać opis naprawy auta od 0 do 300 znaków"
            },
        }
    },
    repairment_date:{
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane, podaj datę naprawy"
            }, 
        }
    }
});

module.exports = Repairment;