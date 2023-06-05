


import { Route, Routes } from "react-router-dom";
import AddUser from './componets/AddUser';
import User from './componets/User';
import UpdateUser from "./componets/UpdateUser";



function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<AddUser />}></Route>

        <Route path="/user" element={<User />}></Route>

        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    
    </>
  );
}

export default App;
