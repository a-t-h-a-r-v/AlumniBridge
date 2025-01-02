const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 5000;
const otpStore = new Map();

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

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOtp = async (email) => {
    const otp = crypto.randomInt(100000, 999999).toString();
    console.log("OTP IS : ", otp);
    otpStore.set(email, { otp, expiresAt: Date.now() + 300000 });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);
};

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

// Fetch User by Email
app.get("/api/users", async (req, res) => {
    try {
        const { email } = req.query;

        // Validate the email parameter
        if (!email) {
            return res.status(400).json({ message: "Email query parameter is required" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the user details (exclude sensitive information like password)
        const { password, ...userDetails } = user._doc;
        res.status(200).json(userDetails);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Error fetching user", error });
    }
});

// Update User Profile
app.put("/api/users", async (req, res) => {
    try {
        const { email, first_name, last_name, srn, stream, year_of_passing, profile_pic } = req.body;

        // Validate email (mandatory for identifying the user)
        if (!email) {
            return res.status(400).json({ message: "Email is required for updating the profile" });
        }

        // Find the user and update their details
        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    first_name,
                    last_name,
                    srn,
                    stream,
                    year_of_passing,
                    profile_pic,
                },
            },
            { new: true, runValidators: true } // Return the updated user
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Error updating profile", error });
    }
});

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

const tempUserStore = new Map(); // Temporarily store user details

// Registration Endpoint (Step 1: Save Temporary Data and Send OTP)
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

        // Ensure all fields are provided
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

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Store user data temporarily
        tempUserStore.set(email, {
            first_name,
            last_name,
            email,
            srn,
            stream,
            year_of_passing,
            password: hashedPassword,
            role,
        });

        // Send OTP
        await sendOtp(email); // Send OTP to the email
        console.log("OTP sent to", email); // Log OTP sent for debugging

        res.status(200).json({ message: "OTP sent to your email. Please verify to complete registration." });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Error during registration", error });
    }
});

// OTP Verification Endpoint (Step 2: Verify OTP and Save User)
app.post("/api/verify-registration-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Check if OTP exists for the user
        const storedOtpData = otpStore.get(email);
        if (!storedOtpData) {
            console.error(`No OTP data found for email: ${email}`);
            return res.status(400).json({ message: "OTP expired or invalid" });
        }

        // Check if OTP matches and is not expired
        if (storedOtpData.otp !== otp || storedOtpData.expiresAt < Date.now()) {
            console.error(`Invalid or expired OTP for email: ${email}`);
            return res.status(400).json({ message: "OTP expired or invalid" });
        }

        // Retrieve user data from temporary store
        const userData = tempUserStore.get(email);
        if (!userData) {
            return res.status(400).json({ message: "No registration data found for this email" });
        }

        // Create new user and save to database
        const newUser = new User(userData);
        await newUser.save();
        console.log("User registered successfully:", newUser);

        // Clear OTP and temporary user data after successful registration
        otpStore.delete(email);
        tempUserStore.delete(email);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ message: "Error verifying OTP", error });
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

        // Send OTP
        await sendOtp(email);
        res.status(200).json({ message: "OTP sent to your email. Please verify to login." });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in", error });
    }
});

app.post("/api/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Check if OTP exists for the user
        const storedOtpData = otpStore.get(email);
        if (!storedOtpData) {
            return res.status(400).json({ message: "OTP expired or invalid" });
        }

        // Check if OTP matches and is not expired
        if (storedOtpData.otp !== otp || storedOtpData.expiresAt < Date.now()) {
            return res.status(400).json({ message: "OTP expired or invalid" });
        }

        // OTP is valid, login successful
        otpStore.delete(email); // Clear OTP from memory after successful verification
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("OTP verification error:", error);
        res.status(500).json({ message: "Error verifying OTP", error });
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

// Fetch Users by Stream
app.get("/api/network", async (req, res) => {
    try {
        const { stream } = req.query;

        // Validate the stream parameter
        if (!stream) {
            return res.status(400).json({ message: "Stream query parameter is required" });
        }

        // Find users with the same stream (exclude sensitive information like password)
        const users = await User.find({ stream }).select("-password");

        // If no users are found
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found for this stream" });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users by stream:", error);
        res.status(500).json({ message: "Error fetching users by stream", error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

