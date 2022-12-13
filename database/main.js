const express = require('express')
const app = express()
app.use(express.json())


const database = require ('./database')


app.get('/users',(req,res)=>{
    database.query('Select * from students',(err,result)=>{
    if(err) { throw err }
    res.json(result)
})
})


app.put('/delete/:id', (req,res) => {
    database.query(`update from students where id=${req.params.id}`,(err,result)=>{
        if(err) { throw err }
        res.json(result)
    })
})
   
app.put('/updateUser/:id', (req, res) => {
    db.query(`UPDATE students SET firstName='${req.body.firstName}', lastName='${req.body.lastName}' WHERE id = '${req.params.id}'`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })

})



app.listen(3000)