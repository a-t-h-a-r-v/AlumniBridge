import React from 'react';
import { Link } from 'react-router-dom';
import './newdev.css';
function Dev(){
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
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
            <div className="hamburger" onClick={toggleSidebar}>
                ☰
            </div>
            <div className="sidebar" id="sidebar">
                <Link to="/">
                    <i className="fa fa-fw fa-home" /> <span>Home</span>
                </Link>
                <Link to="/about">
                    <i className="fa fa-fw fa-info-circle" /> <span>About</span>
                </Link>
                <Link to="/stories">
                    <i className="fa fa-fw fa-book" /> <span>Stories</span>
                </Link>
                <Link to="/jobs">
                    <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
                </Link>
                <Link to="/profile">
                    <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
                </Link>
                <Link to="/network">
                    <i className="fa fa-fw fa-user-plus" /> <span>Networks</span>
                </Link>
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
          <div className="grid-container">
            <section id="developer-cards">
              <div className="content">
                <div className="developer-container">
                  <div className="profile-photo">
                    <img
                      src="https://avatars.githubusercontent.com/u/168991836?v=4"
                      alt="Developer Photo"
                    />
                  </div>
                  <div className="developer-box">
                    <h4>Akhilesh Joshi</h4>
                    <p>This is a brief description of the developer.</p>
                    <div className="icons">
                      <a href="">
                        <img src="linkedin-icon.png" alt="LinkedIn" />
                      </a>
                      <a href="https://github.com/akhileshj2004">
                        <img src="github-icon.png" alt="GitHub" />
                      </a>
                      <a href="">
                        <img src="gmail-icon.png" alt="Gmail" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="developer-container">
                  <div className="profile-photo">
                    <img src="developer-photo.jpg" alt="Developer Photo" />
                  </div>
                  <div className="developer-box">
                    <h4>Atharv Shirgurkar</h4>
                    <p>This is a brief description of the developer.</p>
                    <div className="icons">
                      <a href="">
                        <img src="linkedin-icon.png" alt="LinkedIn" />
                      </a>
                      <a href="https://github.com/a-t-h-a-r-v">
                        <img src="github-icon.png" alt="GitHub" />
                      </a>
                      <a href="">
                        <img src="gmail-icon.png" alt="Gmail" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="developer-container">
                  <div className="profile-photo">
                    <img
                      src="https://avatars.githubusercontent.com/u/120473716?v=4"
                      alt="Developer Photo"
                    />
                  </div>
                  <div className="developer-box">
                    <h4>Rutika Wagalekar</h4>
                    <p>This is a brief description of the developer.</p>
                    <div className="icons">
                      <a href="">
                        <img src="linkedin-icon.png" alt="LinkedIn" />
                      </a>
                      <a href="https://github.com/RutikaW1155">
                        <img src="github-icon.png" alt="GitHub" />
                      </a>
                      <a href="">
                        <img src="gmail-icon.png" alt="Gmail" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="developer-container">
                  <div className="profile-photo">
                    <img
                      src="https://avatars.githubusercontent.com/u/182062771?v=4"
                      alt="Developer Photo"
                    />
                  </div>
                  <div className="developer-box">
                    <h4>Saniya Kadarbhai</h4>
                    <p>This is a brief description of the developer.</p>
                    <div className="icons">
                      <a href="">
                        <img src="linkedin-icon.png" alt="LinkedIn" />
                      </a>
                      <a href="https://github.com/SaniyaKadarbhai">
                        <img src="github-icon.png" alt="GitHub" />
                      </a>
                      <a href="">
                        <img src="gmail-icon.png" alt="Gmail" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="description-section">
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida ante
                habitasse nullam sodales finibus platea. Ex euismod ex maecenas montes
                torquent; facilisi eleifend sodales. Netus ultrices ultricies luctus in
                pretium a pellentesque. Orci conubia consequat at sapien ridiculus
                fringilla taciti. Arcu litora viverra conubia commodo vel potenti est.
                Felis orci tellus sociosqu dui id. Praesent magna habitant dictumst a
                per. Magnis non vitae ligula id nunc ad consequat tellus sagittis.
                Aliquam condimentum proin pharetra facilisis fringilla hac; varius
                vulputate. Sodales ultricies nostra vestibulum aptent ante. Adipiscing
                neque mollis mauris commodo viverra ornare platea himenaeos. Ante
                ultricies egestas morbi penatibus etiam, gravida enim interdum. Magnis
                class nunc ultricies hendrerit fames magna. Egestas montes vel cursus
                libero ridiculus.{" "}
              </p>
            </section>
          </div>
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
export default Dev;
