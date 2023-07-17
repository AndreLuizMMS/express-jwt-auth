const express = require('express');

const AdminRouter = express.Router();
const { setEditor, setAdmin, getUsers } = require('../controllers/adminController');

const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');

const adminMiddleware = verifyRoles(ROLES_LIST.Admin);

AdminRouter.use(adminMiddleware);

AdminRouter.get('/users', getUsers);
AdminRouter.post('/setAdmin', setAdmin);
AdminRouter.post('/setEditor', setEditor);

module.exports = AdminRouter;
