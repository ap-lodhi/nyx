import React from "react";
import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const User=()=>{
const [data, setData] = useState([]);
const navigate = useNavigate();
useEffect(() => {
  getData();
},[]);
// get user 
const getData=()=>{
     fetch(`http://localhost:8000/getEmployee`)
       .then((res) => res.json())
       .then((res) => {
         setData(res);
       });
}
// delete user 

 const deleteUser = (id) => {
   fetch(`http://localhost:8000/delete/${id}`, {
     method: "DELETE",
   })
     .then((res) => res.json())
     .then((res) => {
       if (res.responce == "error") {
         alert(res.message);
       } else {
         alert(res.message);
       }
       getData();
     });
 };

 //update user 
 const updateUser = (id) => {
   navigate(`/update/${id}`);
   getData();
 };

    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <h1>All The Users </h1>
          <table
            style={{
              width: "80%",
              margin: "20px auto",
              borderCollapse: "collapse",
              border: "1px solid green",
            }}
          >
            <thead style={{ border: "1px solid red" }}>
              <tr>
                <th>name</th>

                <th>Phone No.</th>
                <th>Email</th>
                <th>Addres</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((el) => (
                <tr
                  key={el._id}
                  style={{ border: "1px solid red", textAlign: "center" }}
                >
                  <td style={{ border: "1px solid red", textAlign: "center" }}>
                    {el.name}
                  </td>

                  <td style={{ border: "1px solid red", textAlign: "center" }}>
                    {el.phone}
                  </td>
                  <td style={{ border: "1px solid red", textAlign: "center" }}>
                    {el.email}
                  </td>
                  <td style={{ border: "1px solid red", textAlign: "center" }}>
                    {el.address}
                  </td>
                  <td>
                    <button onClick={() => updateUser(el._id)}>
                      <i class="icon paint brush"></i>
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteUser(el._id)}
                    >
                      <i class="icon close" color="red"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}
export default User;