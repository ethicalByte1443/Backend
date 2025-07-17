const mongoose = require('mongoose');

const TestingappSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const testingmodel = mongoose.model('register', TestingappSchema);

module.exports = testingmodel;
