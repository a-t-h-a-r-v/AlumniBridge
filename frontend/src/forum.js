import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./App";
import { Link } from 'react-router-dom';
import  './forum.css'

const FetchUserRole = () => {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
    const { loginEmail } = useContext(AuthContext); // Retrieve the logged-in user's email
    const [role, setRole] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [forumType, setForumType] = useState(null); // Track selected forum type
    const [messages, setMessages] = useState([]); // Track forum messages
    const [newMessage, setNewMessage] = useState(""); // Track new message input

    useEffect(() => {
        const fetchUserRole = async () => {
            setLoading(true);
            setError(null);
            setRole(null);

            try {
                const response = await fetch(`http://localhost:5000/api/user-role?email=${loginEmail}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user role");
                }
                const data = await response.json();
                setRole(data.role);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserRole();
    }, [loginEmail]);

    // Fetch messages when forumType changes
    useEffect(() => {
        if (!forumType) return;

        const fetchMessages = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:5000/api/forum/${forumType}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch forum messages");
                }
                const data = await response.json();
                setMessages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [forumType]);

    // Handle posting a new message
    const handlePostMessage = async () => {
        if (!newMessage) {
            setError("Message cannot be empty.");
            return;
        }

        const date = new Date().toISOString().split('T')[0]; // Simple date format
        const time = new Date().toLocaleTimeString(); // Current time

        const messageData = {
            message: newMessage,
            email: loginEmail,
            date,
            time
        };

        try {
            const response = await fetch(`http://localhost:5000/api/forum/${forumType}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messageData),
            });

            if (!response.ok) {
                throw new Error("Failed to post message");
            }

            const data = await response.json();
            setMessages([data.data, ...messages]); // Prepend the new message to the list
            setNewMessage(""); // Clear the input field
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
        <div className="forumClass">
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
                    <i className="fa fa-fw fa-book" /> <span>Reviews</span>
                </Link>
                <Link to="/jobs">
                    <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
                </Link>
                <Link to="/profile">
                    <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
                </Link>
                <Link to="/forum">
                    <i className="fa fa-fw fa-user-plus" /> <span>Forum</span>
                </Link>
                {/* <Link to="/network">
                    <i className="fa fa-fw fa-user-plus" /> <span>Networks</span>
                </Link> */}
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
            <div className="forumClass">
                    {/* Sidebar and other UI elements */}
                    <div style={{
                        minHeight: "100vh",
                        color: "white",
                        padding: "20px",
                        marginTop: "20%",
                        textAlign: "center"
                    }}>
                        <h2>User Role</h2>
                        <p><strong>Logged-in Email:</strong> {loginEmail}</p>

                        {/* Display role-based buttons */}
                        {role === "student" && (
                            <div>
                                <button onClick={() => setForumType("student")} style={buttonStyle}>
                                    STUDENT
                                </button>
                                <button onClick={() => setForumType("alumni_student")} style={buttonStyle}>
                                    STUDENT-ALUMNI
                                </button>
                            </div>
                        )}
                        {role === "alumni" && (
                            <div>
                                <button onClick={() => setForumType("alumni")} style={buttonStyle}>
                                    ALUMNI
                                </button>
                                <button onClick={() => setForumType("alumni_student")} style={buttonStyle}>
                                    STUDENT-ALUMNI
                                </button>
                            </div>
                        )}

                        {/* Display forum messages and input for posting new messages */}
                        {forumType && (
                            <div>
                                <h3>{forumType.charAt(0).toUpperCase() + forumType.slice(1)} Forum</h3>
                                {/* Scrollable messages container */}
                                <div className="scrollable-container "style={{
                                    maxHeight: "400px",  // Set a fixed height for the scrollable area
                                    overflowY: "scroll",  // Enable vertical scrolling
                                    margin: "20px 0",
                                    paddingRight: "10px",  // Prevent hiding scroll bar behind messages
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "5px"
                                }}>
                                    {messages.map((msg) => (
                                        <div key={msg._id} style={messageStyle}>
                                            <p><strong>{msg.email}</strong> ({msg.date} at {msg.time}):</p>
                                            <p>{msg.message}</p>
                                        </div>
                                    ))}
                            {/* Invisible div to ensure scrolling to the bottom */}
                                    <div className="scroll-to-bottom"></div>
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <textarea
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        rows="4"
                                        style={{ width: "80%", padding: "10px", fontSize: "16px" }}
                                        placeholder="Write a message..."
                                    ></textarea>
                                    <button onClick={handlePostMessage} style={buttonStyle}>
                                        Post
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    );
};

const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px"
};

const messageStyle = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "5px",
    margin: "5px 0"
};

export default FetchUserRole;
