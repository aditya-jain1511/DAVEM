import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { baseurl } from '../shared/baseurl';

export default function CreateEvent() {
    const [inchargeList, setList] = useState([]);
    const [venueList, setVenueList] = useState([]);

    const [venueData, setVenueData] = useState({
        venue: ""
      });

    const [formData, setFormData] = useState({
        eventId: "",
        incharge: "",
        eventType: "",
        startDate:"",
        endDate:"",
        name:  "",
        coverImage: "/assets/images/event0.jpg",
        description:"",
      });

      const fetchIncharge = () =>{
        fetch(baseurl + "USERS")
        .then(res => res.json())
        .then(data => {
            let incharge = []
            for (let user of data){
                if(user.userType == "teacher"){
                    incharge.push(user)
                }
            }
            setList(incharge)
        })
    }
    const fetchVenue = () =>{
        fetch(baseurl + "VENUES")
        .then(res => res.json())
        .then(data => setVenueList(data))
    }

    useEffect(() => {
        fetchIncharge()
        fetchVenue()
    }, [])
    

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }
      const handleVenue = (event) => {
        setVenueData({
          ...venueData,
          [event.target.name]: event.target.value
        });
      }


      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        console.log(venueData)
        fetch(baseurl + "EVENTS",{
          method:'POST',
          body: JSON.stringify(formData),
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
        })
        .then(()=>{
            fetch(baseurl + "EVENTS")
            .then(res=> res.json())
            .then(eve => eve.length)
            .then(length => {
                let incharge = [inchargeList.find(il => il.name == formData.incharge)]
                let e_i = {
                    eventId: length-1,
                    userId: incharge[0].id
                }
                console.log(e_i)
                fetch(baseurl + "EVENT_INCHARGE",{
                    method:'POST',
                    body: JSON.stringify(e_i),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'same-origin',
                });
                let venue = [venueList.find(vl => vl.location == venueData.venue)]
                let e_v = {
                    eventId: length-1,
                    venueId: venue[0].id
                }
                console.log(e_v)
                fetch(baseurl + "EVENT_VENUE",{
                    method:'POST',
                    body: JSON.stringify(e_v),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'same-origin',
                });
            })
        })
      }

    return (
        <Container>
            <Row>
            <Col sm={{ size: 8, offset: 2 }}>
                <h1>Create Events</h1>
                <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input type="text" name="name" id="name" value={formData.name} placeholder="Enter your name" onChange={(e)=>handleChange(e)}/>
                    <Label for="name">Name</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="eventId" id="eventId" value={formData.eventId} placeholder="Enter your Event Id" onChange={(e)=>handleChange(e)}/>
                    <Label for="eventId">Event Id</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="select" name="eventType" id="eventType" value={formData.eventType} placeholder="Enter your eventType" onChange={(e)=>handleChange(e)}>
                        <option>Culture</option>
                        <option>Fest</option>
                        <option>Seminar</option>
                        <option>Sports</option>
                        <option>Freshers</option>
                    </Input>
                    <Label for="eventType">eventType</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="date" name="startDate" id="startDate" value={formData.startDate} placeholder="Enter your startDate" onChange={(e)=>handleChange(e)}/>
                    <Label for="startDate">startDate</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="date" name="endDate" id="endDate" value={formData.endDate} placeholder="Enter your endDate" onChange={(e)=>handleChange(e)}/>
                    <Label for="endDate">endDate</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="description" id="description" value={formData.description} placeholder="Enter your description" onChange={(e)=>handleChange(e)}/>
                    <Label for="description">description</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="select" name="incharge" id="incharge" value={formData.incharge} placeholder="Enter your incharge" onChange={(e)=>handleChange(e)}>
                        {
                            inchargeList.map(il => {
                                return(<>
                                    <option>{il.name}</option>
                                </>)
                            })
                        }
                    </Input>
                    <Label for="incharge">Incharge</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="select" name="venue" id="venue" value={venueData.venue} placeholder="Enter your Venue" onChange={(e)=>handleVenue(e)}>
                        {
                            venueList.map(il => {
                                return(<>
                                    <option>{il.location}</option>
                                </>)
                            })
                        }
                    </Input>
                    <Label for="venue">Venue</Label>
                </FormGroup>
                
                <Button type="submit" color="primary">Submit</Button>
                </Form>
            </Col>
            </Row>
        </Container>
    )
}
