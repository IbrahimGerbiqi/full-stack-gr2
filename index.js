const express = require('express')
const app = express()
const db = require('./database/database')

app.use(express.json())

app.get("/:id", (req, res) => {
    res.send("Hello " + req.params.id)
})

app.post("/register", (req, res) => {
    console.log(`${req.body.name} ${req.body.lastName}`);
    res.send(`${req.body.name} ${req.body.lastName}`)
})

app.post("/", (req, res) => {
    res.send(req.body)
})

app.get("/users/:page/:rpp", (req, res) => {
    let rowsperpage = req.params.rpp
    if (rowsperpage == 0) {
        rowsperpage = 5
    }

    let x = (req.params.page - 1) * rowsperpage
    db.query(`SELECT * FROM students LIMIT ${x} , ${rowsperpage}`, function(error, results) {
        if (error) throw error;
        res.json(results)
    });
})

app.listen(3200)