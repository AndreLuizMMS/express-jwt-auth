const express = require('express');
const LogoutRouter = express.Router();
const { handleLogout } = require('../controllers/logoutController');

LogoutRouter.get('/', handleLogout);

module.exports = LogoutRouter;
