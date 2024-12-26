const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Event Schema
const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    mode: String,
    link: String,
    description: String,
    image: String,
});

const Event = mongoose.model("Event", eventSchema);

// User Schema
const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        srn: { type: String, required: true },
        stream: { type: String, required: true },
        year_of_passing: { type: Number, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["student", "alumni"], required: true },
        profile_pic: { type: String, default: null },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    mode: { type: String, enum: ["Online", "Offline"], required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    postedBy: { type: String, required: true },
    datePosted: { type: Date, required: true },
    image: { type: String, default: "https://via.placeholder.com/100" },
});

const Job = mongoose.model("Job", jobSchema);

// Events Endpoints
app.post("/api/events", async (req, res) => {
    try {
        const { name, date, mode, link, description, image } = req.body;
        const newEvent = new Event({ name, date, mode, link, description, image });
        await newEvent.save();
        res.status(201).json({ message: "Event added successfully", event: newEvent });
    } catch (error) {
        res.status(500).json({ message: "Error adding event", error });
    }
});

app.get("/api/events", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
});

// Registration Endpoint
app.post("/api/register", async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            srn,
            stream,
            year_of_passing,
            password,
            role,
        } = req.body;

        // Check for missing required fields
        if (
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !srn ||
            !stream ||
            !year_of_passing ||
            !role
        ) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            first_name,
            last_name,
            email,
            srn,
            stream,
            year_of_passing,
            password: hashedPassword, // Store hashed password
            role,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
});
// Login Endpoint
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare entered password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Return success message if login is successful
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error('Login error:', error);  // Log the error
        res.status(500).json({ message: "Error logging in", error });
    }
});

app.post("/api/jobs", async (req, res) => {
    try {
        const {
            jobTitle,
            companyName,
            mode,
            description,
            location,
            postedBy,
            datePosted,
            image,
        } = req.body;

        if (!jobTitle || !companyName || !mode || !description || !location || !postedBy || !datePosted) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newJob = new Job({
            jobTitle,
            companyName,
            mode,
            description,
            location,
            postedBy,
            datePosted,
            image,
        });

        await newJob.save();
        res.status(201).json({ message: "Job added successfully", job: newJob });
    } catch (error) {
        res.status(500).json({ message: "Error adding job", error });
    }
});

app.get("/api/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
