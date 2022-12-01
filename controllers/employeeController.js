exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list', {navLocation: 'employee'});
}

exports.showAddEmployeeForm = ( req, res, next) => {
    res.render('pages/employee/add-employee', {navLocation: 'employee'});
}

exports.showEmployeesDetails = ( req, res, next) => {
    res.render('pages/employee/employee-repairments', {navLocation: 'employee'});
}