const mongoose =require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const EmployeeModel=mongoose.model("employees",EmployeeSchema) //creates table inside schema
module.exports=EmployeeModel;