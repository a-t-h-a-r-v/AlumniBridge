const mongoose = require('mongoose');

// Define the User Schema
const UsersSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true, // Mark as required
    },
    last_name: {
      type: String,
      required: true, // Mark as required
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure no duplicate emails
    },
    srn: {
      type: String,
      required: true,
      unique: true, // Ensure no duplicate SRNs
    },
    stream: {
      type: String,
      required: true, // Mark as required
    },
    year_of_passing: {
      type: Number,
      default: null, // Allow null for cases where it's not provided
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "student", // Default to "student" if not provided
      enum: ["student", "teacher", "alumni"], // Allow only specific roles
    },
    profile_pic: {
      type: String,
      default: null, // Default to null if no profile pic is provided
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the User Model
const UserModel = mongoose.model('users', UsersSchema); // Explicitly map to the 'users' collection

module.exports = UserModel;
