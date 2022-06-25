import React, { useState } from 'react';

function SignupForm(){


    return (
        <div className="container">
          <div  className="myform">
          <h5>Sign Up</h5>
            

          <label>Name:</label>
              <input
                placeholder='Enter Name'
                id="name"
          
              />
              <label>Email:</label>
              <input
                placeholder='Enter Email'
                id="email"
          
              />
              <label>Password:</label>
              <input
                placeholder='Enter Password'
                id='password'
                type="password"
             
              />
              <button className="btn orange"
               >Sign Up</button>
          </div>
        </div>
      )};
  
  export default SignupForm