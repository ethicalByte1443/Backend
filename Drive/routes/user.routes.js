const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator')



// /user 

router.get('/', (req, res) => {
    res.send('user test route')
})


// /user/index 

router.get('/index', (req, res) => {
    res.render('index')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 6}),
    body('username').trim().isLength({min : 3}),
    body('password').trim().isLength({min : 5}),
    
    (req, res) => {

        const errors = validationResult(req)
        if(errors.isEmpty()){
            return res.status(200).json({
                errors : errors.array(),
                message: 'Data accepted'
            })
        }
        return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid Data'
        })
})

module.exports = router