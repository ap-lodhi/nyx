const mongoose = require("mongoose")


const employeeSchema = mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    name: String,
    phone: Number,
    email: String,
    address: String,
   
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employees", employeeSchema)
module.exports=Employee;