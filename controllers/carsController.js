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
        pageTitle: 'Nowy Samochód',
        formMode: 'createNew',
        btnLabel: 'Dodaj Samochód',
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
            pageTitle: 'Edycja Samochodu',
            btnLabel: 'Edytuj samochód',
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
            pageTitle: 'Szczegóły Samochodu',
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
            pageTitle: 'Dodawanie Auta',
            formMode: 'createNew',
            btnLabel: 'Dodaj Auto',
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
            pageTitle: 'Edycja Auta',
            formMode: 'edit',
            btnLabel: 'Edytuj Auto',
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