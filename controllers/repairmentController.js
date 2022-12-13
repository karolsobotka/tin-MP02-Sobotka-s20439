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
            formAction: 'repairment/add',
            navLocation: 'repairment'});
        }); 
    });
    
};
exports.showRepairmentDetails = ( req, res, next) => {
    const repairmentId = req.params.empId;
    RepairmentRepository.getRepairmentById(repairmentId).then(
        emp => {
            res.render('pages/repairments/form', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły naprawy',
                formAction: '',
                navLocation: 'repairment'
            });
        }
    )
    
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
            formAction: 'repairment/edit',
            navLocation: 'repairment'});
        }); 
    });
};


exports.addRepairment = (req, rex, next) => {
    const repairmentData = { ...req.body};
    RepairmentRepository.createRepairment(repairmentData)
    .then(result => {
        res.redirect('/repairment');
    });
};

exports.updateRepairment = (req, rex, next) => {
    const repairmentId = req.body._id;
    const repairmentData = { ...req.body};
    RepairmentRepository.updateRepairment(repairmentId, repairmentData)
    .then( result => {
        res.redirect('/repairment');
    });
};

exports.deleteRepairment = (req, rex, next) => {
    const repairmentId = req.params.empId;
    RepairmentRepository.deleteRepairment(repairmentId)
    .then( () => {
        res.redirect('/repairment');
    });
};