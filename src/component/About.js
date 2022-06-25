import React from "react";
import logo from "../assets/logo.jpg";

function About(){
    return(
        <>
        <div className="aboutContainer">
        <h1>Welcome to Address Book</h1>
        <img src={logo} alt="" />
        </div>
        </>
    )
}

export default About;
