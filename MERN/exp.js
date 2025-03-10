const express  = require('express')
const exp = express()

exp.set('view engine', 'ejs')

exp.get('/', (req, res) => {
    res.render('index')

})

exp.get('/about', (req, res) => {
    res.send('My name is Aseem pradhan')
})


exp.listen(3000, console.log('Server started on http://localhost:3000'))