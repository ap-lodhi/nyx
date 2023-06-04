import React, { useState } from "react";
import { Button, Form, Label, Divider, Segment } from "semantic-ui-react";
import "./adduser.css"
const AddUser = () => {
     const [name, setName] = useState("");
     const [JobTitle, setJobTitle] = useState("");
     const [phone,setPhone] = useState("");
     const [email, setEmail] = useState("");
     const [address, setAddress] = useState("");

     const add = (name, JobTitle, phone, email, address) => {

        if(name ==="" || JobTitle==="" || email){
            alert("fiil all the field")
        }
        const data = {
          name,
          JobTitle,
          phone,
          email,
          address,
        };
      
    fetch("http://localhost:8000/addEmployee", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.responce === "error") {
          alert(res.message);
        } else {
          alert(res.message);
        }
      })
      .catch((err) => console.log(err));

        
     };

  return (
    <>
      <div className="adduser">
        <div>
          <h3>Enter user Details </h3>
          <Form>
            <Form.Field>
              <Label pointing>Full name</Label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Divider />
            <br />

            <Form.Field>
              <Label pointing="below">Job Title</Label>
              <input
                type="text"
                placeholder="Job Title"
                value={JobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Field>
            <Divider />
            <br />
            <Form.Field>
              <Label pointing="below">Phone No.</Label>
              <input
                type="text"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Field>
            <Divider />
            <br />
            <Form.Field>
              <Label pointing="below">Email</Label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Field>
            <Divider />
            <br />
            <Form.Field>
              <Label pointing="below">Address</Label>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Field>
            <Divider />
            
          </Form>

         
            <button className="btn"
           type="submit"
             
              onClick={() => {
                add(name, JobTitle, phone, email, address);
              }}
            >
              Add User
            </button>
           
         
          <br />
          <br />
        </div>
       
      </div>
    </>
  );
};
export default AddUser;
