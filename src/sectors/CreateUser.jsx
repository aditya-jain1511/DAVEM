import React from 'react'
import { useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { baseurl } from '../shared/baseurl';

export default function CreateUser() {

    const [formData, setFormData] = useState({
        name: "",
        userId: "",
        userType: "",
        phone:"",
        email:"",
        username:  "",
        password: "",
        gender:"",
        rollno:"",
        department:""
      });

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        fetch(baseurl + "USERS",{
          method:'POST',
          body: JSON.stringify(formData),
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
        })
      }

    return (
        <Container>
            <Row>
            <Col sm={{ size: 8, offset: 2 }}>
                <h1>Create Users</h1>
                <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input type="text" name="name" id="name" value={formData.name} placeholder="Enter your name" onChange={(e)=>handleChange(e)}/>
                    <Label for="name">Name</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="userId" id="userId" value={formData.userId} placeholder="Enter your User Id" onChange={(e)=>handleChange(e)}/>
                    <Label for="userId">User Id</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="username" id="username" value={formData.username} placeholder="Enter your Username" onChange={(e)=>handleChange(e)}/>
                    <Label for="username">Username</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="select" name="userType" id="userType" value={formData.userType} placeholder="Enter your userType" onChange={(e)=>handleChange(e)}>
                        <option>student</option>
                        <option>teacher</option>
                        <option>admin</option>
                    </Input>
                    <Label for="userType">UserType</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="phone" id="phone" value={formData.phone} placeholder="Enter your phone" onChange={(e)=>handleChange(e)}/>
                    <Label for="phone">Phone</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="email" id="email" value={formData.email} placeholder="Enter your email" onChange={(e)=>handleChange(e)}/>
                    <Label for="email">Email</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="password" id="password" value={formData.password} placeholder="Enter your password" onChange={(e)=>handleChange(e)}/>
                    <Label for="password">Password</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="select" name="gender" id="gender" value={formData.gender} placeholder="Enter your gender" onChange={(e)=>handleChange(e)}>
                        <option>male</option>
                        <option>female</option>
                    </Input>
                    <Label for="gender">Gender</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="text" name="rollno" id="rollno" value={formData.rollno} placeholder="Enter your rollno" onChange={(e)=>handleChange(e)}/>
                    <Label for="rollno">RollNo</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input type="select" name="department" id="department" value={formData.department} placeholder="Enter your department" onChange={(e)=>handleChange(e)}>
                        <option>NA</option>
                        <option>ECE</option>
                        <option>IT</option>
                        <option>CSE</option>
                        <option>SPORTS</option>    
                        <option>TPO</option>    
                        <option>CULTURE</option> 
                    </Input>
                    <Label for="department">Department</Label>
                </FormGroup>
                
                <Button type="submit" color="primary">Submit</Button>
                </Form>
            </Col>
            </Row>
        </Container>
    )
}
