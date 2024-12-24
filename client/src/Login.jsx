import React from "react";
import "./Loginstyle.css";

function Login() {
  return (
    <div>
      <div className="background"></div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-options">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="register">
          <p>
            Not registered yet? <a href="./register">Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
