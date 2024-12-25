import React, { useState, useEffect } from "react";
import './home.css';

// Define the reviews and stories
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// Define the initial and new set of stories
const initialStories = [
  {
    img: 'https://via.placeholder.com/300x150',
    text: '"My decision was correct! InstantStore provides the perfect web platform."',
    name: 'Barbara Young',
    link: 'crazy4coupons.com',
  },
  {
    img: 'https://via.placeholder.com/300x150',
    text: '"We have successfully sold over $35 million worth of products."',
    name: 'Preston Humphries',
    link: 'cvcoffee.com',
  },
  {
    img: 'https://via.placeholder.com/300x150',
    text: '"Not just a product or service, InstantStore is a business partnership."',
    name: 'Maura Celik',
    link: 'epartyzone.com',
  },
];

const newStories = [
  {
    img: 'https://via.placeholder.com/300x150',
    text: '"InstantStore helped us expand globally with seamless integration."',
    name: 'Rajesh Kumar',
    link: 'globalmart.com',
  },
  {
    img: 'https://via.placeholder.com/300x150',
    text: '"Their support team helped us achieve our dream of running an online store."',
    name: 'Emily Brown',
    link: 'emilyskitchen.com',
  },
  {
    img: 'https://via.placeholder.com/300x150',
    text: '"Thanks to InstantStore, we grew our local market into a global business."',
    name: 'Maria Fernandez',
    link: 'worldtrade.com',
  },
];

// Main Component
function Developer() {
  const [stories, setStories] = useState(initialStories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderReviews = (reviews) => {
    return reviews.map((review, index) => (
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
    ));
  };

  const renderStories = (stories) => {
    return stories.map((story, index) => (
      <div className="story-card" key={index}>
        <img src={story.img} alt="Story Image" className="story-image" />
        <p className="story-text">{story.text}</p>
        <p className="story-name">{story.name}</p>
        <a href={story.link} className="story-link">{story.link}</a>
      </div>
    ));
  };

  // Handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav ul li a");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Platform Page</title>
      <link rel="stylesheet" href="home.css" />
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
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
        <a href="#home"><i className="fa fa-fw fa-home" /> <span>Home</span></a>
        <a href="#about-section"><i className="fa fa-fw fa-info-circle" /> <span>About</span></a>
        <a href="#stories-section"><i className="fa fa-fw fa-book" /> <span>Stories</span></a>
        <a href="job_internship.html"><i className="fa fa-fw fa-briefcase" /> <span>Jobs</span></a>
        <a href="profile.html"><i className="fa fa-fw fa-user-tie" /> <span>Profile</span></a>
        <a href="network.html"><i className="fa fa-fw fa-user-plus" /> <span>Networks</span></a>
        <a href="events.html"><i className="fa fa-fw fa-book-open" /> <span>Events</span></a>
        <a href="developer.html"><i className="fa fa-fw fa-users" /> <span>Developers</span></a>
      </div>
      <nav className="navbar">
        <img src="logo.png" alt="Logo" className="logo" />
        <input type="text" className="search-bar" placeholder="Search..." />
      </nav>
      <section id="welcome-section" className="animate-section">
        <div className="welcome-content">
          <h1 className="typing-animation">𝐆𝐲𝐚𝐧 𝐒𝐚𝐧𝐠𝐚𝐦 𝐌𝐚𝐧𝐜𝐡</h1>
          <p>Connecting Students, Alumni, and Scholars for a brighter future.</p>
        </div>
      </section>
      <section id="about-section" className="animate-section">
        <div className="about-content">
          <h2 className="about-heading">About Us</h2>
          <p className="about-description">
            Our platform bridges the gap between students and alumni, creating opportunities for collaboration, mentorship, and growth.
          </p>
        </div>
      </section>
      <section id="stories-section">
        <h2 className="stories-heading">✨ Inspiring Stories ✨</h2>
        <div className="story-container">
          {renderStories(stories)}
        </div>
        <button onClick={() => setStories(newStories)} id="see-more-btn">See More</button>
      </section>
      <footer className="college-footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About KLE Technological University</h3>
            <p>KLE Technological University stands for academic excellence, innovative research, and a commitment to shaping future leaders.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Developer;
