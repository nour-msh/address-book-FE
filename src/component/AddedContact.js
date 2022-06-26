import React from 'react';
import axios from "axios";

const AddedContact = () => {
// e.preventDefault();
const data = {};
axios({

    method: "get",
      url: "http://localhost:5000/api/contact",
      data: data,
})
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
    return(
        <>
            <div>
                <button className='btn' onClick={AddedContact} >Contacts</button>
            </div>

        </>
    )
}
 

export default AddedContact