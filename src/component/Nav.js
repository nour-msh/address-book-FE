import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Nav(){

    const [openForm, setSignupForm] = useState(false);
    const [showForm, setLoginForm] = useState(false);

    return(
        <>
    <nav className="nav-bar">

        <div>
            <button className="btn orange"
            onClick={() => {
                setLoginForm(!showForm);
            }}
            >
            Login
            </button>


            <button className="btn yellow" 
            onClick={() => {
                setSignupForm(!openForm);
            }}
            >
            Sign Up</button>
        </div>
    </nav>
    <div>{showForm && <LoginForm/>}</div>
    <div>{openForm && <SignupForm/>}</div>
        </>
    )
}

export default Nav;
