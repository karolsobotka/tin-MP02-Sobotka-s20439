const express = require('express');
const router = express.Router();

const repairmentsController = require('../controllers/repairmentController');

router.get('/', repairmentsController.showRepairmentsList); 


module.exports = router;