const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.showEmployeeList); 
router.get('/add', employeeController.showAddEmployeeForm); 
router.get('/details/:empId', employeeController.showEmployeesDetails);
router.get('/edit', employeeController.showEditEmployeeForm);

module.exports = router;