import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

function Events() {
  const [events, setEvents] = useState([]); // Start with an empty array
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch events from the backend API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data); // Update the state with the fetched events
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Sort events by date
  const sortEvents = () => {
    const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    setEvents(sortedEvents);
  };

  const addEvent = async () => {
    const name = document.getElementById('event-name').value;
    const date = document.getElementById('event-date').value;
    const mode = document.getElementById('event-mode').value;
    const link = document.getElementById('registration-link').value;
    const description = document.getElementById('event-description').value;

    if (name && date && mode && link && description) {
      const newEvent = {
        name,
        date,
        mode,
        link,
        description,
        image: 'https://via.placeholder.com/100',
      };

      try {
        const response = await fetch('http://localhost:5000/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        });

        if (response.ok) {
          const result = await response.json();
          setEvents((prevEvents) => [...prevEvents, result.event]);
          document.getElementById('form-container').style.display = 'none';
        } else {
          alert('Failed to add event');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the event');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
    <div className="events">
      <div className="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Search for upcoming Events in KLE Tech"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={sortEvents}>Sort by date</button>
      </div>

      <div id="events-container">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-details">
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.mode}</p>
              <p>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  Registration Link
                </a>
              </p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="add-event" onClick={() => (document.getElementById('form-container').style.display = 'flex')}>
        Add Event
      </button>

      <div className="form-container" id="form-container" style={{ display: 'none' }}>
        <input type="text" id="event-name" placeholder="Event Name" />
        <input type="date" id="event-date" placeholder="Event Date (YYYY-MM-DD)" />
        <input type="text" id="event-mode" placeholder="Offline / Online" />
        <input type="text" id="registration-link" placeholder="Registration Link" />
        <textarea id="event-description" placeholder="Event Description"></textarea>
        <button onClick={addEvent}>Submit</button>
      </div>
    </div>
      </>
  );
}

export default Events;
