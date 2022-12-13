const express = require('express')
const app = express()
app.use(express.json())

const db = require('../database/database.js');


// det. 2
app.get('/users', (req, res) => {
    db.query('select * from students', (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

// det. 3
app.put('/updateUser/:id', (req, res) => {
    db.query(`UPDATE students SET firstName='${req.body.firstName}', lastName='${req.body.lastName}' WHERE id = '${req.params.id}'`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

// det. 4
app.delete('/delete/:id', (req, res) => {
    db.query(`delete from students where id=${req.params.id}`)
    if (err) { throw err }
    res.json(result)
})

// det. 5
app.get('/user/limit/:page', (req, res) => {
    db.query(`select * from students limit ${page},10`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

app.listen(3000)