import React, { useState } from "react";
import {  Form, Label,  } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import "./adduser.css"
const AddUser = () => {
     const [name, setName] = useState("");
     //const [Job, setJob] = useState("");
     const [phone,setPhone] = useState("");
     const [email, setEmail] = useState("");
     const [address, setAddress] = useState("");
     const navigate = useNavigate();
 const handleNavigate = () => {
   navigate("/user");
 };
     const add = (name,  phone, email, address) => {

        // if(name ==="" || Job==="" || email){
        //     alert("fiil all the field")
        // }
        const data = {
          name,
         
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
              <Label pointing="below">Full name</Label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
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
          </Form>

          <button
            className="btn"
            type="submit"
            onClick={() => {
              add(name, phone, email, address);
            }}
          >
            Add User
          </button>
          <Segment inverted color="white">
            <Button
              inverted
              onClick={() => {
                handleNavigate();
              }}
            >
              Go to users
            </Button>
          </Segment>
        </div>
      </div>
    </>
  );
};
export default AddUser;
