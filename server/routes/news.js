const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');
const rp = require('request-promise');

// guardian
const url = "https://content.guardianapis.com/search";
const apiKey = "api-key=aa44b0fc-90e3-4c47-af0b-8990535e720d";
const tag = "tag=sport/basketball|football/football";
const pageSize = "page-size=12";

// no scrap
router.get("/", (req, res) => {
    axios.get(`${url}?${apiKey}&${tag}&${pageSize}`)
    .then((result) => {
        res.json(result.data);
    }).catch((err) => {
        res.status(404).json(err)
    });
})

router.get("/:q", (req, res) => {
    const q = req.params.q ? `&q=${req.params.q}` : "";
    axios.get(`${url}?${apiKey}&${tag}&${pageSize}${q}`)
    .then((result) => {
        res.json(result.data);
    }).catch((err) => {
        res.status(404).json(err)
    });
})

// scraping
// router.get("/", (req, res) => {
//     axios.get(`${url}?${apiKey}&${tag}`)
//     .then(async(result) => {
//         const results = await result.data.response.results;
//         const links = await results.map(item => item.webUrl)
//         const resArr = [];
//         for (let i = 0; i < links.length; i++) {
//             const link = links[i];
//             resArr.push({link, body: rp(link)})
//         }
//         return Promise.all(resArr)
//     })
//     .then(arr => {
//         const promiseArr = [];
//         for (let i = 0; i < arr.length; i++) {
//             const link = arr[i].link;
//             const reqItem = arr[i].body;
//             reqItem
//             .then((body) => {
//                 const $ = cheerio(body);
//                 console.log($("#img-1 picture img").attr("src"))
//             }).catch((err) => {
                
//             });
//         }
//     })
//     .catch((err) => {
//         res.status(404).json(err)
//     });
// })

module.exports = router;