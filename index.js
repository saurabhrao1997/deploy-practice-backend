const express = require("express");
const mongoose = require("mongoose")
const app = express()
  require("dotenv").config();
  const connectwithmongo = require("./MongoDB/Mongo")
const cors = require("cors");
 /// medleware
//  var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000

const registerSchema = mongoose.Schema({
  email:String,
  name:String,
  lname:String,
  password:String,
  confirmPassword:String,
  age:Number
})

const Register =  mongoose.model("register",registerSchema)


app.post("/register",(req,res)=>{
  console.log("req",req.body)

  try {
    let  newRegister = new Register({
      ...req.body
    }) 
    newRegister.save();
    res.status(200).json(newRegister)
    
  } catch (error) {
    res.status(400).json("some thing went wrong",error)
  }



    // res.send("ldskslhkldk klsdkglk kdslkhlk llskhlk")
})
connectwithmongo()
app.listen(port,()=>{
   console.log(`server is running port no ${port}`)
})