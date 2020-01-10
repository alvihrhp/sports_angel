const router = require('express').Router();
const axios = require('axios');

// guardian
const url = "https://content.guardianapis.com/search";
const apiKey = "api-key=aa44b0fc-90e3-4c47-af0b-8990535e720d";
// const tags="tag=football/football%20OR%20"
// tag: football/football, sport/basketball
const tag = "tag=sport/basketball|football/football"

router.get("/", (req, res) => {
    axios.get(`${url}?${apiKey}&${tag}`)
    .then((result) => {
        res.json(result.data);
    }).catch((err) => {
        res.status(404).json(err)
    });;
})

module.exports = router;