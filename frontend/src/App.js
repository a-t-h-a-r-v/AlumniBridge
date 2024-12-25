import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './registration';
import Home from './home';
import Dev from './newdev';
import Events from './events';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/developer" element={<Dev />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </Router>
    );
}

export default App;
