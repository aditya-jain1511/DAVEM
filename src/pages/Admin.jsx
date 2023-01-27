import React, { useState, useContext } from "react";

import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button } from 'reactstrap';
import { LoginContext } from "../context/LoginContext";
import { UserContext } from "../context/UserContext";

import CreateDepartment from "../sectors/CreateDepartment";
import CreateEvent from "../sectors/CreateEvent";
import CreateUser from "../sectors/CreateUser";
import CreateVenue from "../sectors/CreateVenue";

export default function Admin() {
  const {user, setUser} = useContext(UserContext);
  const {login, setLogin} = useContext(LoginContext);

  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };


  return (
    <div className='jumbotron container'>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">CREATE USER</AccordionHeader>
          <AccordionBody accordionId="1">
            <CreateUser/>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">CREATE EVENT</AccordionHeader>
          <AccordionBody accordionId="2">
            <CreateEvent/>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">ADD VENUE</AccordionHeader>
          <AccordionBody accordionId="3">
            <CreateVenue/>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">ADD DEPARTMENTS</AccordionHeader>
          <AccordionBody accordionId="4">
            <CreateDepartment/>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
