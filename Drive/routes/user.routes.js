const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator')
const userModel = require('../models/user.models')


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
router.post(
    '/register',
    body('email').trim().isEmail().isLength({ min: 6 }),
    body('username').trim().isLength({ min: 3 }),
    body('password').trim().isLength({ min: 5 }),

    (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        console.log(errors);

        if (errors.isEmpty()) {
            const { email, username, password } = req.body;

            const newUser = userModel.create({
                email,
                username,
                password
            });

            // Send response and stop further execution
            return res.json(newUser);
        }

        // Send validation error response
        return res.status(400).json({
            errors: errors.array(),
            message: 'Invalid Data'
        });
    }
);


module.exports = router