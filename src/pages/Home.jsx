import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import '../css/home.css';

const Home = ({upcomingEvents}) => {

  const events = upcomingEvents().slice(0,3)

  const upcomEvents = events.map((event) => {
    const date = new Date(event.startDate).toDateString()
    return (
      // <div key={event.id} className="event-preview">
      //   <img src={event.coverImage} alt="Event 1" className="event-image" />
      //   <div className="event-info">
      //     <h3 className="event-name">{event.name}</h3>
      //     <p className="event-date">{date}</p>
      //     <Link to="/events/0" className="event-link">View Details</Link>
      //   </div>
      // </div>
      <div className='col-12 col-lg-4 px-4'>

        <Card>
          <img alt={event.eventId} src={event.coverImage} />
          <CardBody>
            <CardTitle tag="h5">{event.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {event.eventType}
            </CardSubtitle>
            <CardText>
              {event.description}
            </CardText>
            <Link to={`/events/${event.id}`}>
              <Button>View Details</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  })

  return (
    <div className="jumbotron homepage-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the DAVIET Event Management System</h1>
        <p className="hero-subtitle">Easily create and manage events for administration and easy participation for the students</p>
        <Link to="/events" className="cta-button">Events</Link>
      </div>
      <div className="event-preview-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <h3 className="col-12 col-lg-3">Upcoming Events</h3>
            <Link className="col-12 col-lg-2 text-end more-event" to="/events">
              <h6>More Events →</h6>
            </Link>
          </div>
          <div className='row align-items-center justify-content-between'>
            {upcomEvents}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;