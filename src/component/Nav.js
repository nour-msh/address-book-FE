import React, { useState } from "react";
import SignupForm from "./SignupForm";

function Nav(){

    const [openForm, setSignupForm] = useState(false);

    return(
        <>
    <nav className="nav-bar">

        <div>
            <button className="btn orange"
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
    <div>{openForm && <SignupForm/>}</div>
        </>
    )
}

export default Nav;
