const mongoose=require("mongoose");

const db_connect= async()=>{
    try{
        const result=await mongoose.connect(process.env.DB_URI)
        console.log("data base is connected")
    } catch(error){

    }
}


module.exports = db_connect;