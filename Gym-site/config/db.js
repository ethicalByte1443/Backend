const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/gym-web').then(() => {
    console.log('Connected to Database')
})



module.exports = connection