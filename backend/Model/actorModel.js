import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
    name: { 
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum : ['Male','Female','Other'],
        required:true
    },
    dob:{
        type:Date,
        required: true
    },
    bio:{
        type:String
    }
},{
    timestamps:true,
})

const  Actor=mongoose.model("Actor",actorSchema)

export default Actor

