import React, { useState } from "react";
import axios from "axios";
import "./Signupstyle.css";

const Signup = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [stream, setStream] = useState("");
  const [srn, setSRN] = useState("");
  const [year_of_passing, setYearOfPassing] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirmPassword
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        first_name,
        last_name,
        email,
        contact_number,
        stream,
        srn,
        year_of_passing,
        password,
        role,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="registration-container">
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First Name"
          />

          {/* Last Name */}
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last Name"
          />

          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />

          {/* Contact Number */}
          <input
            type="tel"
            value={contact_number}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            pattern="[0-9]{10}"
            placeholder="Contact Number"
          />

          {/* Stream */}
          <input
            type="text"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            required
            placeholder="Stream"
          />

          {/* SRN */}
          <input
            type="text"
            value={srn}
            onChange={(e) => setSRN(e.target.value)}
            required
            placeholder="SRN"
          />

          {/* Year of Passing */}
          <input
            type="number"
            value={year_of_passing}
            onChange={(e) => setYearOfPassing(e.target.value)}
            required
            placeholder="Year of Passing"
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          {/* Confirm Password */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />

          {/* Role */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
