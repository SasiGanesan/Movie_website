import mongoose from "mongoose";

const producerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    gender:{
        type:String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dob:{
        type:Date, 
        required:true
    },
    bio:{
        type:String
    }
},{
    timestamps:true
})

const  Producer=mongoose.model("Producer",producerSchema)

export default Producer
