import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LoginContext } from '../context/LoginContext';
import { UserContext } from '../context/UserContext';

export default function Login({ validate }) {
    const {login, setLogin} = useContext(LoginContext);
    const {user, setUser} = useContext(UserContext);
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const  handleSubmit =(e) => {
        e.preventDefault()
        let loggedInUser = validate(userId, password)
        if(loggedInUser){
            setLogin(true);
            setUser(loggedInUser)
        }
    }

    return (
        <>
            <div className='jumbotron'>
            
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 offset-lg-2">
                            <div style={{backgroundColor: "#f5f5f5", padding: "20px 0",textAlign: "center", marginBottom: "20px"}} >Login to access Events and User Profile</div>
                            <h2>Login</h2>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup floating>
                                    <Input id="exampleEmail" name="userId" placeholder="UserId" type="text" onChange={(e)=>setUserId(e.target.value)}/>
                                    <Label for="exampleEmail"> UserId </Label>
                                </FormGroup>
                                {' '}
                                <FormGroup floating>
                                    <Input id="examplePassword" name="password" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                                    <Label for="examplePassword">Password</Label>
                                </FormGroup>
                                {' '}
                                <Button type='submit'>
                                Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


    return (
        <Button color="dark" outline onClick = {()=> setLogin(true)}>Login</Button>
    )
}
