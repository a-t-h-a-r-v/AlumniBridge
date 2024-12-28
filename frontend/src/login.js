import React, { useState, useContext } from "react";
import "./login.css";
import backgroundImage from "./backgrd.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

function LoginPage() {
    const { setIsLoggedIn, setLoginEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/home"); // Redirect to the home page
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setOtpSent(true); // Show OTP input field
                setError(""); // Clear any previous errors
            } else {
                setError(data.message || "Login failed");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setIsLoggedIn(true); // Mark user as logged in
                setLoginEmail(email);
                console.log(email);
                handleRedirect(); // Redirect to home page
            } else {
                setError(data.message || "OTP verification failed");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="background">
                <div className="login-container">
                    <h2>Login</h2>
                    {!otpSent ? (
                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <div className="error-message">{error}</div>}
                            <div className="form-options">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpSubmit}>
                            <div className="form-group">
                                <label htmlFor="otp">Enter OTP</label>
                                <input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    placeholder="Enter the OTP sent to your email"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <div className="error-message">{error}</div>}
                            <button type="submit" className="login-btn">
                                Verify OTP
                            </button>
                        </form>
                    )}
                    <div className="register">
                        <p>
                            Not registered yet? <Link to="/register">Register Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
