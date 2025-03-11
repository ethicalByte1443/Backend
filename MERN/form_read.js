const express = require('express')
const app = express()
const morgan = require('morgan')


// .get() --> server to forntend
// .post() --> frontend to server
app.set('view engine', 'ejs')


// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})



app.get('/form', (req, res) => {
    res.render('form')
})


// this custon get route will show the user info on the browser req url including the password WHICH IS VERY BAD!!!
// app.get('/get-form-data', (req, res) => {
//     console.log(req.query)
//     res.send('Data received')
// })


// post method
app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('Data Received')
})

app.listen(3000, console.log('Server starting at http://localhost:3000'))