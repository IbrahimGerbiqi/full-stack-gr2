const express = require('express')
const { get } = require('http');
const { userInfo } = require('os');

const db=require('./database/database.js')

const app = express()
app.use(express.json())

app.post('/user',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName =req.body.lastName;
    const email = req.body.email;

    db.query(`INSERT INTO students(firstName,lastName,email) VALUES ("${firstName}","${lastName}","${email}")`,(err,result)=>{
        if(err) throw err
        res.json(result)
    });
});

app.get("/users",(req,res)=>{
    db.query(`SELECT * FROM students`,(err,result)=>{
        if(err)throw err;
        res.json(result);
    })
})

app.put('/users/:id',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const studentId = req.params.id
    const getUser = `SELECT COUNT(id) AS COUNT FROM teachers WHERE id = '${studentId}'`;
    const sql = `UPDATE students SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}' WHERE id = '${studentId}'`;
    db.query(getUser,(err,result)=>{
        if(err) throw err;
        if(result[0].COUNT !== 0){
            db.query(sql,(err,result)=>{
                if(err) throw err;
                res.json({message:`students with ID ${studentId} has been updated!`})
            })
        }else{
            res.json({message:`students with ID ${studentId} is not found!`}, 404);
        }
    })
})

app.delete('/user/:id',(req,res)=>{
    db.query(`DELETE FROM students WHERE id = ${req.params.id}`,(err,result)=>{
        if(err) throw err
        res.json(result);
    })
})

app.get('/user/limit/page:',(req,res)=>{
    const page = (req.params.page - 1)*10;
    db.query(`SELECT * FROM students LIMIT ${page},10`,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
})

app.listen(3000)