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
        navLocation: 'employee',
        validationErrors: []

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
                navLocation: 'employee',
                validationErrors: []

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
            navLocation: 'employee',
            validationErrors: []


        });
    })
    
}

exports.addEmployee = (req, res, next) => {
    const empData = { ...req.body};
    EmployeeRepository.createEmployee(empData)
    .then(result => {
        res.redirect('/employee');
    })
    .catch(err => {
        res.render('pages/employee/form', {
            emp: empData,
            pageTitle: 'Nowy Pracownik',
            formMode: 'createNew',
            btnLabel: 'Nowy Pracownik',
            formAction: '/employeeApiRoute/add',
            navLocation: 'employee',
            validationErrors: []
        });
    });
};

exports.updateEmployee = (req, res, next) => {
    const empId = req.body._id;
    const empData = { ...req.body};
    EmployeeRepository.updateEmployee(empId, empData)
    .then( result => {
        res.redirect('/employee');
    })
    .catch(err => {
        return EmployeeRepository.getEmployeeById(empId)
        .then( emp => {
            res.render('pages/employee/form', {
                emp: emp,
                pageTitle: 'Edycja Pracownika',
                formMode: 'edit',
                btnLabel: 'Edytuj Pracownika',
                formAction: '/employeeApiRoute/:empId',
                navLocation: 'employee',
                validationErrors: []

            });
        });
        
    });
};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.deleteEmployee(empId)
    .then( () => {
        res.redirect('/employee');
    });
};