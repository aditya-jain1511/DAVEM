import React, { useState } from 'react';
import { useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { UserContext } from '../context/UserContext';
import { baseurl } from '../shared/baseurl';

const Contact = () => {
    const {user, setUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
      name: user.name ?? "",
      userId: user.userId ?? "",
      username: user.username ?? "",
      email: user.email ?? "",
      message: ''
    });
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(baseurl + "FEEDBACK",{
        method:'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      })
      // handle form submission here
    }

  
    return (
      <Container className="jumbotron">
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
              <FormGroup floating>
                <Input type="text" name="name" id="name" value={formData.name} placeholder="Enter your name" onChange={(e)=>handleChange(e)}/>
                <Label for="name">Name</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="email" name="email" id="email" value={formData.email} placeholder="Enter your email" onChange={(e)=>handleChange(e)}/>
                <Label for="email">Email</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="text" name="userId" id="userId" value={formData.userId} placeholder="Enter your User Id" onChange={(e)=>handleChange(e)}/>
                <Label for="userId">User Id</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="text" name="username" id="username" value={formData.username} placeholder="Enter your Username" onChange={(e)=>handleChange(e)}/>
                <Label for="username">Username</Label>
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="message" id="message" placeholder="Enter your message" rows="10" onChange={(e)=>handleChange(e)}/>
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  
}

export default Contact;
