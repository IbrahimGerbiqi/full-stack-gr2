const express = require('express')
const app = express()
app.use(express.json())

const userRouters = require('./routers/users')

app.use('/api/users', userRouters)

app.listen(3000)