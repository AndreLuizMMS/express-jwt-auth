const express = require('express');
const RegisterRouter = express.Router();
const registerController = require('../controllers/registerController');

RegisterRouter.post('/', registerController.handleNewUser);

module.exports = RegisterRouter;
