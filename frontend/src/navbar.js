import React from 'react';
import './navbar.css';
function Navbar() {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
    return (
        <>
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
        <a href="#home">
        <i className="fa fa-fw fa-home" /> <span>Home</span>
        </a>
        <a href="#about-section">
        <i className="fa fa-fw fa-info-circle" /> <span>About</span>
        </a>
        <a href="#stories-section">
        <i className="fa fa-fw fa-book" /> <span>Stories</span>
        </a>
        <a href="#jobs">
        <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
        </a>
        <a href="#profile">
        <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
        </a>
        <a href="#network">
        <i className="fa fa-fw fa-user-plus" /> <span>Networks</span>
        </a>
        <a href="#research">
        <i className="fa fa-fw fa-book-open" /> <span>Research</span>
        </a>
        <a href="#developers">
        <i className="fa fa-fw fa-users" /> <span>Developers</span>
        </a>
        </div>
        <nav className="navbar">
        <img src="./assets/logo.png" alt="Logo" className="logo" />
        </nav>
        </>
    );
}

export default Navbar;
