const router = require('express').Router()

const FootballRoute = require('./football')
router.use('/football', FootballRoute)

module.exports = router