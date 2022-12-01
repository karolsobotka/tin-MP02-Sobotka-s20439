exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list', {navLocation: 'employee'});
}

exports.showAddEmployeeForm = ( req, res, next) => {
    res.render('pages/employee/add-employee', {navLocation: 'add'});
}

exports.showEmployeesDetails = ( req, res, next) => {
    res.render('pages/employee/employee-repairments', {navLocation: 'employee'});
}

exports.showEditEmployeeForm = ( req, res, next) => {
    res.render('pages/employee/edit-employee', {navLocation: 'edit'});
}