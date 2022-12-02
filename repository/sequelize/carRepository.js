const Employee = require('../../model/sequelize/employee');
const Car = require('../../model/sequelize/car');
const Repairment = require('../../model/sequelize/repairment');

exports.getCars = () => {
    return Car.findAll();
};

exports.getCarById = (carId) => {
    return Car.findByPk(carId,
        {
            include: [{
                model: Repairment,
                as: 'repairments',
                include: [{
                    model: Employee,
                    as: 'employee'
                }]
            }]
        });
};

exports.createCar = (newCarData) => {
    return Employee.create({
        maker: newCarData.maker,
        model: newCarData.model,
        plates: newCarData.plates,
    });
};

exports.updateCar = (carId, carData) => {
    const maker = carData.maker;
    const model = carData.model;
    const plates = carData.plates;
    return Car.update(carData, {where: {_id: carId}});
};

exports.deleteCar = (carId) => {
    return Car.destroy({
        where: {_id: carId}
    })
}
