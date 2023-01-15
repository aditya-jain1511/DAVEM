import React from "react";
import Home from "./Home";
import Login from "./Login";
import UserProfile from "./UserProfile";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../sectors/Header";
import Footer from "../sectors/Footer";
import { LoginContext } from '../context/LoginContext';
import { useContext } from "react";
import { USERS } from "../shared/users"
import { UserContext } from "../context/UserContext";

function Pages() {
    const {user, setUser} = useContext(UserContext);
    const {login, setLogin} = useContext(LoginContext);

    return (
        <div>
            <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    {
                        (login === true)
                            ? <Route path="/login" element={<Navigate replace to="/home"/>} />
                            : <Route path="/login" element={<Login users = {USERS}/>} />
                    }
                    {
                        (login === false)
                            ? <Route path="/user-profile" element={<Navigate replace to="/home"/>} />
                            : <Route path="/user-profile" element={<UserProfile />} />
                    }
                    <Route path="*" element={<Navigate replace to="/home" />} />
                </Routes>
            <Footer />
        </div>
    );
}

export default Pages;
