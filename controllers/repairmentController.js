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
                formAction: '/repairment/add',
                navLocation: 'repairments',
                validationErrors: []

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
                formAction: '/repairment/edit',
                navLocation: 'repairments',
                validationErrors: []

            });
        }); 
    });
};


exports.addRepairment = (req, res, next) => {
    const repairmentData = { ...req.body};
    RepairmentRepository.createRepairment(repairmentData)
    .then(result => {
        res.redirect('/repairments');
    })
    .catch(err => {
        res.render('pages/repairs/form', {
            emp: empData,
            pageTitle: 'Dodawanie Naprawy',
            formMode: 'createNew',
            btnLabel: 'Dodaj Naprawę',
            formAction: '/repairmentApiRoute/add',
            navLocation: 'rapairment',
            validationErrors: []

        });
    });
};

exports.updateRepairment = (req, res, next) => {
    const repairmentId = req.body._id;
    const repairmentData = { ...req.body};
    RepairmentRepository.updateRepairment(repairmentId, repairmentData)
    .then( result => {
        res.redirect('/repairments');
    })
    .catch(err => {
        return RepairmentRepository.getRepairmentById(repairmentId)
        .then( repairment => {
            res.render('pages/repairs/form', {
                repairment: repairment,
                pageTitle: 'Edycja Naprawy',
                formMode: 'edit',
                btnLabel: 'Edytuj Naprawę',
                formAction: '/repairment/edit',
                navLocation: 'repairment',
                validationErrors: []

            });
        });
        
    });
};

exports.deleteRepairment = (req, res, next) => {
    const repairmentId = req.params.repairmentId;
    RepairmentRepository.deleteRepairment(repairmentId)
    .then( () => {
        res.redirect('/repairments');
    });
};