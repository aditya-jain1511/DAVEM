import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import "../css/events.css"

const UpComingEvents = ({upcomingEvents}) => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 3;

    useEffect(() => {
        async function fetchData() {
            const events = await upcomingEvents();
            setEvents(events);
            console.log(events)
        }
        fetchData();
    }, [upcomingEvents]);

    let filteredEvents = events;

    // Logic for displaying current events
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const eventList = currentEvents.map(event => {
      const date = new Date(event.startDate).toDateString()
      const description = event.description.substring(0,50) + "..."
      return (
        <div key={event.id} className='col-12 col-lg-4 px-4'>
          <Card>
            <img alt={event.eventId} src={event.coverImage} className="card-image"/>
            <CardBody>
              <CardTitle tag="h5">{event.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {event.eventType} - {date}
              </CardSubtitle>
              <CardText>
                {description}
              </CardText>
              <Link to={`/events/${event.id}`}>
                <Button color='primary'>View Details</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredEvents.length / eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li key={number} className={currentPage === number ? 'active' : ''}>
                <button onClick={() => setCurrentPage(number)}>{number}</button>
            </li>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <h3>Upcoming Events:</h3>
            </div>
            <div className="row">
                {eventList}
            </div>
            <div className="pagination">
                {renderPageNumbers}
            </div>
        </div>)}


export default UpComingEvents