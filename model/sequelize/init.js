const Sequelize = require('sequelize');

const Employee = require('../../model/sequelize/employee');
const Car = require('../../model/sequelize/car');
const Repairment = require('../../model/sequelize/repairment');
const sequelize = require('../../config/sequelize/sequelize');
const e = require('express');
const { EmptyResultError } = require('sequelize');

module.exports = () => {
    Employee.hasMany(Repairment, {as: 'repairments', foreignKey: {name: 'mechanic_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'}); 
    Repairment.belongsTo(Employee, {as: 'employee', foreignKey: {name: 'mechanic_id', allowNull: false}});
    Car.hasMany(Repairment, {as: 'repairments', foreignKey: {name: 'car_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'}); 
    Repairment.belongsTo(Car, {as: 'car', foreignKey: {name: 'car_id', allowNull: false}});

    let allEmployees, allCars;
    return sequelize
        .sync({force: true})
        .then(() => {
            return Employee.findAll();
        })
        .then(emps => {
            if(!emps || emps.length == 0){
                return Employee.bulkCreate([
                    {firstName: 'John', lastName: 'Kowalski', phone_number: 123123123, address: 'XYZ 11-111 ul. XXX 1' },
                    {firstName: 'Adam', lastName: 'Mickiewicz', phone_number: 123567855, address: 'ZYX 22-222 ul. XXX 2'  }
                ])
                .then( ()=>{
                    return Employee.findAll();
                });
            } else {
                return emps;
            }
        })
        .then( emps => {
            allEmps = emps;
            return Car.findAll();
        })
        .then( cars => {
        if(!cars || cars.length ==0){
            return Car.bulkCreate([
                {maker: 'Mercedes-Benz', model: 'C300', plates: 'WWL 23201'},
                {maker: 'Audi', model: 'Q6', plates: 'WX 53124'}
            ]);
        }else{
            return cars;
        }
        
    });
    
}