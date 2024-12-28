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

    return (
        <div>
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
    );
};

export default Profile;
