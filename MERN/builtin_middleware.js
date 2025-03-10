const express = require('express')
const app = express()
const morgan = require('morgan')


// builtin middleware
app.use(morgan('dev'))


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})


// middleware logger for specific request
app.get('/about',(req, res, next) => {
    console.log('user route to About Section');
    return next()
} , (req, res) => {
    res.render('about')
})


app.get('/profile', (req, res) => {
    res.render('profile')
})


app.listen(3000, console.log('Server running on http://localhost:3000'))