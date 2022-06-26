import React, { useState } from "react";
import axios from "axios";

function SignupForm() {


  const [UserName, setName] = useState("");
  const [UserEmail, setEmail] = useState("");
  const [UserPassword, setPassword] = useState("");

  const signup = (e) => {
    const data = {
      name: UserName,
      email: UserEmail,
      password: UserPassword,
    };
    e.preventDefault();
    axios({
      method: "post",
      data,
      url: "http://localhost:5000/api/user/register",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="myform">
        <h5>Sign Up</h5>

        <label>Name:</label>
        <input
          placeholder="Enter Name"
          className="name"
          value={UserName}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          placeholder="Enter Email"
          className="email"
          value={UserEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          placeholder="Enter Password"
          className="password"
          type="password"
          value={UserPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn orange" onClick={signup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
