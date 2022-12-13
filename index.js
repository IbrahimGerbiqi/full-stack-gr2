const express = require('express')
const app = express()

const models = require('./models/index');
app.use(express.json())

const userRouters = require('./routers/users')

app.use('/api/users', userRouters)

//2. API that will be used to return all users within the software.
app.get('/users',(req,res)=>{
    db.query('SELECT * FROM students', (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})

//3. API that will be used to update a user by id.
app.put('/users/:id',(req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userId = req.params.id

    const getUser =  `Select count(id) as count FROM Students WHERE id = '${userId}'`
    const sql = `UPDATE students SET firstName = '${firstName}',lastname = '${lastName}' WHERE (id = '${userId}')`;

    db.query(getUser,(err,result)=>{
        if(err){ throw err }
        if(result[0].count !== 0){
            db.query(sql,(err,result)=>{
                if(err){throw err}
                res.json({message:`Student with id ${userId} has been updated !`})
            })
        }else{
            res.json({message:`Student with id ${userId} has not been found !`},404)
        }
    })
})



//4. API that will be used to delete a user by id.

const deleteStudent = (req,res)=>{
    models.Student.destroy({
        where: {id: req.params.id},
    })
    .then( studentResponse => {
        res.json( studentResponse )
    })
}

//5. API that will be used to return 10 users per page.

app.get('/users/limit/:page',(req,res)=>{
    const page = (req.params.page - 1 ) * 10
    db.query(`SELECT * FROM subjects LIMIT ${page},10`, (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})




app.listen(3000)