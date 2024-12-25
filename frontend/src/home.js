import React from 'react';
import './home.css';
function Home() {
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

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    function renderReviews(reviews, containerId) {
        const container = document.getElementById(containerId);
        reviews.forEach((review) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                        <div class="card-header">
                        <img src="${review.img}" alt="${review.name}">
                        <div>
                        <p class="card-name">${review.name}</p>
                        <p class="card-username">${review.username}</p>
                        </div>
                        </div>
                        <p class="card-body">${review.body}</p>
                        `;
            container.appendChild(card);
        });
    }
    renderReviews(firstRow, "marquee1");
    renderReviews(secondRow, "marquee2");
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }

    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav ul li a");

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
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
            { threshold: 0.4 } // Trigger when 20% of the section is visible
        );

        // Select the sections to observe
        const sections = document.querySelectorAll(".animate-section");
        sections.forEach((section) => observer.observe(section));
    });

    document.addEventListener("DOMContentLoaded", () => {
        const storyBoxes = document.querySelectorAll(".story-box");
        const storiesHeading = document.querySelector(".stories-heading");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        storiesHeading.classList.remove("fade-in-down");
                        void storiesHeading.offsetWidth; // Trigger reflow
                        storiesHeading.classList.add("fade-in-down");
                        storyBoxes.forEach((box) => {
                            box.style.opacity = "0";
                            box.style.transform = "translateY(20px)";
                            void box.offsetWidth; // Trigger reflow
                            box.style.animation = "";
                            setTimeout(() => {
                                box.style.animation = `fade-up 1s ease-in-out forwards ${box.dataset.delay || 0}s`;
                            }, 0);
                        });
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        observer.observe(document.querySelector("#stories-section"));
    });

    const carousel = document.getElementById("storyCarousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + 5) % 5; // Loop back to the last story
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % 5; // Loop back to the first story
        updateCarousel();
    });

    const storiesContainer = document.getElementById('stories-container');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const backBtn = document.getElementById('back-btn');

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

    function renderStories(stories) {
        storiesContainer.innerHTML = '';
        stories.forEach(story => {
            const storyCard = document.createElement('div');
            storyCard.classList.add('story-card');
            storyCard.innerHTML = `
        <img src="${story.img}" alt="Story Image" class="story-image">
        <p class="story-text">${story.text}</p>
        <p class="story-name">${story.name}</p>
        <a href="#" class="story-link">${story.link}</a>
      `;
            storiesContainer.appendChild(storyCard);
        });
    }

    seeMoreBtn.addEventListener('click', () => {
        renderStories(newStories);
        seeMoreBtn.style.display = 'none';
        backBtn.style.display = 'inline-block';
    });

    backBtn.addEventListener('click', () => {
        renderStories(initialStories);
        seeMoreBtn.style.display = 'inline-block';
        backBtn.style.display = 'none';
    });

renderStories(initialStories);
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
          <div className="hamburger" onclick={toggleSidebar}>
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
            <a href="job_internship.html">
              <i className="fa fa-fw fa-briefcase" /> <span>Jobs</span>
            </a>
            <a href="profile.html">
              <i className="fa fa-fw fa-user-tie" /> <span>Profile</span>
            </a>
            <a href="network.html">
              <i className="fa fa-fw fa-user-plus" /> <span>Networks</span>
            </a>
            <a href="events.html">
              <i className="fa fa-fw fa-book-open" /> <span>Events</span>
            </a>
            <a href="developer.html">
              <i className="fa fa-fw fa-users" /> <span>Developers</span>
            </a>
          </div>
          <nav className="navbar">
            <img src="logo.png" alt="Logo" className="logo" />
            <input type="text" className="search-bar" placeholder="Search..." />
          </nav>
          <section id="welcome-section" className="animate-section">
            <div className="welcome-content">
              <h1 className="typing-animation">𝐆𝐲𝐚𝐧 𝐒𝐚𝐧𝐠𝐚𝐦 𝐌𝐚𝐧𝐜𝐡</h1>
              <p>Connecting Students, Alumni, and Scholars for a brighter future.</p>
              <div className="image-container"></div>
            </div>
            <div className="element" />
          </section>
          <section id="about-section" className="animate-section">
            <div className="about-content">
              <h2 className="about-heading" style={{ left: "10%" }}>
                About Us
              </h2>
              <p className="about-description">
                Our platform bridges the gap between students and alumni, <br />{" "}
                creating opportunities for collaboration, mentorship, and growth.
              </p>
              <div className="containers">
                <div className="center-title">Circles</div>
                <div className="orbit inner-orbit">
                  <div className="icon whatsapp" />
                  <div className="icon github" />
                  <div className="icon notion" />
                  <div className="icon slack" />
                </div>
                <div className="orbit outer-orbit">
                  <div className="icon drive" />
                  <div className="icon facebook" />
                  <div className="icon instagram" />
                  <div className="icon twitter" />
                </div>
              </div>
            </div>
          </section>
          <section id="stories-section">
            <h2 className="stories-heading hyper-text">✨ Inspiring Stories ✨</h2>
            <div className="story-container">
              <div className="container">
                <div className="marquee" id="marquee1"></div>
                <div className="marquee reverse" id="marquee2"></div>
                <div className="gradient gradient-left" />
                <div className="gradient gradient-right" />
              </div>
              <div className="elements" />
            </div>
          </section>
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

export default Home;
