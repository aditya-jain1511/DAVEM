import React from "react";
import { useContext } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import UserProfile from "./UserProfile";
import Admin from "./Admin";
import Events from "./Events";
import EventDetails from "./EventDetail";

import Header from "../sectors/Header";
import Footer from "../sectors/Footer";

import {validate, upcomingEvents, fetchEvent, incharge, ongoingEvents, closedEvents} from "../shared/actions"

import { LoginContext } from '../context/LoginContext';
import { UserContext } from "../context/UserContext";

function Pages() {
    const {user, setUser} = useContext(UserContext);
    const {login, setLogin} = useContext(LoginContext);

    return (
        <div>
            <Header />
                <Routes>
                    <Route path="/home" element={<Home upcomingEvents = {upcomingEvents}/>} />
                    <Route path="/profile/:id" element={<Home upcomingEvents = {upcomingEvents}/>} />
                    <Route path="/contacts" element={<Contact />} />
                    {
                        (login === true)
                            ? (<>
                                <Route path="/user-profile" element={<UserProfile />} />
                                <Route path="/events" element={<Events upcomingEvents = {upcomingEvents} ongoingEvents={ongoingEvents} closedEvents={closedEvents} />} />
                                <Route path="/events/:id" element={<EventDetails fetchEvent = {fetchEvent} incharge = {incharge}/>} />
                            </>)
                            : (<>
                                <Route path="/login" element={<Login validate={validate} />} />
                                <Route path="/events/:id" element={<Login validate={validate} />} />
                                <Route path="/events" element={<Login validate={validate} />} />
                            </>)
                    }
                    {
                        (login===true && user.userType !== 'student')
                        ? (<>
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/create-event" element={<Admin />} />
                            <Route path="/create-comp" element={<Admin />} />
                            <Route path="/create-user" element={<Admin />} />
                            <Route path="/generate-report" element={<Admin />} />
                        </>)
                        : null
                    }
                    <Route path="*" element={<Navigate replace to="/home" />} />
                </Routes>
            <Footer />
        </div>
    );
}

export default Pages;
