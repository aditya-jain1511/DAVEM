import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LoginContext } from '../context/LoginContext';
import { UserContext } from '../context/UserContext';
import { baseurl } from '../shared/baseurl';

export default function Login() {
    const {login, setLogin} = useContext(LoginContext);
    const {user, setUser} = useContext(UserContext);
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const [users, setUsers]= useState(null) 

    const  handleSubmit =(e) => {
        e.preventDefault()

        let loggedInUser = validate(userId, password)
        if(loggedInUser){
            setLogin(true);
            setUser(loggedInUser)
        }
    }

    const validate = (userId, password) => {
        for(let user of users){
        if (user.userId === userId && user.password === password){
            return user
        }
    }
    return false
    }



    const fetchUsers = () => {
        fetch(baseurl + "USERS")
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return ( users && 
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
