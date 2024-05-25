
const mongoose = require("mongoose")
require("dotenv").config();
const connectwithmongo = ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("connection done with mongo")
    }).catch((err)=>{
        console.log("error",err)
    })

}

module.exports = connectwithmongo