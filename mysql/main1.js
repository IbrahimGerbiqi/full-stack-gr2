const express = require('express')
const app = express()

//const db = require('../database/database1')

//kjo eshte tash databaza index.js te models
const models = require('../models/index');
app.use(express.json())

// .      /user/Joe/ 9  /test
app.get('/user/:id/:name/test', (req, res) => {
    res.send(`Hello World ${req.params.id} ${req.params.name}`)
})

app.get('/', (req, res) => {
    res.send('Get method')
})

app.post('/', (req, res) => {
    res.send(req.body.name)
})

app.put('/', (req, res) => {
    res.send('Second Post method put')
})

app.delete('/', (req, res) => {
    res.send('Second Post method delete')
})




app.get('/users/limit/:limit', (req, res) => {
    db.query('SELECT * FROM students LIMIT ' + req.params.limit, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

app.get('/users/limit2', (req, res) => {
    db.query('SELECT * FROM students LIMIT 5,5', (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})



app.get('/users/limit/:page', (req, res) => {
    const page = (req.params.page - 1) * 10
    db.query(`SELECT * FROM subjects LIMIT ${page},10`, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
})

















//Sequelize
app.get('/users', (req, res) => {
    const users = models.User.findAndCountAll({})
        .then(userResponse => {
            res.json(userResponse)
        }).catch(err => {
            console.log(err);
            res.send(err, 500)
        })
})

app.get('/users/:id', (req, res) => {
    const users = models.User.findOne({
        where: { id: req.params.id },
    })
        .then(userResponse => {
            res.json(userResponse)
        }).catch(err => {
            console.log(err);
            res.send(err, 500)
        })

})


app.delete('/users/:id', (req, res) => {
    const users = models.User.destroy({
        where: { id: req.params.id },
    })
        .then(userResponse => {
            res.json(userResponse)
        }).catch(err => {
            console.log(err);
            res.send(err, 500)
        })
    // db.query('DELETE FROM students WHERE id='+req.params.id, (err,result)=>{
    //     if(err){ throw err}
    //     res.json(result)
    // })
})
app.post('/users', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    // db.query('INSERT INTO students(firstName,lastName,email) VALUES ("'+firstName+'","'+lastName+'","'+email+'")'
    // , (err,result)=>{
    //     if(err){ throw err}
    //     res.json(result)
    // })


    //keto i formatizojne te dhenat nga json ne mysql
    //models.User.create({ firstName: firstName, lastName:lastName})


    //ose
    //ketu nuk ben te shenon "res" ne vend te "result", sepse eshte deklaruar me lart edhe kjo e overwrite ato prandaj qet error
    models.User.create({ ...req.body }).then(result => {
        res.json({ message: "User is creted!" })
    }).catch(err => {
        console.log(err)
        res.send("Error", 500)
    })


    //Object Deconstructuring eshte kjo lart  
    //eshte sikur ta ben: firstName:req.body.firstName, lastName: req.body.lastName
    //keto me trepika mund ta perdor vetem nese emrat e kolonave psh, firstName, lastName, jane te njejta si ne frontEnd, si ne Databaze, 
    //dmth nuk ben ta perdor nese ke p.sh ne vend te firstName :"Joe",  ke   name:"Joe", atehere nuk ben se ti ne databaze e ke "firstName", jo "name"
})

app.put('/users', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const users = models.User.update({ firstName: firstName, lastName: lastName }, {
        where: {
            id: req.params.id
        }
    })
        .then(userResponse => {
            res.json('Useri u perditesua me sukses')
        }).catch(err => {
            console.log(err);
            res.send(err, 500)
        })


})

app.listen(3000)