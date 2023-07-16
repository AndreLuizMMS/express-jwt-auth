const express = require('express');
const RootRouter = express.Router();
const path = require('path');

RootRouter.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = RootRouter;
