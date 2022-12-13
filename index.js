const express = require('express')
const db = require('./models')
const app = express()
app.use(express.json())

app.get('/students', (req,res) => {
    db.query('SELECT * FROM students', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});


app.delete('/students/:id',(req,res)=>{
    db.query('DELETE * from students where id = 12')
    .then( userResponse => {
      res.json( userResponse )
    })
})

app.listen(3000)