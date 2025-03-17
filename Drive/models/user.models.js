const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: [3, 'Username must be at least 3 character long']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: [10, 'Email must be at least 10 character long']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, 'Password should be 6 character']
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user