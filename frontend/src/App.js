import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './registration';
import About from './about';
import Home from './home';
import Profile from './profile';
import Jobs from './jobs';
import Review from './review';
import Dev from './newdev';
import Events from './events';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/developer" element={<Dev />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/home" element={<Home />} />
                <Route path="/review" element={<Review />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </Router>
    );
}

export default App;
