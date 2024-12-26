import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]); // Start with an empty array
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch jobs from the backend API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs');
        if (response.ok) {
          const data = await response.json();
          setJobs(data); // Update the state with the fetched jobs
        } else {
          console.error('Failed to fetch jobs');
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Sort jobs by date posted
  const sortJobs = () => {
    const sortedJobs = [...jobs].sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
    setJobs(sortedJobs);
  };

  const addJob = async () => {
    const jobTitle = document.getElementById('job-title').value;
    const companyName = document.getElementById('company-name').value;
    const mode = document.getElementById('job-mode').value;
    const description = document.getElementById('job-description').value;
    const location = document.getElementById('job-location').value;
    const postedBy = document.getElementById('job-posted-by').value;
    const datePosted = document.getElementById('job-date-posted').value;

    if (jobTitle && companyName && mode && description && location && postedBy && datePosted) {
      const newJob = {
        jobTitle,
        companyName,
        mode,
        description,
        location,
        postedBy,
        datePosted,
        image: 'https://via.placeholder.com/100',
      };

      try {
        const response = await fetch('http://localhost:5000/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newJob),
        });

        if (response.ok) {
          const result = await response.json();
          setJobs((prevJobs) => [...prevJobs, result.job]);
          document.getElementById('form-container').style.display = 'none';
        } else {
          alert('Failed to add job');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the job');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Job Page</title>
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
        <Link to="/review">
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
      </div>
      <nav className="navbar">
        <img src="./assets/logo.png" alt="Logo" className="logo" />
      </nav>
      <div className="jobs">
        <div className="search-bar">
          <input
            type="text"
            id="search-input"
            placeholder="Search for Jobs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={sortJobs}>Sort by Date</button>
        </div>

        <div id="jobs-container">
          {filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-details">
                <h2>{job.jobTitle}</h2>
                <p><strong>Company:</strong> {job.companyName}</p>
                <p><strong>Mode:</strong> {job.mode}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Posted By:</strong> {job.postedBy}</p>
                <p><strong>Date Posted:</strong> {job.datePosted}</p>
                <p>{job.description}</p>
              </div>
              <img src={job.image} alt="Job" />
            </div>
          ))}
        </div>

        <button
          className="add-job"
          onClick={() => (document.getElementById('form-container').style.display = 'flex')}
        >
          Add Job
        </button>

        <div className="form-container" id="form-container" style={{ display: 'none' }}>
          <input type="text" id="job-title" placeholder="Job Title" />
          <input type="text" id="company-name" placeholder="Company Name" />
          <input type="text" id="job-mode" placeholder="Online / Offline" />
          <input type="text" id="job-location" placeholder="Location" />
          <input type="text" id="job-posted-by" placeholder="Posted By" />
          <input type="date" id="job-date-posted" placeholder="Date Posted (YYYY-MM-DD)" />
          <textarea id="job-description" placeholder="Job Description"></textarea>
          <button onClick={addJob}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Jobs;
