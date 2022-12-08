const express = require('express');
const router = express.Router();

const repairmentApiController = require('../../api/repairmentApi');

router.get('/', repairmentApiController.getRepairments);
router.get('/:repairmentId', repairmentApiController.getRepairmentById);
router.post('/add', repairmentApiController.createRepairment );
router.delete('/:repairmentId', repairmentApiController.deleteRepairment);
router.put('/:repairmentId', repairmentApiController.updateRepairment);

module.exports = router;