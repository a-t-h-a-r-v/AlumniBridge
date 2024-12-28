// App.js

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';
import Login from './login';
import Register from './registration';
import About from './about';
import Home from './home';
import Profile from './profile';
import Jobs from './jobs';
import Review from './review';
import Dev from './newdev';
import Events from './events';

// Create a context for user authentication
export const AuthContext = createContext(); // Ensure this is exported

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loginEmail, setLoginEmail}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Protected Routes */}
                    <Route
                        path="/developer"
                        element={
                            <ProtectedRoute>
                                <Dev />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <ProtectedRoute>
                                <About />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/jobs"
                        element={
                            <ProtectedRoute>
                                <Jobs />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/review"
                        element={
                            <ProtectedRoute>
                                <Review />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/events"
                        element={
                            <ProtectedRoute>
                                <Events />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

// ProtectedRoute component
function ProtectedRoute({ children }) {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default App;
