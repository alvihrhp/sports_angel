const router = require('express').Router()

const FootballController = require('../controllers/footballController')
router.get('/', FootballController.getAllLeagues)
router.get('/standings/:league_id', FootballController.getAllStandings)
router.get('/schedule/:league_id/:date', FootballController.getAllSchedule)
router.get('/topscorers/:league_id', FootballController.getTopScorer)

module.exports = router