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
        axios.get('https://api-nba-v1.p.rapidapi.com/games/seasonYear/2019', {
            headers: {
                "X-RapidAPI-Host": host,
                "X-RapidAPI-Key": key
            }
        })
        .then(response => {
            const filterLeague = response.data.api.games.filter(game => {
                return (game.league === req.params.league) && (new Date(game.startTimeUTC) >= new Date());
            })
            res.status(200).json({
                message:"OK",
                leagues: filterLeague
            })
        })
        .catch(error => {
            res.status(400).json({
                message: 'Bad request',
                error: error.message
            })
        })
    }

    static standings(req, res) {
        axios.get(`https://api-nba-v1.p.rapidapi.com/standings/${req.params.league}/2019`, {
            headers: {
                "X-RapidAPI-Host": host,
                "X-RapidAPI-Key": key
            }
        })
        .then(response => {
            const west = response.data.api.standings.filter(standing => {
                return standing.conference.name === 'west';
            })

            const ordered_west = west.sort(function(a,b) { return a["conference"]["rank"] - b["conference"]["rank"]} )
            const east = response.data.api.standings.filter(standing => {
                return standing.conference.name === 'east';
            })
            const ordered_east = east.sort(function(a,b) { return a["conference"]["rank"] - b["conference"]["rank"]} )
            res.status(200).json({
                message: "OK",
                data: {
                    ordered_west,
                    ordered_east
                }
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "Bad request",
                error: error.message
            })
        })
    }
}

module.exports = NbaController;