
const Employee = require("../DataBase/schema")

// For Addeing the  Emplyoees
async function addEmployee(req, res) {
    let {
        fullName,
        jobTitle,
        phoneNumber,
        email,
        addresses,
       
    } = req.body

    const employee = await Employee.findOne({ email })
    if (employee) {
        return res.status(404).send({
            response: 'error',
            message: 'Employe Already in Records'

        })
    } else {
        await Employee.create({
            fullName,
            jobTitle,
            phoneNumber,
            email,
            addresses,
           
        })

        return res.status(200).send({
            response: "Success",
            message: "Employee Added"
        })
    }
}





// for getting All  records from db 
async function getEmployee(req, res) {
    const data = await Employee.find()
    console.log(data)

    return res.status(200).send(data)

}



//for update  employee information 


async function updateEmployee(req, res) {
    const { id } = req.params;
    let { fullName,
        jobTitle,
        phoneNumber,
        email,
        addresses,
        } = req.body

    const updated = await Employee.findByIdAndUpdate
        (id, {
            fullName: fullName,
            jobTitle: jobTitle,
            phoneNumber: phoneNumber,
            email: email,
            addresses: addresses,
            
        })
    if (!updated) {
        res.status(404).send({
            response: 'err',
            message: 'Emplyoee not found'
        })
    } else {
        res.status(200).send({
            response: 'success',
            message: 'Emplyee Details updated Successfully'
        })
    }
}


// Delete Emplyoee
async function deleteEmplyoee(req, res) {
    const { id } = req.params;
    console.log(id);
    const deleted = await Employee.deleteOne({ _id: id })
    if (deleted) {
        res.status(200).send({
            response: 'success',
            message: 'Emplyoee Deleted Successfully'
        })
    } else {
        res.status(404).send({
            response: 'error',
            message: 'Employee not found'
        })
    }
}


module.exports = {
    addEmployee,
    getEmployee,
   
    updateEmployee,
    deleteEmplyoee
}