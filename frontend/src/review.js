import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./review.css";

const Review = () => {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
  const [sidebarContent, setSidebarContent] = useState("");
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "This platform helped me reconnect with my network and find talented interns for my company.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "The job postings and alumni recommendations have been incredibly helpful for my career planning.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "Staying connected with my alma mater through event updates and mentoring opportunities is a fulfilling experience.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "This platform helped me land my first internship, with valuable insights from the recommendations section.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Sophia",
      username: "@sophia",
      body: "A secure and professional space to share knowledge and support the student community—highly recommend it!",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "Priya",
      username: "@Priya",
      body: "This platform is fantastic! I attended a networking event I found here, and it connected me with amazing alumni in my field of interest.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  // Split reviews into two rows
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  // Load sidebar content dynamically
  useEffect(() => {
    fetch("sidebar_nav.html")
      .then((response) => response.text())
      .then((data) => setSidebarContent(data))
      .catch((error) => console.error("Error loading sidebar:", error));
  }, []);

  // Scroll event handler for highlighting active sections
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
                    <i className="fa fa-fw fa-book" /> <span>Reviews</span>
                </Link>
                <Link to="/jobs">
                    <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
                </Link>
                <Link to="/profile">
                    <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
                </Link>
                <Link to="/forum">
                    <i className="fa fa-fw fa-user-plus" /> <span>Forum</span>
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

      {/* Review Section */}
      <section id="stories-section">
        <h2 className="stories-heading hyper-text">✨ REVIEWS ✨</h2>
        <div className="story-container">
          <div className="container">
            <div className="marquee" id="marquee1">
              {firstRow.map((review, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <img src={review.img} alt={review.name} />
                    <div>
                      <p className="card-name">{review.name}</p>
                      <p className="card-username">{review.username}</p>
                    </div>
                  </div>
                  <p className="card-body">{review.body}</p>
                </div>
              ))}
            </div>
            <div className="marquee reverse" id="marquee2">
              {secondRow.map((review, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <img src={review.img} alt={review.name} />
                    <div>
                      <p className="card-name">{review.name}</p>
                      <p className="card-username">{review.username}</p>
                    </div>
                  </div>
                  <p className="card-body">{review.body}</p>
                </div>
              ))}
            </div>
            <div className="gradient gradient-left"></div>
            <div className="gradient gradient-right"></div>
          </div>
          <div className="elements"></div>
        </div>
      </section>
    </div>
  );
};

export default Review;
