const express = require('express')
const exp = express()


exp.set('view engine', 'ejs')


// middleware --> (builtin, custon, third party)
// custom
exp.use((req, res, next) => {
    console.log('This is Middleware');
    return next()
})



exp.get('/', (req, res) => {
    res.render('index')
})

exp.get('/about' , (req, res) => {
    res.send('About Page')
})

exp.get('/profile' , (req, res) => {
    res.send('Aseem Pradhan')
})

exp.listen(3000, console.log('Server started at http://localhost:3000'))