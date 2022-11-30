exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list.ejs', {});
}

exports.showAddEmployeeForm = ( req, res, next) => {
    res.render('pages/employee/add-employee.ejs', {});
}

exports.showEmployeesDetails = ( req, res, next) => {
    res.render('pages/employee/employee-repairments.ejs', {});
}