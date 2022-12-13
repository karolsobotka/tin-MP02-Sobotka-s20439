const express = require('express');
const router = express.Router();

const carController = require('../controllers/carsController');

router.get('/', carController.showCarsList); 
router.get('/add', carController.showAddCarForm); 
router.get('/details/:carId', carController.showCarDetails);
router.get('/edit/:carId', carController.showEditCarForm); 

router.post('/add', carController.addCar);
router.post('/edit', carController.updateCar);
router.get('/delete/:carId', carController.deleteCar);


module.exports = router;