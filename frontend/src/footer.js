import React from 'react';
import './footer.css';
function Footer() {
    return (
        <>
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
        </>
    );
}

export default Footer;
