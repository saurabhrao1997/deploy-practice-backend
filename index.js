const express = require("express");
const app = express()
  require("dotenv").config();
const cors = require("cors")

const port = 3000

app.get("/",(req,res)=>{
    res.send("ldskslhkldk klsdkglk kdslkhlk llskhlk")
})

app.listen(port,()=>{
   console.log(`server is running port no ${port}`)
})