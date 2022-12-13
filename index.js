const express = require('express')
const app = express()
app.use(express.json())

const database = require ('./database/database')




app.post('/insertuser', (req,res) => {
    db.query(`insert into students(firstname, lastname) values('${req.body.firstname}', '${req.body.lastname}')`, (err, result) => {
        if(err) { throw err }
        res.json(result)
    })
})


app.get('/users',(req,res)=>{
    database.query('Select * from students',(err,result)=>{
    if(err) { throw err }
    res.json(result)
})
})


app.put('/updateuser/:id', (req, res) => {
    database.query(`UPDATE students SET firstName='${req.body.firstName}', lastName='${req.body.lastName}' WHERE id = '${req.params.id}'`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})




app.delete('/delete/:id', (req,res) => {
    database.query(`delete from students where id=${req.params.id}`)
    if(err) { throw err }
    res.json(result)
})

app.get('/users/limit/:page',(req,res)=>{
    const page= (req.params.page -1)*10
    database.query(`select * from students limit ${page},10`,(err,result)=>{
        if (err) { throw err }
        res.json(result)
    })
})





app.listen(3000)