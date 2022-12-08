const express = require('express')
const app = express()

const models = require('./models/index');
app.use(express.json())

const userRouters = require('./routers/users')
const studentRouters = require('./routers/students')

app.use('/api/users', userRouters)

app.use('/api/users', studentRouters)

app.listen(3000)

