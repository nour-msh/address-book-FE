import { useState } from "react";
import axios from "axios";


function AddContactForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleSubmit = (e) => {
    const data = {
      full_name: fullName,
      phone_number: phoneNumber,
      relationship_status: relationship,
      email: contactEmail,

    };
    e.preventDefault();
    axios({
      method: "post",
      data,
      url: "http://localhost:5000/api/contact",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div className="Container">
          <label>Full Name:</label>
          <input className="full_name" placeholder="Enter full name" 
           value={fullName}
           onChange={(e) => setFullName(e.target.value)}
           ></input>

          <label>Phone number:</label>
          <input
            className="phone_number"
            placeholder="Enter phone number"
            value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>

          <label>Relationship Status:</label>
          <input
            className="relationship_status"
            placeholder="Enter relationship status"
            value={relationship}
           onChange={(e) => setRelationship(e.target.value)}
          ></input>

          <label>Email:</label>
          <input className="email" placeholder="Enter email"
           value={contactEmail}
           onChange={(e) => setContactEmail(e.target.value)}
           ></input>

          <button className="btn" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </>
  );
}

export default AddContactForm;
