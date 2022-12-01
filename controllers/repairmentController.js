exports.showRepairmentsList = (req, res, next) => {
    res.render('pages/repairs/repairs', {navLocation: 'repairments'});
}

exports.showAddRepairmentForm = (req, res, next) => {
    res.render('pages/repairs/add-repairment', {navLocation: 'add-repairment'});
}

exports.showEditRepairmentForm = (req, res, next) => {
    res.render('pages/repairs/edit-repairment', {navLocation: 'add-description'});
}