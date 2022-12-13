const express=require('express');
const app= express();

const db=require('./database/database.js')

app.use(express.json())


//              1.
app.post('user1',(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;

    db.query(`INSERT INTO teachers(firstName,lastName,email) VALUES ("${firstName}","${lastName}","${email}")`,(err,result)=>{
        if(err) throw err
        res.json(result)
    })
})


//              2.
app.get('/user1', (req,res)=>{
    db.query(`SELECT * FROM teachers`, (err, result)=>{
        if (err) throw err;
        res.json(result);
    })
})


//              3.
app.put('/user1/:id',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const teacherId = req.params.id
    const getUser = `SELECT COUNT(id) AS COUNT FROM teachers WHERE id = '${teacherId}'`;
    const sql = `UPDATE teachers SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}' WHERE id = '${teacherId}'`;
    db.query(getUser,(err,result)=>{
        if(err) throw err;
        if(result[0].COUNT !== 0){
            db.query(sql,(err,result)=>{
                if(err) throw err;
                res.json({message:`Teacher with id ${teacherId} is updated!`})
            })
        }else{
            res.json({message:`Teacher with id ${teacherId} is not found!`}, 404);
        }
    })
})


//              4.
app.delete('/user1/:id',(req,res)=>{
    db.query(`DELETE FROM teachers WHERE id = ${req.params.id}`,(err,result)=>{
        if(err) throw err
        res.json(result);
    })
})

//              5.
app.get('/users/limit/:page',(req,res)=>{
    const page = (req.params.page - 1)*10;
    db.query(`SELECT * FROM students LIMIT ${page},10`,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
})

app.listen(3000)