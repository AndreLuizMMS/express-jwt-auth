const express = require('express');
const RefreshTokenRouter = express.Router();
const { handleRefreshToken } = require('../controllers/refreshController');

RefreshTokenRouter.post('/refresh', handleRefreshToken);

module.exports = RefreshTokenRouter;
