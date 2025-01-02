import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./App";

const Profile = () => {
    const { loginEmail } = useContext(AuthContext); // Retrieve the logged-in user's email
    const [userData, setUserData] = useState(null); // State to store user data
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to manage errors
    const [isEditing, setIsEditing] = useState(false); // Manage edit mode
    const [editedData, setEditedData] = useState({}); // State for edited user data

    useEffect(() => {
        if (loginEmail) {
            // Fetch user data from the database using the email
            fetch(`http://localhost:5000/api/users?email=${loginEmail}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch user data");
                    }
                    return response.json();
                })
                .then((data) => {
                    setUserData(data); // Set the fetched user data
                    setEditedData(data); // Initialize edited data
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message); // Set error message
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [loginEmail]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        fetch("http://localhost:5000/api/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update user data");
                }
                return response.json();
            })
            .then((data) => {
                setUserData(data.user); // Update state with new user data
                setIsEditing(false); // Exit edit mode
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    if (loading) {
        return <p>Loading profile...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!userData) {
        return <p>No user found. Please log in first.</p>;
    }

    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Developer Page</title>
<link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                rel="stylesheet"
            />
            <div className="hamburger" onClick={toggleSidebar}>
                ☰
            </div>
            <div className="sidebar" id="sidebar">
                <Link to="/home">
                    <i className="fa fa-fw fa-home" /> <span>Home</span>
                </Link>
                <Link to="/about">
                    <i className="fa fa-fw fa-info-circle" /> <span>About</span>
                </Link>
                <Link to="/review">
                    <i className="fa fa-fw fa-book" /> <span>Stories</span>
                </Link>
                <Link to="/jobs">
                    <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
                </Link>
                <Link to="/profile">
                    <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
                </Link>
                <Link to="/network">
                    <i className="fa fa-fw fa-user-plus" /> <span>Networks</span>
                </Link>
                <Link to="/events">
                    <i className="fa fa-fw fa-book-open" /> <span>Events</span>
                </Link>
                <Link to="/developer">
                    <i className="fa fa-fw fa-users" /> <span>Developers</span>
                </Link>
            </div>
            <nav className="navbar">
                <img src="./assets/logo.png" alt="Logo" className="logo" />
            </nav>
        <div className='profile-container' style={{marginTop: "100px"}}>
            <h1>Profile</h1>
            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", maxWidth: "400px" }}>
                <img
                    src={userData.profile_pic || "https://via.placeholder.com/150"}
                    alt="Profile"
                    style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "20px" }}
                />
                {isEditing ? (
                    <>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="first_name"
                                value={editedData.first_name || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="last_name"
                                value={editedData.last_name || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            SRN:
                            <input
                                type="text"
                                name="srn"
                                value={editedData.srn || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Stream:
                            <input
                                type="text"
                                name="stream"
                                value={editedData.stream || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Year of Passing:
                            <input
                                type="number"
                                name="year_of_passing"
                                value={editedData.year_of_passing || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Profile Picture URL:
                            <input
                                type="text"
                                name="profile_pic"
                                value={editedData.profile_pic || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <p><strong>First Name:</strong> {userData.first_name}</p>
                        <p><strong>Last Name:</strong> {userData.last_name}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>SRN:</strong> {userData.srn}</p>
                        <p><strong>Stream:</strong> {userData.stream}</p>
                        <p><strong>Year of Passing:</strong> {userData.year_of_passing}</p>
                        <p><strong>Role:</strong> {userData.role}</p>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </>
                )}
            </div>
        </div>
          <footer className="college-footer">
            <div className="footer-container">
              <div className="footer-about">
                <h3>About KLE Technological University</h3>
                <p>
                  KLE Technological University stands for academic excellence,
                  innovative research, and a commitment to shaping future leaders.
                </p>
              </div>
              <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Admissions</a>
                  </li>
                  <li>
                    <a href="#">Departments</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Alumni</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>KLE Technological University</p>
                <p>Vidyanagar, Hubballi, Karnataka - 580031</p>
                <p>
                  Email: <a href="mailto:info@kletech.ac.in">info@kletech.ac.in</a>
                </p>
                <p>Phone: +91 836 2378 101</p>
              </div>
              <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="social-icon twitter"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="social-icon linkedin"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="social-icon facebook"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/facebook-new.png"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="social-icon instagram"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                      alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                © 2024 KLE Technological University. All Rights Reserved. |{" "}
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
              </p>
            </div>
          </footer>
        </div>
    );
};

export default Profile;
