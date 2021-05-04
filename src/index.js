const express = require('express')
const chalk = require('chalk')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { findById, findByIdAndDelete } = require('./models/task')

const app = express()

const port = process.env.PORT

// app.use( (req, res, next) => {
//     res.status(503).send('Site is under Maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on the port ' + port)
})
