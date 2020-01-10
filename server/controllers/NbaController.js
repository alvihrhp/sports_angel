'use strict';

const axios = require('axios');
const host = process.env.NBA_HOST;
const key = process.env.NBA_KEY;

class NbaController {
    static showLeague(req, res) {
        axios.get('https://api-nba-v1.p.rapidapi.com/leagues/', {
            headers: {
                "X-RapidAPI-Host": host,
                "X-RapidAPI-Key": key
            }
        })
        .then(response => {
            res.status(200).json({
                message: "OK",
                data: response.data.api.leagues
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "Bad Request",
                error: error.message
            })
        })
    }

    static getGameSchedule(req, res) {
        axios.get('https://api-nba-v1.p.rapidapi.com/games/date/2020-01-10', {
            headers: {
                "X-RapidAPI-Host": host,
                "X-RapidAPI-Key": key
            }
        })
        .then(response => {
            res.status(200).json({
                message:"OK",
                response: response.data.api.games
            })
        })
        .catch(error => {
            res.status(400).json({
                message: 'Bad request',
                error: error.message
            })
        })
    }
}

module.exports = NbaController;