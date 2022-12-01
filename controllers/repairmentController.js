exports.showRepairmentsList = (req, res, next) => {
    res.render('pages/repairs/repairs', {navLocation: 'repairments'});
}