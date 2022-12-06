const express = require('express')
const app = express()

const db = require('./database/database.js')

app.use(express.json())

// .      /user/Joe/ 9  /test
app.get('/user/:id/:name/test', (req, res) => {
  res.send(`Hello World ${req.params.id} ${req.params.name}`)
})

app.get('/', (req,res)=>{
    res.send('Get method')
})

app.post('/', (req,res)=>{
    res.send(req.body.name)
})

app.put('/', (req,res)=>{
    res.send('Second Post method put')
})

app.delete('/', (req,res)=>{
    res.send('Second Post method delete')
})

app.get('/users',(req,res)=>{

    added_query = '';
    if(req.query.id){
        added_query= ' WHERE id = '+req.query.id;
    }
    if(req.query.firstName){
        added_query= ' WHERE firstName = "'+req.query.firstName+'"';
    }
    if(req.query.lastName){
        added_query= ' WHERE lastName = "'+req.query.lastName+'"';
    }
    db.query('SELECT * FROM students'+ added_query, (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})


app.get('/users/limit/:limit',(req,res)=>{
    db.query('SELECT * FROM students LIMIT '+req.params.limit, (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})

app.get('/users/limit2',(req,res)=>{
    db.query('SELECT * FROM students LIMIT 5,5', (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})

app.get('/users/:id',(req,res)=>{
    db.query(`SELECT * FROM students where id = ${req.params.id}`, (err,result)=>{
        if(err){ throw err}
        if(result.length !== 0){
            res.json(result) 
        }else{
            res.send('There is no such a user with that id.', 404)
        } 
        
    })
})

app.get('/users/limit/:page',(req,res)=>{
    const page = (req.params.page - 1 ) * 10
    db.query(`SELECT * FROM subjects LIMIT ${page},10`, (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})

app.delete('users/:id')

app.listen(3000)