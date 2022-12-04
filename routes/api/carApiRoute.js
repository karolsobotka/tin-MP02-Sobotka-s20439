const express = require('express');
const router = express.Router();

const carApiController = require('../../api/carApi');

router.get('/', carApiController.getCars);
router.get('/:carId', carApiController.getCarById);
router.post('/add', carApiController.createCar );
router.delete('/:carId', carApiController.deleteCar);
router.put('/:carId', carApiController.updateCar);

module.exports = router;