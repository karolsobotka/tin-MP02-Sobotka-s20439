const express = require('express');
const router = express.Router();

const empApiController = require('../../api/employeeApi');

router.get('/', empApiController.getEmployees);

module.exports = router;