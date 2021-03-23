const express = require('express');
const request = require('request-promise');

const router = express.Router();

router.post('/postDataToFlask', async function(req, res) {
    data = req.body;
    console.log(data)

    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/getDisease',
        body: data,
        json: true
    }

    var returnData;
    var sendRequest = await request(options)
    .then(function (parsedBody) {
        console.log(parsedBody);
        returnData = parsedBody;
    })

    .catch(function (err) {
        console.log(err)
    })

    res.send(returnData);
})