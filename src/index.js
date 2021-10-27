const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method == 'GET'){
//         res.send('Get request is disabled')
//     } else {
//         next()
//     }
// })

app.use( (req, res, next ) => {
    res.status(503).send("Site is currently down. Check back soon!")
})

app.use(express.json())
app.use('/api/users/', userRouter)
app.use('/api/tasks/', taskRouter)


// Connecting DB
const {connectDb} = require('./db/mongoose')

app.listen(port, () => {
    console.log('Server is up on port ' + port)
    connectDb()
})

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const myFunction = async () => {

    const token = await jwt.sign({ _id:  'abc123' }, 'thisismynewcourse',{ expiresIn: '7 days'})
    console.log(token)

    const data = await jwt.verify(token, 'thisismynewcourse')
    console.log(data)

    // const password = 'Red12345!'
    // const hashedPassword = await bcrypt.hash(password, 8)

    // const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    // console.log(isMatch)
}

myFunction()