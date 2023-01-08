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
                pageTitle: req.__('repairment.form.add.pageTitle'),
                btnLabel: req.__('repairment.form.add.btnLabel'),
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
                pageTitle: req.__('repairment.form.details'),
                formAction: '',
                navLocation: 'repairments'
            });
        });
    
}

exports.showEditRepairmentForm = (req, res, next) => {
    const repairmentId = req.params.repairmentId;
    let allEmps, allCars;
    EmployeeRepository.getEmployees()
    .then( emps => {
        allEmps = emps;
        return CarRepository.getCars()
    })
        .then( cars => {
        allCars = cars;
        return RepairmentRepository
        .getRepairmentById(repairmentId)
    })
    .then(repairment => {
        res.render('pages/repairs/form', {
            repairment: repairment,
            formMode: 'edit',
            allEmps: allEmps,
            allCars: allCars,
            pageTitle: req.__('repairment.form.edit.pageTitle'),
            btnLabel: req.__('repairment.form.edit.btnLabel'),
            formAction: '/repairment/edit',
            navLocation: 'repairments',
            validationErrors: []

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
            pageTitle: req.__('repairment.form.add.pageTitle'),
            formMode: 'createNew',
            btnLabel: req.__('repairment.form.add.btnLabel'),
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
                pageTitle: req.__('repairment.form.edit.pageTitle'),
                formMode: 'edit',
                btnLabel: req.__('repairment.form.edit.btnLabel'),
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