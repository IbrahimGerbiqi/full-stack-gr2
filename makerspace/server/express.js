const express = require('express')
const app = express()
const db = require('./database/database')

app.use(express.json())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/e', function (req,res) {
//   res.send('Hello world 1')
// })

// app.get('/shani', function (req,res){
//   res.send('Shani Gurizi')

  app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(`${req.body.name}${req.body.lastname}`)  
  }
  )
  app.get('/users', function (req, res) {
    db.query("SELECT * FROM school.users:", function (err, result) {
        if (err) throw err;
        res.json(result);
      });
    });
// })
app.listen(3250)
