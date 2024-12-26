import React from 'react';
import './profile.css';

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  
  
function Developer() {
    return (
        <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>LinkedIn-style Profile Page</title>
          <link rel="stylesheet" href="profile.css" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{ __html: "\n      /* General Styles */\n\n    " }}
          />
          {/* Hamburger Menu */}
          <div className="hamburger" onclick={toggleSidebar}>
            ☰
          </div>
          {/* Sidebar */}
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
          {/* Navigation Bar */}
          <nav className="navbar">
            <img src="logo.png" alt="Logo" className="logo" />
            <input type="text" className="search-bar" placeholder="Search..." />
          </nav>
          <div className="container" style={{ marginTop: "10%" }}>
            {/* Profile Header */}
            <div className="profile-header">
              <div className="profile-picture-container">
                <img
                  src="profile-pic-placeholder.png"
                  alt="Profile Picture"
                  id="profile-picture"
                  className="profile-picture"
                />
                <label htmlFor="upload-profile-pic" className="upload-btn" />
                <input
                  type="file"
                  id="upload-profile-pic"
                  accept="image/*"
                  style={{ display: "none" }}
                  onchange="handleProfilePhotoUpload(event)"
                />
              </div>
              <div className="profile-info" style={{ marginLeft: "10%" }}>
                <h1 id="name">
                  Your Name{" "}
                  <button className="edit-btn" onclick="openEditPopup('name')">
                    ✏️
                  </button>
                </h1>
                <p id="position" style={{ color: "black" }}>
                  Your Position{" "}
                  <button className="edit-btn" onclick="openEditPopup('position')">
                    ✏️
                  </button>
                </p>
                <p id="location" style={{ color: "black" }}>
                  Your Location{" "}
                  <button className="edit-btn" onclick="openEditPopup('location')">
                    ✏️
                  </button>
                </p>
              </div>
            </div>
            {/* Popup for Editing */}
            <div id="edit-popup" className="popup" style={{ display: "none" }}>
              <div className="popup-content">
                <h3>Edit</h3>
                <input type="text" id="edit-input" />
                <div className="popup-buttons">
                  <button onclick="saveEdit">Save</button>
                  <button onclick="closeEditPopup()">Cancel</button>
                </div>
              </div>
            </div>
            {/* Profile Content */}
            <div className="profile-content">
              {/* About Section */}
              <div className="about-section">
                <h2 style={{ color: "black" }}>About</h2>
                <p id="about-text" style={{ color: "black" }}>
                  Write something about yourself here...
                </p>
                <button className="edit-about-btn" onclick="openAboutPopup()">
                  ✏️
                </button>
              </div>
              {/* Popup for Editing About Section */}
              <div id="about-popup" className="popup" style={{ display: "none" }}>
                <div className="popup-content">
                  <h3>Edit About Section</h3>
                  <textarea id="about-edit-text" rows={5} cols={40} defaultValue={""} />
                  <div className="popup-buttons">
                    <button onclick="saveAbout">Save</button>
                    <button onclick="closeAboutPopup()">Cancel</button>
                  </div>
                </div>
              </div>
              {/* Education Section */}
              <div className="section">
                <h2>
                  Education{" "}
                  <span className="edit-icon" onclick="openPopup('education')">
                    ✏️
                  </span>
                </h2>
                <ul id="education-list">
                  <li>
                    Bachelor of Technology in Computer Science - KLE Technological
                    University (2020-2024)
                  </li>
                </ul>
              </div>
              {/* Experience Section */}
              <div className="section">
                <h2>
                  Experience{" "}
                  <span className="edit-icon" onclick="openPopup('experience')">
                    ✏️
                  </span>
                </h2>
                <ul id="experience-list">
                  <li>Software Developer at XYZ (2020-2023)</li>
                </ul>
              </div>
              {/* Projects Section */}
              <div className="section">
                <h2>
                  Projects{" "}
                  <span className="edit-icon" onclick="openPopup('projects')">
                    ✏️
                  </span>
                </h2>
                <ul id="projects-list">
                  <li>Project A: Description</li>
                </ul>
                <input
                  type="file"
                  id="upload-project"
                  accept="application/pdf, image/*"
                  onchange="uploadFile('projects')"
                />
                <label htmlFor="upload-project" className="upload-btn" />
              </div>
              {/* Certificates Section */}
              <div className="section">
                <h2>
                  Certificates{" "}
                  <span className="edit-icon" onclick="openPopup('certificates')">
                    ✏️
                  </span>
                </h2>
                <ul id="certificates-list">
                  <li>Certificate 1: Details</li>
                </ul>
                <input
                  type="file"
                  id="upload-certificate"
                  accept="application/pdf, image/*"
                  onchange="uploadFile('certificates')"
                />
                <label htmlFor="upload-certificate" className="upload-btn" />
              </div>
              {/* Skills Section */}
              <div className="section">
                <h2>
                  Skills{" "}
                  <span className="edit-icon" onclick="openPopup('skills')">
                    ✏️
                  </span>
                </h2>
                <ul id="skills-list">
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Popup Modal */}
          <div id="popup-modal" className="modal">
            <div className="modal-content">
              <span className="close-btn" onclick="closePopup()">
                ×
              </span>
              <h2 id="popup-title">Edit Section</h2>
              {/* Education Fields */}
              <div
                id="education-fields"
                className="popup-field-group"
                style={{ display: "none" }}
              >
                <input
                  type="text"
                  id="edu-degree"
                  placeholder="Degree (e.g., B.Tech)"
                />
                <input type="text" id="edu-institute" placeholder="Institute Name" />
                <input
                  type="text"
                  id="edu-duration"
                  placeholder="Duration (e.g., 2020-2024)"
                />
              </div>
              {/* General Input */}
              <textarea id="popup-input" defaultValue={""} />
              <button className="save-btn" onclick="savePopupChanges">
                Save
              </button>
            </div>
          </div>
        </>

    );
}

export default Developer;
