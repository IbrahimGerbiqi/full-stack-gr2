const express = require('express')
const app = express()


const models = require('./models/index');

const userRouters = require('./routers/users')
const studentRouters = require('./routers/student')


app.use(express.json())

app.use('/api/users', userRouters)

app.use('app/students', studentRouters);

app.listen(3000)