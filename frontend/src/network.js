import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./App";

const Network = () => {
    const { loginEmail } = useContext(AuthContext); // Retrieve the logged-in user's email
    const [users, setUsers] = useState([]);
    const [stream, setStream] = useState("");
    const [loading, setLoading] = useState(true);

    // Fetch the logged-in user's details to get their stream
    useEffect(() => {
        const fetchUserStream = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users?email=${loginEmail}`)
;
                const userData = await response.json();

                if (response.ok) {
                    setStream(userData.stream); // Set the user's stream
                } else {
                    console.error("Error fetching user details:", userData.message);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchUserStream();
    }, [loginEmail]);

    // Fetch users in the same stream
    useEffect(() => {
        if (stream) {
            const fetchUsers = async () => {
                try {
                    const response = await fetch(`https://localhost:5000/api/network?stream=${stream}`);
                    const data = await response.json();

                    if (response.ok) {
                        setUsers(data); // Set the users
                    } else {
                        console.error("Error fetching network users:", data.message);
                    }
                } catch (error) {
                    console.error("Error:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchUsers();
        }
    }, [stream]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Network</h1>
            <h2>Users in {stream} Stream</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {users.length > 0 ? (
                    users.map((user) => (
                        <div
                            key={user._id}
                            style={{
                                border: "1px solid #ccc",
                                padding: "1rem",
                                borderRadius: "8px",
                                maxWidth: "250px",
                            }}
                        >
                            <img
                                src={user.profile_pic || "https://via.placeholder.com/150"}
                                alt={`${user.first_name} ${user.last_name}`}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                            <h3>{user.first_name} {user.last_name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Year of Passing: {user.year_of_passing}</p>
                            <p>Role: {user.role}</p>
                        </div>
                    ))
                ) : (
                    <p>No users found in this stream.</p>
                )}
            </div>
        </div>
    );
};

export default Network;
