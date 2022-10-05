const express = require('express')
const app = express()

// Create our express app

app.get('/tip:num1/:num2', (req, res) => {
  const ans = parseInt(req.params.num1) % parseInt(req.params.num2)
  res.status(200).json({ msg: `is ${ans}` })
})

app.get('/magic/:question', (req, res) => {
  const ans = questions(req.params.question)
  res.status(200).json({
["It is certain", 
"It is decidedly so",
 "Without a doubt", 
 "Yes definitely",
 "You may rely on it", 
 "As I see it yes", 
 "Most likely", 
 "Outlook good",
 "Yes", 
 "Signs point to yes",
  "Reply hazy try again",
   "Ask again later",
   "Better not tell you now",
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it",
     "My reply is no",
      "My sources say no",
      "Outlook not so good", 
      "Very doubtful"]
    })



  // Tell the app to listen on a port

app.listen (3030, () => {
    console.log('Listening on Port 3030')
})








