const express = require('express');
const app = express();

const db = require('./database/database.js')

app.use(express.json())

//Detyra 1
app.post('/users',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const sql = `INSERT INTO students(firstName,lastName,email) VALUES ("${firstName}","${lastName}","${email}")`;

    db.query(sql,(err,result)=>{
        if(err) throw err
        if(result)
        res.json(result)
    })
})

//Detyra 2

app.get('/users', (req,res)=>{
    const sql = `SELECT * FROM students`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        res.json(result);
    })
})

//Detyra 3

app.put('/users/:id',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const studentId = req.params.id

    const getTeacher = `SELECT COUNT(id) AS COUNT FROM teachers WHERE id = '${studentId}'`;
    const sql = `UPDATE teachers SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}' WHERE id = '${studentId}'`;

    db.query(getTeacher,(err,result)=>{
        if(err) throw err;
        if(result[0].COUNT !== 0){
            db.query(sql,(err,result)=>{
                if(err) throw err;
                res.json({message:`Teacher with ID ${studentId} has been updated!`})
            })
        }else{
            res.json({message:`Teacher with ID ${studentId} is not found!`}, 404);
        }
    })
})

//Detyra 4

app.delete('/users/:id',(req,res)=>{
    const sql = `DELETE FROM students WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })

})

// Detyra 5

app.get('/users/limit/:page',(req,res)=>{
    const page = (req.params.page - 1)*10;
    const sql = `SELECT * FROM students LIMIT ${page},10`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
})

//Detyra 6

app.post('/login', (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });



app.listen(3310);