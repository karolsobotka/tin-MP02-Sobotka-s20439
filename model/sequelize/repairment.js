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
    },
    mechanic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: { 
        type: Sequelize.STRING,
        allowNull: false,
    },
    repairment_date:{
        type: Sequelize.DATE,
        allowNull: false,
    }
});

module.exports = Repairment;