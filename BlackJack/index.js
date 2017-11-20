const fs = require('fs')
const morgan = require('morgan');
const express = require('express');
const app = express();
const port = 8000;

const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
const suits = ['Hearts','Diamonds','Spades','Clubs']

// let html;
let html = fs.readFileSync('./index.html', 'utf8', (err, html) => {
    if(err){
        throw err
    }

    return html
})

fs.rename('')

app.get("/draw/:number", (req, res) => {
    const cards = [];
    if(req.params.number<=10){
        for(var i=0; i<Number(req.params.number); i++){
            let card = {value: values[Math.floor(Math.random()*13)], suit: suits[Math.floor(Math.random()*4)]}
            cards.push(card)
        }
        res.send(cards)
    }else{
        res.send(`Number of cards must be 10 or less`)
    }
})

app.get("/blackJack/", (req, res) => {
    const cards = [];
    let hand = 0
    let ace = false;

    if(hand>10){
        ace = true
    }

    for(var i=0; i<2; i++){
        let card = {value: values[Math.floor(Math.random()*13)], suit: suits[Math.floor(Math.random()*4)]}
        if(card.value === "Ace"){
            ace ? hand += 1 : hand +=11
            ace = true
        }else if('JackQueenKing'.includes(card.value)){
            hand+=10
        }else{
            hand+= Number(card.value)
        }
        cards.push(card)
    }

    // hand<15 ? res.send(`${JSON.stringify(cards)}\n ${hand} hit`) : res.send(`${JSON.stringify(cards)} ${hand} stay`)

    res.send(html)


    console.log({value: values[Math.floor(Math.random()*13)], suit: suits[Math.floor(Math.random()*4)]})
})

app.listen(port, () => console.log('Listening'))