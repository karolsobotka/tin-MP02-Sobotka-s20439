const RepairmentRepository = require('../repository/sequelize/repairmentRepository');
const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');
const CarRepository = require('../repository/sequelize/carRepository');

exports.showRepairmentsList = (req, res, next) => {
    RepairmentRepository.getRepairments()
    .then(repairments => {
        res.render('pages/repairs/repairs', {
            repairments: repairments,
            navLocation: 'repairments'});
    });
}

exports.showAddRepairmentForm = (req, res, next) => {
    let allEmps, allCars;
    EmployeeRepository.getEmployees()
    .then( emps => {
        allEmps = emps;
        return CarRepository.getCars()
        .then( cars => {
        allCars = cars;
            res.render('pages/repairs/form', {
                repairment: {},
                formMode: 'createNew',
                allEmps: allEmps,
                allCars: allCars,
                pageTitle: 'Nowa Naprawa',
                btnLabel: 'Dodaj Naprawę',
                formAction: '/repairments/add',
                navLocation: 'repairments'
            });
        }); 
    });
    
};
exports.showRepairmentDetails = ( req, res, next) => {
    const repairmentId = req.params.repairmentId;
    RepairmentRepository.getRepairmentById(repairmentId).then(
        repairment => {
            res.render('pages/repairs/form', {
                repairment: repairment,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły naprawy',
                formAction: '',
                navLocation: 'repairments'
            });
        });
    
}

exports.showEditRepairmentForm = (req, res, next) => {
    let allEmps, allCars;
    EmployeeRepository.getEmployees()
    .then( emps => {
        allEmps = emps;
        return CarRepository.getCars()
        .then( cars => {
        allCars = cars;
            res.render('pages/repairs/form', {
                repairment: {},
                formMode: 'edit',
                allEmps: allEmps,
                allCars: allCars,
                pageTitle: 'Edytuj Naprawę',
                btnLabel: 'Edytuj Naprawę',
                formAction: '/repairments/edit',
                navLocation: 'repairments'
            });
        }); 
    });
};


exports.addRepairment = (req, res, next) => {
    const repairmentData = { ...req.body};
    RepairmentRepository.createRepairment(repairmentData)
    .then(result => {
        res.redirect('/repairments');
    });
};

exports.updateRepairment = (req, res, next) => {
    const repairmentId = req.body._id;
    const repairmentData = { ...req.body};
    RepairmentRepository.updateRepairment(repairmentId, repairmentData)
    .then( result => {
        res.redirect('/repairments');
    });
};

exports.deleteRepairment = (req, res, next) => {
    const repairmentId = req.params.repairmentId;
    RepairmentRepository.deleteRepairment(repairmentId)
    .then( () => {
        res.redirect('/repairments');
    });
};