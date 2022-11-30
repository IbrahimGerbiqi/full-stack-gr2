const express = require('express')
const app = express();
const db = require('./database/database')

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World! 1')
})

app.get('/id', function (req, res) {
    res.send('Hello World! 2')
})

function name(id,name) {
        console.log(id)
}

name(2)

        //joe / 2  /test / 5
app.get('/id/:name/test/:num',  (req, res) => {
    res.send('Hello World!' + req.params.id + req.params.name + req.params.num)
})

app.get('/test', (req,res)=>{
    res.send('test')
})

app.post('/register', (req,res)=>{
    console.log(req.body)
    res.send(`${req.body.name} ${req.body.lastName}`)
})

app.post('/', function (req, res) {
    console.log(req.body)
    res.send(`Hello world ${req.body}`)
})

app.get('/users', function (req, res) {
    db.query("SELECT * FROM students", function (err, result) {
        if (err) throw err;
        res.json(result);
      });
})

app.listen(3000)