import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './home.css';

const PlatformPage = () => {
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
                    <i className="fa fa-fw fa-book" /> <span>Reviews</span>
                </Link>
                <Link to="/jobs">
                    <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
                </Link>
                <Link to="/profile">
                    <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
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
      <section
        id="welcome-section"
        className="animate-section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          //background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          height: "100vh",
          color: "white",
        }}
      >
        <div
          className="welcome-content"
          style={{ flex: 1, textAlign: "left", marginLeft: "0%", marginRight:"50%" }}
        >
          <h1
            className="typing-animation"
            style={{
              marginBottom: "20px",
              fontSize: "3.5rem",
              marginLeft: "10%",
              fontWeight: "bold",
              color:"aqua",
            }}
          >
            𝐆𝐲𝐚𝐧 𝐒𝐚𝐧𝐠𝐚𝐦 𝐌𝐚𝐧𝐜𝐡
          </h1>
          <div
            style={{
              marginLeft: "8%",
              padding: "20px",
              background: "#0f0c29(56, 17, 228, 0.455)",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              color: "white",
              fontSize: "20px",
              lineHeight: "1.8",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
          >
            𝖶𝖾 𝖻𝗋𝗂𝖽𝗀𝖾 𝗍𝗁𝖾 𝗀𝖺𝗉 𝖻𝖾𝗍𝗐𝖾𝖾𝗇 𝖺𝗅𝗎𝗆𝗇𝗂 𝖺𝗇𝖽 𝗌𝗍𝗎𝖽𝖾𝗇𝗍𝗌, 𝖿𝗈𝗌𝗍𝖾𝗋𝗂𝗇𝗀 𝖺 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒 𝗈𝖿 𝗅𝖾𝖺𝗋𝗇𝗂𝗇𝗀,             𝖼𝗈𝗅𝗅𝖺𝖻𝗈𝗋𝖺𝗍𝗂𝗈𝗇, 𝖺𝗇𝖽 𝗀𝗋𝗈𝗐𝗍𝗁. 𝖤𝗑𝗉𝗅𝗈𝗋𝖾 𝖾𝗑𝖼𝗂𝗍𝗂𝗇𝗀 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌, 𝗌𝗁𝖺𝗋𝖾 𝗒𝗈𝗎𝗋 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾𝗌, 𝖺𝗇𝖽             𝖼𝗈𝗇𝗇𝖾𝖼𝗍 𝗐𝗂𝗍𝗁 𝗅𝗂𝗄𝖾-𝗆𝗂𝗇𝖽𝖾𝖽 𝗂𝗇𝖽𝗂𝗏𝗂𝖽𝗎𝖺𝗅𝗌.
        <br />
<p style={{color: "aqua", 
  fontSize: "24px",
}}><strong>Our Vision:</strong></p>
      𝖳𝗈 𝖾𝗆𝗉𝗈𝗐𝖾𝗋 𝗌𝗍𝗎𝖽𝖾𝗇𝗍𝗌 𝖺𝗇𝖽 𝖺𝗅𝗎𝗆𝗇𝗂 𝖻𝗒 𝖿𝗈𝗌𝗍𝖾𝗋𝗂𝗇𝗀 𝗆𝖾𝖺𝗇𝗂𝗇𝗀𝖿𝗎𝗅 𝗋𝖾𝗅𝖺𝗍𝗂𝗈𝗇𝗌𝗁𝗂𝗉𝗌 𝖺𝗇𝖽 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌 𝗍𝗁𝖺𝗍 𝖽𝗋𝗂𝗏𝖾 𝗉𝗋𝗈𝖿𝖾𝗌𝗌𝗂𝗈𝗇𝖺𝗅 𝖺𝗇𝖽 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗅 𝗀𝗋𝗈𝗐𝗍𝗁. 𝖩𝗈𝗂𝗇 𝗎𝗌 𝗈𝗇 𝗍𝗁𝗂𝗌 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗈𝖿 𝗍𝗋𝖺𝗇𝗌𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗅𝖾𝗍’𝗌 𝖼𝗋𝖾𝖺𝗍𝖾 𝖺 𝖻𝗋𝗂𝗀𝗁𝗍𝖾𝗋 𝖿𝗎𝗍𝗎𝗋𝖾 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋!        <br />
Explore. Connect. Inspire.
          </div>
        </div>
        <div
          className="element"
          style={{
            flex: 1,
            textAlign: "right",
            marginRight: "5%",
          }}
        >
          <span style={{ color: "#f5f5f5", fontSize: "1.5rem" }}></span>
        </div>
      </section>

      <footer className="college-footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About KLE Technological University</h3>
            <p>
              KLE Technological University stands for academic excellence, innovative research, and
              a commitment to shaping future leaders.
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
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon twitter">
                <img
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
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
                rel="noreferrer"
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
            &copy; 2024 KLE Technological University. All Rights Reserved. |{" "}
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlatformPage;
