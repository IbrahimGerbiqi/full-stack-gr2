const express = require('express')
const app = express()
app.use(express.json())

const userRouter = require("./routers/users")

app.use('/api/users', userRouter)

app.listen(3000)