const express = require('express')
const app = express()
const morgan = require('morgan')
const userModel = require('./models/user')
const connection = require('./config/db')

app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})


app.get('/register', (req, res) => {
    res.render('register')
})

// app.post('/get-form-data', (req, res) => {
//     console.log(req.body)
//     res.send('Received')
// })

app.post('/get-register-data', async (req, res) => {
    const {username, email, password} = req.body

    await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send('User Register')
})



app.listen(3000, console.log('Server Started at port - http://localhost:3000/home'))
