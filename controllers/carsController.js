exports.showCarsList = (req, res, next) => {
    res.render('pages/cars/cars', { navLocation: 'cars'});
}

exports.showAddCarForm = ( req, res, next) => {
    res.render('pages/cars/add-car', { navLocation: 'add-car'});
}

exports.showCarDetails = ( req, res, next) => {
    res.render('pages/cars/car-repairments', { navLocation: 'car-repairments'});
}