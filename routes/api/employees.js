const express = require('express');
const EmployeesRouter = express.Router();
const employeesController = require('../../controllers/employeesController');

const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

EmployeesRouter.route('/')
  .get(employeesController.getAllEmployees)
  .post(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    employeesController.createNewEmployee
  )
  .put(
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
    employeesController.updateEmployee
  )
  .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);

EmployeesRouter.route('/:id').get(employeesController.getEmployee);

module.exports = EmployeesRouter;
