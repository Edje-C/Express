const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`Gimme stuff to convert`)
})

app.get('/:num/:base', (req, res) => {
    bases = {dec: 10, bin: 2, hex: 16}
    num = Number(req.params.num)
    base = req.params.base
    res.send(
    `dec: ${parseInt(num, bases[base]).toString(10)}
    bin: ${parseInt(num, bases[base]).toString(2)}
    hex: ${parseInt(num, bases[base]).toString(16)}`
    )
})

app.listen(port, () => console.log(`Serving`))
