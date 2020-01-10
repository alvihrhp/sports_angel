'use strict';

const express = require('express');
const routes = express.Router();
const NbaController = require('../controllers/NbaController');

routes.get('/', NbaController.showLeague);

routes.get('/gameSchedule', NbaController.getGameSchedule);

module.exports = routes;