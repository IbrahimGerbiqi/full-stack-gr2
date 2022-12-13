const express = require('express')
const res = require('express/lib/response')
const app = express()
const db = require('./database')

app.use(express.json())


app.get('/users',(req,res)=>{
    db.query('SELECT * FROM students', (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
  })


  
  
  
  app.put('/users/:id',(req,res)=>{
    
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userId = req.params.id
  
    const getUser = `Select count(id) as count FROM students where id = '${userId}'`
    const sql = `UPDATE students SET firstName = '${firstName}', lastName = '${lastName}' WHERE (id = '${userId}')`;
  
    db.query(getUser,(err,result)=>{
        if(err){ throw err}
        if(result[0].count !== 0){
            db.query(sql ,(err,result)=>{
                if(err){ throw err}
                res.json({message:`Student with id ${userId} has been updated!`})
            })
        }else{
            res.json({message:`Student with id ${userId} is not found!`}, 404)
        }
  
    })
  })
  //4
  app.delete('/users/:id',(req,res)=>{
    db.query('DELETE FROM students WHERE id='+req.params.id, (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
  })
 

    app.get('/users/limit/:page',(req,res)=>{
        const page = (req.params.page - 1)*10;
        db.query(`SELECT * FROM students LIMIT ${page},10`,(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
    })

app.listen(3000)