const express = require("express");
const connectDb =require("./DataBase/db");
const { addEmployee, getEmployee, updateEmployee, deleteEmplyoee, } = require("./controller/employee");






const PORT = process.env.PORT || 8000 ;
const app = express()
app.use(express.json());



// home route
app.get('/', (req,res)=>{
    res.send("EMPLOYEE DASHBOARD")

})


// for adding the details of employees
app.post("/addEmployee", addEmployee)

// for geting the details from backend 
app.get("/getEmployee", getEmployee)



// for update the info of employee
app.patch("/update/:id", updateEmployee)

//for detete the employee
app.delete("/delete/:id", deleteEmplyoee)




connectDb().then(()=>{

    app.listen(PORT, ()=>{
    
        console.log(`listening on port ${PORT}`)
    })
})
























