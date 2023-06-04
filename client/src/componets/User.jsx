import React from "react";
import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
const User=()=>{
const [data, setData] = useState([]);
useEffect(() => {
  getData();
},[]);

const getData=()=>{
     fetch(`http://localhost:8000/getEmployee`)
       .then((res) => res.json())
       .then((res) => {
         setData(res);
       });
}
console.log(data)
    return (
      <>
        <h1>All The users are here</h1>
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
                  <button style={{ marginLeft: "10px" }}> <Icon name="paint brush" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
export default User;