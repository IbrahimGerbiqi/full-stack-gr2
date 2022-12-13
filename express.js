const express = require('express')
const app = express();
const db =require('./database')


app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World! 1')
})

app.post('/register', function (req, res) {
    console.log(req.body)
    res.send('${req.body.name}')
})


app.listen(3000)