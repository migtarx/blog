const express = require('express');
const statusRouter = express.Router();
const { statusController } = require('../controllers');

statusRouter.get('/', statusController.getStatus);

statusRouter.get('/heartbeat', statusController.getStatusHeartBeat);

module.exports = statusRouter;