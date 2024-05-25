
const mongoose = require("mongoose")

const connectwithmongo = ()=>{
    mongoose.connect("mongodb+srv://saurabhwarhade28:p8CHTdbhssdAjevJ@merndevelopmentproject.abihkuk.mongodb.net/?retryWrites=true&w=majority&appName=MERNdevelopmentProject").then(()=>{
        console.log("connection done with mongo")
    }).catch((err)=>{
        console.log("error",err)
    })

}

module.exports = connectwithmongo