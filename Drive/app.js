const express = require('express')
const app = express()
const userRouter = require('./routes/user.routes')
const env = require('dotenv')
const connecttodb = require('./config/db')

connecttodb();
env.config()

app.set('view engine', 'ejs')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/user', userRouter)

app.listen(3001, console.log('Server started at http://localhost:3001/user'))