import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import NewDeveloperr from './developer';
import Footer from './footer';

function NewDeveloper(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Navbar />
            <NewDeveloperr />
            <Footer />
        </React.StrictMode>
    );
}
export default NewDeveloper;
