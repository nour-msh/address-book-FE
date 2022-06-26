import React from 'react';

function AddContactForm(){
    return(
        <>
           <div >
            <button className="btn">Add Contact</button>

            <div className="Container">
                <label>Full Name:</label>
                <input className="full_name" placeholder="Enter full name"></input>

                <label>Phone number:</label>
                <input className="phone_number" placeholder="Enter phone number"></input>

                <label>Relationship Status:</label>
                <input className="relationship_status" placeholder="Enter relationship status"></input>

                <label>Email:</label>
                <input className="email" placeholder="Enter email"></input>

                <button className='btn'>Save</button>
            </div>

           
        </div>
   
        </>
    )
}

export default AddContactForm