const express = require('express');
const router = express.Router();

const repairmentsController = require('../controllers/repairmentController');

router.get('/', repairmentsController.showRepairmentsList); 
router.get('/add', repairmentsController.showAddRepairmentForm); 
router.get('/details/:repairmentId', repairmentsController.showRepairmentDetails);
router.get('/edit', repairmentsController.showEditRepairmentForm);
router.get('/add-description', repairmentsController.showEditRepairmentForm);
router.post('/add', repairmentsController.addRepairment);
router.post('/edit/:repairmentId', repairmentsController.updateRepairment);
router.get('/delete/:repairmentId', repairmentsController.deleteRepairment);


module.exports = router;