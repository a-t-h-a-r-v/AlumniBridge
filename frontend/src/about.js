import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./about.css";

const About = () => {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
  const [sidebarContent, setSidebarContent] = useState("");

  // Load sidebar content dynamically
  useEffect(() => {
    fetch("sidebar_nav.html")
      .then((response) => response.text())
      .then((data) => setSidebarContent(data))
      .catch((error) => console.error("Error loading sidebar:", error));
  }, []);

  // Highlight the active section in the navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav ul li a");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLinks[index]) navLinks[index].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Reapply animations on re-entry
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Sidebar Container */}
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
                    <i className="fa fa-fw fa-book" /> <span>Stories</span>
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

      {/* About Section */}
      <section id="about-section" className="animate-section">
        <div className="about-content">
          <h2 className="about-heading">About Us</h2>
          <p className="about-description">
            <span>
              We prioritize secure and trusted interactions, ensuring a safe
              environment for knowledge sharing and professional networking.
              Whether you're looking to share experiences, explore career
              opportunities, or stay updated on events, our platform bridges
              the gap between alumni and students to create lasting connections.
            </span>
          </p>
        </div>

        {/* Circles Container */}
        <div className="containers">
          <div className="center-title">Circles</div>
          {/* Inner Orbit */}
          <div className="orbit inner-orbit">
            <div className="icon whatsapp"></div>
            <div className="icon github"></div>
            <div className="icon notion"></div>
            <div className="icon slack"></div>
          </div>
          {/* Outer Orbit */}
          <div className="orbit outer-orbit">
            <div className="icon drive"></div>
            <div className="icon facebook"></div>
            <div className="icon instagram"></div>
            <div className="icon twitter"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
