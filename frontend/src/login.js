import React from 'react';
import './login.css';
import backgroundImage from './backgrd.png';
function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted');
  };

  return (
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="background">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                Not registered yet? <a href="#">Register Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginPage;
