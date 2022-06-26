import React, { useState } from 'react';

function LoginForm() {
    const[myEmail,setMyEmail]=useState("");
    const[myPassword,setMyPassword]=useState("");
return (
    <div className="container">
      <form className="myform login">
        <h5>Log In</h5>
        
          <label>Email:</label>
          <input
            placeholder='Enter Email'
            value={myEmail} onChange={(e)=>setMyEmail(e.target.value)}
      
          />
          <label>Password:</label>
          <input
            placeholder='Enter Password'
            type="password"
            value={myPassword} onChange={(e)=>setMyPassword(e.target.value)}
         
          />
          <button className="btn orange" onClick={handleSubmit}
           >Login</button>
        
      </form>
    </div>
  )}

  export default LoginForm;