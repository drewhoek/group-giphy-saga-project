const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.body.data}&api_key=${process.env.GIPHY_API_KEY}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;