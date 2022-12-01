exports.showCarsDetailsList = (req, res, next) => {
    res.render('pages/cars/details', { navLocation: 'cars'});
}