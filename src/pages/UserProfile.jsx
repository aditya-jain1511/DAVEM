import React from 'react'
import { useContext } from 'react';
import { Button, Table } from 'reactstrap';
import { LoginContext } from '../context/LoginContext';
import { UserContext } from '../context/UserContext';

export default function UserProfile() {
    const {user, setUser} = useContext(UserContext);
    const {login, setLogin} = useContext(LoginContext);

    return (
        <div className="jumbotron">
            <div className="container">
                <h2>User Details:</h2>
                <div className="row">
                    <div className="col-6">
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">UserId:</div>
                            <div className="col-12 col-md">{user.userId}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">UserName:</div>
                            <div className="col-12 col-md">{user.username}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">Name:</div>
                            <div className="col-12 col-md">{user.name}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">User Type:</div>
                            <div className="col-12 col-md">{user.userType}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">Phone No:</div>
                            <div className="col-12 col-md">{user.phone}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">Email:</div>
                            <div className="col-12 col-md">{user.email}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">Gender:</div>
                            <div className="col-12 col-md">{user.gender}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4">University RollNo:</div>
                            <div className="col-12 col-md">{user.rollno}</div>
                        </div>
                        <hr />
                        <Button color="dark" outline size='sm' onClick = {()=> setLogin(false)}>Logout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
