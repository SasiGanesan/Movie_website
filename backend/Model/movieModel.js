import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    yearOfRelease:{
        type:Number,
        required:true
    },
    actors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor',
    }],
    producer : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Producer',
        required: true
    },
    poster:{
        type: String,
        required: true
    }
},{
    timestamps:true,
})

const  Movie = mongoose.model("Movie",movieSchema)

export default Movie
