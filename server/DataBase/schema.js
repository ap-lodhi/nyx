const mongoose = require("mongoose")


const employeeSchema = mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    fullName: String,
    jobTitle: String,
    phoneNumber: Number,
    email: String,
    addresses: String,
   
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employees", employeeSchema)
module.exports=Employee;