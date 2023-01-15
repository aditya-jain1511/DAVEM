import React from 'react'
import { useContext } from 'react';
import { Button } from 'reactstrap';
import { LoginContext } from '../context/LoginContext';

export default function UserProfile() {
    const {login, setLogin} = useContext(LoginContext);


    return (
        <Button color="dark" outline onClick = {()=> setLogin(false)}>Logout</Button>
    )
}
