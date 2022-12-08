const express = require('express')
const app = express()


const models = require('./models/index');
app.use(express.json())

const userRouters = require('./routers/users')

app.use('/api/users', userRouters)


app.listen(3000)