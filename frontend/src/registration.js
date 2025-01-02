import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    srn: "",
    stream: "",
    year_of_passing: "",
    password: "",
    confirmPassword: "",
    role: "", // Add role
  });

  const [otp, setOtp] = useState(""); // OTP state
  const [isOtpSent, setIsOtpSent] = useState(false); // Step 2 toggle
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First Name is required";
    if (!formData.last_name) newErrors.last_name = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.stream) newErrors.stream = "Stream is required";
    if (!formData.year_of_passing)
      newErrors.year_of_passing = "Year of Passing is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // Step 1: Send Registration Details
      const response = await axios.post("http://localhost:5000/api/register", formData);
      setIsOtpSent(true);
      setSuccessMessage("OTP sent to your email. Please verify.");
    } catch (error) {
      setSuccessMessage("");
      setErrors({
        general: error.response?.data?.message || "Server error",
      });
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 2: Verify OTP
      const response = await axios.post("http://localhost:5000/api/verify-registration-otp", {
        email: formData.email,
        otp,
      });
      setSuccessMessage("Registration successful!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        srn: "",
        stream: "",
        year_of_passing: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
      setOtp("");
      setIsOtpSent(false);
    } catch (error) {
      setErrors({
        otp: error.response?.data?.message || "Invalid OTP",
      });
    }
  };

  return (
    <div className="registration-container">
      <div className="form-box">
        {!isOtpSent ? (
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="input-box">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              {errors.first_name && <small className="error">{errors.first_name}</small>}
            </div>
            <div className="input-box">
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
              {errors.last_name && <small className="error">{errors.last_name}</small>}
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>
            <div className="input-box">
              <input
                type="text"
                name="srn"
                value={formData.srn}
                onChange={handleChange}
                placeholder="SRN"
              />
              {errors.srn && <small className="error">{errors.srn}</small>}
            </div>
            <div className="input-box">
              <input
                type="text"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                placeholder="Stream"
                required
              />
              {errors.stream && <small className="error">{errors.stream}</small>}
            </div>
            <div className="input-box">
              <input
                type="number"
                name="year_of_passing"
                value={formData.year_of_passing}
                onChange={handleChange}
                placeholder="Year of Passing"
                required
              />
              {errors.year_of_passing && (
                <small className="error">{errors.year_of_passing}</small>
              )}
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              {errors.password && <small className="error">{errors.password}</small>}
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
              {errors.confirmPassword && (
                <small className="error">{errors.confirmPassword}</small>
              )}
            </div>
            <div className="input-box">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
              </select>
              {errors.role && <small className="error">{errors.role}</small>}
            </div>
            <button type="submit">Register</button>
            <div className="login">
                <p>
                    Already Registered? <Link to="/login" >Login Now</Link>
                </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <h2>Verify OTP</h2>
            <div className="input-box">
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
              />
              {errors.otp && <small className="error">{errors.otp}</small>}
            </div>
            <button type="submit">Verify</button>
          </form>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.general && <p className="error-message">{errors.general}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;
