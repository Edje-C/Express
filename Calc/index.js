const express = require('express')
const app = express()
const port = 8000;

app.get('/:num1/:num2/:op', (req, res) => {
    num1 = Number(req.params.num1)
    num2 = Number(req.params.num2)

    ops = {add: num1+num2, sub: num1-num2, mul: num1*num2, div: num1/num2}

    res.send((ops[req.params.op]).toString())
})

app.listen(port, () => console.log(`Serving`))