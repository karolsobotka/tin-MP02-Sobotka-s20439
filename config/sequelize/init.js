const Employee = require('../../model/sequelize/employee');
const Car = require('../../model/sequelize/car');
const Repairment = require('../../model/sequelize/repairment');
const sequelize = require('../../config/sequelize/sequelize');
const e = require('express');
const { EmptyResultError } = require('sequelize');
const authUtil = require('../../util/authUtils');
const passHash = authUtil.hashPassword('12345');

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
                    {firstName: 'John', lastName: 'Kowalski', login: 'joko12', phone_number: 123123123, address: 'XYZ 11-111 ul. XXX 1', password: passHash },
                    {firstName: 'Adam', lastName: 'Mickiewicz', login: 'admi21', phone_number: 123567855, address: 'ZYX 22-222 ul. XXX 2', password: passHash }
                ])
                .then( ()=>{
                    return Employee.findAll();
                });
            } else {
                return emps;
            }
        })
        .then( emps => {
            allEmployees = emps;
            return Car.findAll();
        })
        .then( cars => {
        if(!cars || cars.length == 0){
            return Car.bulkCreate([
                {maker: 'Mercedes-Benz', model: 'C300', plates: 'WWL 23201'},
                {maker: 'Audi', model: 'Q6', plates: 'WX 53124'}
            ]).then( () => {
                return Employee.findAll();
            });
        }else{
            return cars;
        }
        
    })
    .then( cars => {
        allCars = cars;
        return Repairment.findAll();
    })
    .then(repairments => {
        if(!repairments || repairments.length == 0) {
            return Repairment.bulkCreate([
                {mechanic_id: allEmployees[0]._id, car_id: allCars[0]._id, description: 'xyz', repairment_date: '2001-01-01' },
                {mechanic_id: allEmployees[1]._id, car_id: allCars[1]._id, description: 'zxy', repairment_date: '2002-02-02' },
            ]);
        } else {
            return repairments;
        }
    });
    
}