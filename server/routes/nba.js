'use strict';

const express = require('express');
const routes = express.Router();
const NbaController = require('../controllers/NbaController');

routes.get('/', NbaController.showLeague);

routes.get('/gameSchedule/:league', NbaController.getGameSchedule);

routes.get('/standings/:league', NbaController.standings);

module.exports = routes;