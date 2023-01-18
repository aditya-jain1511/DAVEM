import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {

  // const upcomEvents = () =>{
  //   console.log(1)
  // }

  return (
    <div className="jumbotron homepage-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the DAVIET Event Management System</h1>
        <p className="hero-subtitle">Easily create and manage events for administration and easy participation for the students</p>
        <Link to="/events" className="cta-button">Events</Link>
      </div>
      <div className="event-preview-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-preview-container">
          
          <div className="event-preview">
            <img src="assets/images/event0.jpg" alt="Event 1" className="event-image" />
            <div className="event-info">
              <h3 className="event-name">Event 1</h3>
              <p className="event-date">Date: Jan 1, 2022</p>
              <Link to="/events/0" className="event-link">View Details</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Home;