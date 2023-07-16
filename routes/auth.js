const express = require('express');
const AuthRouter = express.Router();
const authController = require('../controllers/authController');

AuthRouter.post('/', authController.handleLogin);

module.exports = AuthRouter;
