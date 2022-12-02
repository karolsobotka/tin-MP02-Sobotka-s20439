const Employee = require('../../model/sequelize/employee');
const Car = require('../../model/sequelize/car');
const Repairment = require('../../model/sequelize/repairment');

exports.getEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeesById = (empId) => {
    return Employee.findByPk(empId,
        {
            include: [{
                model: Repairment,
                as: 'repairments',
                include: [{
                    model: Car,
                    as: 'car'
                }]
            }]
        });
};

exports.createEmployee = (newEmpData) => {
    return Employee.create({
        firstName: newEmpData.firstName,
        lastName: newEmpData.lastName,
        phone_number: newEmpData.phone_number,
        address: newEmpData.address
    });
};

exports.updateEmployee = (empId, empData) => {
    const firstName = empData.firstName;
    const lastName = empData.lastName;
    const phone_number = empData.phone_number;
    const address = empData.address;
    return Employee.update(empData, {where: {_id: empId}});
};

exports.deleteEmployee = (empId) => {
    return Employee.destroy({
        where: {_id: emp}
    })
}
