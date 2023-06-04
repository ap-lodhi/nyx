import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import { Form, Label } from "semantic-ui-react";

const UpdateUser=()=>{
     const [name, setName] = useState("");
     const [phone, setPhone] = useState("");
     const [email, setEmail] = useState("");
     const [address, setAddress] = useState("");
      const navigate = useNavigate();
    const{id} = useParams()
    console.log(id)

    const handleUpdate=(name,  phone, email, address)=>{
 const data = {
   name,
  phone,
   email,
   address,
 };
 fetch(`http://localhost:8000/update/${id}`, {
   method: "PATCH",
   body: JSON.stringify(data),
   headers: {
     "content-Type": "application/json",
   },
 })
   .then((res) => res.json())
   .then((res) => {
     if (res.responce == "error") {
       alert(res.message);
     } else {
       alert(res.message);
     }
   });
    }
     const handleNavigate = () => {
       navigate("/user");
     };
    return (
      <>
        <div className="adduser">
          <div>
            <h3>update user Details </h3>
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
                handleUpdate(name, phone, email, address);
              }}
            >
              UPDATE
            </button>
            <Segment inverted color="white">
              <Button inverted onClick={()=>{handleNavigate()}}>Go Back</Button>
            </Segment>
          </div>
        </div>
      </>
    );
}

export default UpdateUser;