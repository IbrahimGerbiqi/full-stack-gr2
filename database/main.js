const express = require('express')
const app = express()

app.use(express.json())
const userRouters = require('./router/Student')
app.use('/api/Student', userRouters)

app.listen(3000)

