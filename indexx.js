const express = require('express')
const app = express();
const require=
app.use(express.json());

const { application } = require("express");

app.get('/', function (req, res) {
  res.send('Hello World2')
})

app.get('/:id', function (req, res) {
  res.send('Hello ' + req.params.id) 
})

app.post("/register" , (req,res)=>{
  console.log(req.body);
  res.send (`${req.body.name} ${req.body.lastName}`)


})




app.listen(3000) 
