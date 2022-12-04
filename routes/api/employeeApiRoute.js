const express = require('express');
const router = express.Router();

const empApiController = require('../../api/employeeApi');

router.get('/', empApiController.getEmployees);
router.get('/:empId', empApiController.getEmployeeById);
router.post('/add', empApiController.createEmployee );
router.delete('/:empId', empApiController.deleteEmployee);
router.put('/:empId', empApiController.updateEmployee);

module.exports = router;