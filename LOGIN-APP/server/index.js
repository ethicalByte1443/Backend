const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const testingmodel = require('./models/Testingapp');

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Testing-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ✅ Register route
app.post('/register', (req, res) => {
    testingmodel.create(req.body)
        .then(() => {
            res.status(201).send('User registered successfully!');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error registering user');
        });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await testingmodel.findOne({ email, password }); // ❗ This is plaintext comparison
        if (user) {
            res.send('Found');
        } else {
            res.send('Not Found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


// ✅ Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
