const express = require('express')
const userRouter = require('./routes/user.routes')
const app = express()



app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user', userRouter)



app.listen(5555, console.log('Server Started on http://localhost:5555/user'))