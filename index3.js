// lidhja e expressit me databazen mysql dhe provojme disa query

const express = require('express');

const app = express();

const db = require('./database/database.js');       // e thirrim database.js per me kriju konektimin me databazen qe e kemi caktu aty



app.get('/users', (req, res) => {
    db.query('SELECT * FROM students', (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

app.get('/users/limit', (req, res) => {
    db.query('SELECT * FROM students LIMIT 5', (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

app.get('/users/limit2', (req, res) => {
    db.query('SELECT * FROM students LIMIT 5,5', (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

app.get('/users/:id', (req, res) => {
    db.query(`SELECT * FROM students WHERE id = ${req.params.id}`, (err, result) => {
        if (err) { throw err }
        if (result.length !== 0) {
            res.json(result)
        } else {
            res.send('There is no such a user with that id.', 404)
        }

    })
})

app.get('/users/limit/:page', (req, res) => {
    const page = (req.params.page - 1) * 10
    db.query(`SELECT * FROM subjects LIMIT ${page},10`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})


const port = 4000;

app.listen(port, () => {
    console.log('Porti per API eshte: ' + port)
});