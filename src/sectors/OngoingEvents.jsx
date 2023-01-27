import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import "../css/events.css"
import { baseurl } from '../shared/baseurl';

const OngoingEvents = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 3;

    const onGoing = () => {
      fetch (baseurl + "EVENTS")
      .then(res => res.json())
      .then(data => {

        let events = []

        const today = new Date()
        const tTime = today.getTime()

        for (let event of data){
            let sDate = new Date(event.startDate)
            let eDate = new Date(event.endDate)
            if (sDate.getTime() <= tTime && eDate.getTime() >= tTime){
                events.push(event)
            }
        }

        events.sort((a,b) => {
          let aStart = new Date(a.startDate).getTime()
          let bStart = new Date(b.startDate).getTime()
          return aStart-bStart
        })
        setEvents(events)
      })
    }

    useEffect(() => {
      onGoing()
    }, [])

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

    return (events &&
        <div className="container">
            <div className="row">
                <h3>Ongoing Events:</h3>
            </div>
            <div className="row">
                {eventList}
            </div>
            <div className="pagination">
                {renderPageNumbers}
            </div>
        </div>)}


export default OngoingEvents