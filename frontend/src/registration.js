import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contactNumber: "",
    stream: "",
    srn: "",
    year_of_passing: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First Name is required";
    if (!formData.last_name) newErrors.last_name = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required";
    else if (!/^\d{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Enter a valid 10-digit number";
    if (!formData.stream) newErrors.stream = "Stream is required";
    if (!formData.srn) newErrors.srn = "SRN is required";
    if (!formData.year_of_passing)
      newErrors.year_of_passing = "Year of Passing is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.role) newErrors.role = "User type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear error for the current field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Data: ", formData); // Check if the form data is complete

    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);
      setSuccessMessage("Registration successful!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contactNumber: "",
        stream: "",
        srn: "",
        year_of_passing: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
      setErrors({});
    } catch (error) {
      setSuccessMessage("");
      setErrors({ general: "Error during registration: " + (error.response?.data?.message || "Server error") });
    }
  };

  return (
    <div className="registration-container">
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
            {errors.first_name && <small className="error">{errors.first_name}</small>}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              placeholder="Last Name"
            />
            {errors.last_name && <small className="error">{errors.last_name}</small>}
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="Contact Number"
            />
            {errors.contactNumber && <small className="error">{errors.contactNumber}</small>}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              required
              placeholder="Stream"
            />
            {errors.stream && <small className="error">{errors.stream}</small>}
          </div>

          <div className="input-box">
            <input
              type="text"
              name="srn"
              value={formData.srn}
              onChange={handleChange}
              required
              placeholder="SRN"
            />
            {errors.srn && <small className="error">{errors.srn}</small>}
          </div>

          <div className="input-box">
            <input
              type="number"
              name="year_of_passing"
              value={formData.year_of_passing}
              onChange={handleChange}
              required
              placeholder="Year of Passing"
            />
            {errors.year_of_passing && <small className="error">{errors.year_of_passing}</small>}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
          </div>

          <div className="input-box">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
            {errors.role && <small className="error">{errors.role}</small>}
          </div>

          <button type="submit">Register</button>
        </form>

        {errors.general && <p className="error">{errors.general}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="login">
            <p>
                Already Have an Account?<Link to="/login">Login</Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
