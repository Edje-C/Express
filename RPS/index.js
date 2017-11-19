const express = require('express');
const app = express()
const port = 8000;

const plays = {rock : [{"user":"rock","ai":"rock","result":"tie"},
{"user":"rock","ai":"paper","result":"lose"},
{"user":"rock","ai":"scissors","result":"win"}],

paper : [{"user":"paper","ai":"rock","result":"win"},
{"user":"paper","ai":"paper","result":"tie"},
{"user":"paper","ai":"scissors","result":"lose"}],

scissors : [{"user":"scissors","ai":"rock","result":"lose"},
{"user":"scissors","ai":"paper","result":"win"},
{"user":"scissors","ai":"scissors","result":"tie"}]}

app.get('/', (req, res) => {
    res.send(`Play me`)
})

app.get('/:play', (req, res) => {
    let rand = Math.floor(Math.random()*3)
    res.send(plays[req.params.play][rand])
})

app.listen(port, () => console.log("Server running"));
