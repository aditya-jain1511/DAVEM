import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "../css/events.css";
import UpComingEvents from "../sectors/UpcomingEvents";
import OngoingEvents from "../sectors/OngoingEvents";
import ClosedEvents from "../sectors/ClosedEvents";

const Events = ({ upcomingEvents, ongoingEvents, closedEvents }) => {
  return(<div className="jumbotron">
    <UpComingEvents upcomingEvents={upcomingEvents} /><hr />
    <OngoingEvents ongoingEvents = {ongoingEvents}/> <hr />
    <ClosedEvents closedEvents={closedEvents} />
  </div>)
};

export default Events;
