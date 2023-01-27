import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from "react-router-dom";
import { Badge, Col, Nav, NavItem, Row, TabContent, TabPane } from 'reactstrap';
import "../css/eventdetail.css"
import classnames from 'classnames';
import { baseurl } from "../shared/baseurl"
import Volunteer from "../sectors/Volunteer"

const EventDetails = ({ fetchEvent, incharge }) => {
    let { id } = useParams();

    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    const EventDetail = () => {
        const [event, setEvent] = useState(null)

        const [teacherIncharge, setIncharge] = useState()
        const [teacher, setTeacher] = useState()

        const [venueDetail, setVenueDetail] = useState()
        const [venue, setVenue] = useState()

        const fetchTeacher = (id) => {
            fetch(baseurl + "EVENT_INCHARGE")
                .then(res => res.json())
                .then(user => user.find(e => e.eventId === Number(id)))
                .then(data => {
                    setTeacher(data)
                    fetchInchargeDetail(data.userId)
                })
        }

        const fetchInchargeDetail = async(id) => {
            await fetch(baseurl + "USERS")
                .then(res => res.json())
                .then(user => user.find(e => e.id === Number(id)))
                .then(data => setIncharge(data))
        }

        const fetchVenue = (id) => {
            fetch(baseurl + "EVENT_VENUE")
                .then(res => res.json())
                .then(user => user.find(e => e.eventId === Number(id)))
                .then(data => {
                    console.log(data)
                    setVenue(data)
                    fetchVenueDetail(data.venueId)
                })
        }

        const fetchVenueDetail = async(id) => {
            await fetch(baseurl + "VENUES")
                .then(res => res.json())
                .then(user => user.find(e => e.id === Number(id)))
                .then(data => {
                    console.log(data)
                    setVenueDetail(data)
                })
        }

        const fetchEvent = (id) =>{
            fetch(baseurl + "EVENTS")
            .then(res => res.json())
            .then(event => event.find(e => e.id === Number(id)))
            .then(data => {
                setEvent(data)
                fetchTeacher(data.id)
                fetchVenue(data.id)
            })
        }

        useEffect(() => {
            fetchEvent(id)
        }, [])
        
        return (event && teacher && teacherIncharge && venue && venueDetail&& <>
            <div className='row align-items-center'>
                <div className="col-12">
                    <img src={event.coverImage} alt={event.name} className="event-image" />
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <h2 className="col-12 col-lg-6 event-name">{event.name}</h2>
                <h6 className="col-12 col-lg-6 event-name text-end">{new Date(event.startDate).toDateString()} -- {new Date(event.endDate).toDateString()}</h6>
                <div className="col-12">{event.eventType}</div><br />
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-12">
                    {event.description}
                </div>
            </div>
            <div>
                <Nav tabs style={{ marginBottom: "20px" }}>
                    <NavItem>
                        <NavLink className="nav-link text-center" onClick={() => { setCurrentActiveTab('1'); }} >
                            Teacher Incharge
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link text-center" onClick={() => { setCurrentActiveTab('2'); }} >
                            Volunteer
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link text-center" onClick={() => { setCurrentActiveTab('3'); }} >
                            Competition
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link text-center" onClick={() => { setCurrentActiveTab('4'); }} >
                            Venue
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId="1">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-4">
                                <h4>Teacher Incharge:</h4>
                                Name: <Link to= {`/profile/${teacherIncharge.id}`} ><span>{teacherIncharge.name}</span></Link>
                                <div>Department: {teacherIncharge.department}</div>
                                <div>Phone: {teacherIncharge.phone}</div>
                                <div>Email: {teacherIncharge.email}</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <Volunteer />
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <h5>Sample Tab 3 Content</h5>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-4">
                                <h4>Venue</h4>
                                <div>VenueID: {venueDetail.venueId}</div>
                                <div>Location: {venueDetail.location}</div>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </>)
    }

    return (
        <div className="container jumbotron">
            <EventDetail></EventDetail>
        </div>
    );
}

export default EventDetails;
