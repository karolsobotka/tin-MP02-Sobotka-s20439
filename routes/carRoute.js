const express = require('express');
const router = express.Router();

const carController = require('../controllers/carsController');

router.get('/', carController.showCarsList); 
router.get('/add', carController.showAddCarForm); 
router.get('/details/:carId', carController.showCarDetails);

module.exports = router;