const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://adminUser:QpMz.1793@localhost:27017/AlumniBridge?authSource=admin")
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// POST route for user registration
app.post('/register', (req, res) => {
    const { first_name, last_name, email, contact_number, stream, srn, year_of_passing, password, role } = req.body;

    // Ensure all required fields are present
    if (!first_name || !last_name || !email || !password || !role) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if the email already exists
    UsersModel.findOne({ email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Add new user to the database
            UsersModel.create({ first_name, last_name, email, contact_number, stream, srn, year_of_passing, password, role })
                .then((user) => {
                    console.log('New user added:', user);
                    res.status(201).json({ message: 'User registered successfully', user });
                })
                .catch((err) => {
                    console.error('Error registering user:', err);
                    res.status(500).json({ message: 'Internal Server Error', error: err.message });
                });
        })
        .catch((err) => {
            console.error('Error checking for existing user:', err);
            res.status(500).json({ message: 'Error checking for existing user', error: err.message });
        });
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
