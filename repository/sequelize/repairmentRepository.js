const Sequelize = require('sequelize');

const Employee = require('../../model/sequelize/employee');
const Car = require('../../model/sequelize/car');
const Repairment = require('../../model/sequelize/repairment');

exports.getRepairments = () => {
    return Repairment.findAll({
        include: [
            {
                model: Employee,
                as: 'employee'
            },
            {
                model: Car,
                as: 'car'
            }]
    });
};

exports.getRepairmentById = (repairmentId) => {
    return Repairment.findByPk(repairmentId, {include: [
        {
            model: Employee,
            as: 'employee'
        },
        {
            model: Car,
            as: 'car'
        }
    ]});

};

exports.createRepairment = (data) => {
    console.log(JSON.stringify(data));

    return Repairment.create({
        mechanic_id: data.mechanic_id,
        car_id: data.car_id,
        description: data.description,
        repairment_date: data.repairment_date
    });
};

exports.updateRepairment = (repairmentId, data) => {
    return Repairment.update(data, {where: {_id: repairmentId}});
}

exports.deleteRepairment = (repairmentId) => {
    return Repairment.destroy({
        where: { _id: repairmentId}});
    };

exports.deleteManyRepairments = (repairmentsIds) => {
    return Repairment.find({ _id: {[Sequelize.Op.in]: repairmentsIds}});
};