const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')


router.get('/', (req, res) => {
    res.render('index')
})




router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register',

    body('email').trim().isEmail(),
    body('password').trim().isLength({min : 5}),
    body('username').trim().isLength({ min : 3}),
    (req, res) => {

        const error = validationResult(req);
        
        if(error.isEmpty()){
            
            console.log(req.body)
        }
        else{
            console.log(error)
            console.log(req.body)
            res.send('invalid Data')
        }
})

module.exports = router