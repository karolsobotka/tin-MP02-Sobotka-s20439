const express = require('express');
const router = express.Router();

const repairmentsController = require('../controllers/repairmentController');

router.get('/', repairmentsController.showRepairmentsList); 
router.get('/add-description', repairmentsController.showEditRepairmentForm); 
router.get('/add-repairment', repairmentsController.showAddRepairmentForm); 


module.exports = router;