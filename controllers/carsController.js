const CarsRepository = require('../repository/sequelize/carRepository');

exports.showCarsList = (req, res, next) => {
    CarsRepository.getCars()
    .then(cars => {
    res.render('pages/cars/cars', { 
        cars: cars, 
        navLocation: 'cars'
        });
    });
}

exports.showAddCarForm = ( req, res, next) => {
    res.render('pages/cars/form', {
        car: {},
        pageTitle: req.__('car.form.add.pageTitle'),
        formMode: 'createNew',
        btnLabel: req.__('car.form.add.btnLabel'),
        formAction: '/car/add',
        navLocation: 'cars',
        validationErrors: []
    });
}

exports.showEditCarForm = (req, res, next) => {
    const carId = req.params.carId;
    CarsRepository.getCarById(carId)
    .then( car => {
        res.render('pages/cars/form', {
            car: car,
            formMode: 'edit',
            pageTitle: req.__('car.form.edit.pageTitle'),
            btnLabel: req.__('car.form.edit.btnLabel'),
            formAction: '/car/edit',
            navLocation: 'cars',
            validationErrors: []

        });
    });
    
};

exports.showCarDetails = ( req, res, next) => {
    const carId = req.params.carId;
    CarsRepository.getCarById(carId).then( car => {
        res.render('pages/cars/form', { 
            car: car,
            formMode: 'showDetails',
            pageTitle: req.__('car.form.details'),
            formAction: '',
            navLocation: 'cars',
            validationErrors: []

        })

    });
    
};

exports.addCar = (req, res, next) => {
    const carData = { ...req.body};
    CarsRepository.createCar(carData)
    .then(result => {
        res.redirect('/cars');
    })
    .catch(err => {
        res.render('pages/cars/form', {
            emp: empData,
            pageTitle: req.__('car.form.add.pageTitle'),
            formMode: 'createNew',
            btnLabel: req.__('car.form.add.btnLabel'),
            formAction: '/car/add',
            navLocation: 'car',
            validationErrors: []

        });
    });
};

exports.updateCar = (req, res, next) => {
    const carId = req.body._id;
    const carData = { ...req.body};
    CarsRepository.updateCar(carId, carData)
    .then( result => {
        res.redirect('/cars');
    }).catch(err => {
        res.render('pages/cars/form', {
            emp: empData,
            pageTitle: req.__('car.form.edit.pageTitle'),
            formMode: 'edit',
            btnLabel: req.__('car.form.edit.btnLabel'),
            formAction: '/car/edit',
            navLocation: 'car',
            validationErrors: []

        });
    });;
};

exports.deleteCar = (req, res, next) => {
    const carId = req.params.carId;
    CarsRepository.deleteCar(carId)
    .then( () => {
        res.redirect('/cars');
    });
};