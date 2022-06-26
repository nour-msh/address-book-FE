import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [myName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const data = {
      name: myName,
      email: email,
      password: password,
    };
    e.preventDefault();
    axios({
      method: "post",
      data,
      url: "http://localhost:3100/api/user/register",
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
          id="name"
          value={myName}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          placeholder="Enter Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          placeholder="Enter Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn orange" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
