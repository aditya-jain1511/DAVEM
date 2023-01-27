import React, { useState, useContext } from "react";

import { Button } from 'reactstrap'
import { LoginContext } from "../context/LoginContext";
import { UserContext } from "../context/UserContext";

export default function Volunteer() {
    const {user, setUser} = useContext(UserContext);
    const {login, setLogin} = useContext(LoginContext);

    return (<>
        <div className="row align-items-center">
            <div className="col-6">
                <h5>Volunteer</h5>
            </div>
            <div className="col-6 text-end">
                {
                    (login===true && user.userType !== 'student') ? 
                    <Button color='primary' size='sm'>Add +</Button> 
                    : 
                    null
                }
                
            </div>
        </div>

     </>)
}
