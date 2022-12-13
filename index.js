const express = require('express')
const app = express()
const db = require('./database/database.js');

app.use(express.json())

//register user to software - detyra 1
app.post('/insertUser', (req,res) => {
    db.query(`insert into students(firstname, lastname) values('${req.body.firstname}', '${req.body.lastname}')`, (err, result) => {
        if(err) { throw err }
        res.json(result)
    })
})


//get - detyra 2
app.get('/users', (req,res) => {
    db.query('select * from students', (err, result) => {
        if(err) { throw err }
        res.json(result)
    })
})

//update by id - detyra 3
app.put('/updateUser/:id', (req,res) => {
    db.query(`update students set firstname='${req.body.firstname}', lastname='${req.body.lastname}' where id=${req.params.id}`, (err, result) => {
        if(err) { throw err }
        res.json(result)
    })
})


// delete user by id - detyra 4
app.delete('/delete/:id', (req,res) => {
    db.query(`delete from students where id=${req.params.id}`, (err, result) =>{
        if(err) { throw err }
        res.json(result)
    })
})

// return users per page 10/page - detyra 5
app.get('/users/limit/:page', (req, res) => {
    const page = (req.params.page - 1) * 10
    db.query(`select * from students limit ${page},10`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})



app.listen(3000)