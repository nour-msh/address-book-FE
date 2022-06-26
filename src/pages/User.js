import AddContactForm from "../component/AddContactForm";
import { useState } from "react";

const User = () => {
    const[openContactForm,setContactForm]=useState(false);

    return (
        <>
            <button className="btn" onClick={()=>{setContactForm(!openContactForm);}}
            >Add Contact</button>

            <div>{openContactForm && <AddContactForm/>}</div>
        </>
   )
};
   export default User;