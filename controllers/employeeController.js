const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');

exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees()
    .then(emps => {
        res.render('pages/employee/list', {
            emps: emps,
            navLocation: 'employee'
        });
    });
}

exports.showAddEmployeeForm = ( req, res, next) => {
    res.render('pages/employee/form', {
        emp: {},
        pageTitle: 'Nowy pracownik',
        formMode: 'createNew',
        btnLabel: 'Dodaj pracownika',
        formAction: '/employee/add',
        navLocation: 'employee'
    });
}

exports.showEmployeesDetails = ( req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.getEmployeeById(empId).then(
        emp => {
            res.render('pages/employee/form', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownika',
                formAction: '',
                navLocation: 'employee'
            });
        }
    )
    
}

exports.showEditEmployeeForm = ( req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.getEmployeeById(empId)
    .then( emp => {
        res.render('pages/employee/form', {
            emp: emp,
            formMode: 'edit',
            pageTitle: 'Edycja pracownika',
            btnLabel: 'Edytuj pracownika',
            formAction: '/employee/edit',
            navLocation: 'employee'
        });
    })
    
}

exports.addEmployee = (req, rex, next) => {
    const empData = { ...req.body};
    EmployeeRepository.createEmployee(empData)
    .then(result => {
        res.redirect('/employee');
    });
};

exports.updateEmployee = (req, rex, next) => {
    const empId = req.body._id;
    const empData = { ...req.body};
    EmployeeRepository.updateEmployee(empId, empData)
    .then( result => {
        res.redirect('/employee');
    });
};

exports.deleteEmployee = (req, rex, next) => {
    const empId = req.params.empId;
    EmployeeRepository.deleteEmployee(empId)
    .then( () => {
        res.redirect('/employee');
    });
};