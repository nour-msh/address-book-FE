import React from "react";

function Nav(){
    return(

        <div>
            <button className="btn orange"
            onClick={() => {
                setLoginForm(!showForm);
            }}
            >
            Login
            </button>
            <button className="btn yellow" onClick={() => {
                setSignupForm(!openForm);
            }}
            >
            Sign Up</button>
        </div>
    )
}
