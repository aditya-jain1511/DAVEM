import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import '../css/header.css'
import { Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import { LoginContext } from "../context/LoginContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const {login, setLogin} = useContext(LoginContext);

  const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
  };

  const ComputedAvatar = () => {
    let userName = user.name.trim()
    let avatar = ""
    if(!userName){
        return (<span>{avatar}</span>)
    }
    let splitted = userName.split(" ")
    if(splitted[0]!== undefined && splitted[1]!== undefined){
        avatar = splitted[0][0].toUpperCase() + splitted[1][0].toUpperCase()
        return (<span className="compAva">{avatar}</span>)
    }
    if(splitted[0]!== undefined){
        avatar = splitted[0][0].toUpperCase()
        return (<span className="compAva">{avatar}</span>)
    }
  }

  return (
    <div className="container-fluid align-items-center">
        <div className="row align-items-center">
            <div className='col-12'>
                <Navbar expand="md" light className="nav-bar">
                    <div className="navigation-top">
                        <img src="/assets/images/daviet-logo.png" alt="Daviet Logo" className="logo-img"/>
                        <Link to={"/home"} className="logo">DAVEM</Link>
                    </div>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <Link className='nav-link' to="/home">Home</Link>
                            </NavItem>
                            <NavItem>
                                {
                                    (login===true && user.userType !== 'student') ? 
                                        <Link className='nav-link' to="/admin"> Admin </Link> 
                                        : 
                                        null
                                }
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to="/events">Events</Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to="/contacts">Contacts</Link>
                            </NavItem>
                            <NavItem>
                                {
                                    (login===true) ? 
                                        <Link className='nav-link' to="/user-profile"> <ComputedAvatar className="compAva" /> {user.name} </Link> 
                                        : 
                                        <Link to='/login' className='nav-link'>Login</Link>
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    </div>
  );
}

export default Header;
