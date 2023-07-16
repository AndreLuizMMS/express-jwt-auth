const express = require('express');
const EmployeesRouter = express.Router();
const employeesController = require('../../controllers/employeesController');

EmployeesRouter.route('/')
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

EmployeesRouter.route('/:id').get(employeesController.getEmployee);

module.exports = EmployeesRouter;
