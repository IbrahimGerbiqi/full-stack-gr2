const express = require('express')
const app = express()
app.use(express.json())
// detyra 2
  app.get('/users',(req,res)=>{
      db.query('SELECT * FROM students', (err,result)=>{
          if(err){ throw err}
          res.json(result)
      })
  })
//detyra 3
app.post('/users/:id',(req,res)=>{
    const lastName = req.body.lastName
    const users = models.User.update({lastName:lastName}, {
        where: {
          id: req.params.id
        }
    })
    .then( userResponse => {
      res.json( 'Useri u perditesua me sukses' )
    })
})
//detyra 4
app.delete('/users/:id',(req,res)=>{
    db.query('DELETE FROM students WHERE id='+req.params.id, (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})
//detyra 5
app.get('/users/limit10',(req,res)=>{
    db.query('SELECT * FROM students LIMIT 0,10', (err,result)=>{
        if(err){ throw err}
        res.json(result)
    })
})
//detyra 6
const loginUser = (req,res)=>{
    models.User.findOne({ where: { email: req.body.email } }).then(result=>{
        if(result === null) res.json({message:"There is not user with that email!"},404)
       const token =  jwt.sign({result}, 'superSecret1!@',{expiresIn:'10s'})
       res.json(token)
    }).catch(err=>{
        console.log(err)
        res.json(err,501)
    })
}

app.listen(3000)
