import React, { useState } from "react";
import axios from "axios";


function LoginForm() {
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const logIn = (e) => {
    const data = {
      email: myEmail,
      password: myPassword,
    };
    e.preventDefault();
    axios({
      method: "post",
      data,
      url: "http://localhost:5000/api/user/login",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <form className="myform login">
        <h5>Log In</h5>

        <label>Email:</label>
        <input
          placeholder="Enter Email"
          value={myEmail}
          onChange={(e) => setMyEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          placeholder="Enter Password"
          type="password"
          value={myPassword}
          onChange={(e) => setMyPassword(e.target.value)}
        />
        <button className="btn orange" onClick={logIn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
