import Movie from "../Model/movieModel.js";
import multer from 'multer';
import path from 'path'

//multer middleware to save uploaded files to the ./upload/images directory. 
//The filenames are constructed based on the original filename, a timestamp, 
//and the original file extension
//diskStorage = localStorage
//cb-callback function
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage:storage,
    limits:{
        fileSize:10*1024*1024 //10MB
    }
});

const createMovie = async (req, res) => {
    upload.single('poster')(req,res,async(err)=>{
    try {
        // Check if an error occurred during file upload.
        if (req.file instanceof multer.MulterError) {
            return res.status(400).json({ message: req.file.message });
        } else if (req.file === undefined) {
            return res.status(400).json({ message: "Please upload an image" });
        }

        const { name, yearOfRelease, actors, producer } = req.body;
        const poster = req.file.filename;

        const existingMovie = await Movie.findOne({ name });
        if (existingMovie) {
            return res.status(400).json({ message: "This movie already exists" });
        }

        // Create Movie
        const movie = await Movie.create({
            name,
            yearOfRelease,
            actors,
            producer,
            poster: poster // Assuming your Movie model has a 'poster' field
        });

        // Check if movie is created successfully
        if (movie) {
            return res.status(201).json({
                user_id: movie.user_id, // Make sure 'user_id' is set properly in the Movie model
                name: movie.name,
                yearOfRelease: movie.yearOfRelease,
                actors: movie.actors,
                producer: movie.producer,
                poster: movie.poster
            });
        } else {
            return res.status(500).json({ message: "Failed to create movie" });
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})
}


const getAllMovies = async(req,res)=>{
    try {
        const movies = await Movie.find({})
        .populate("actors",'name')
        .populate("producer",'name')
        if(movies){
            return res.status(200).json(movies)
        }else{
            return res.status(400).json({message: "movies not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateMovie = async(req,res)=>{
    try {
        const movie_id = req.params.id;
        console.log(movie_id)
        const { name, yearOfRelease, actors, producer, poster } = req.body;
        console.log(name, yearOfRelease, actors, producer, poster )
        const updatedMovie = await Movie.findByIdAndUpdate(
            movie_id,
            { name, yearOfRelease, actors, producer, poster },
            { new: true } // To return the updated movie
        );
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }else{
            return res.status(200).json({ message: 'Movie updated successfully', updatedMovie });
        }    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' }); 
    }
}

const getMovieById =async(req,res)=>{
    try {
        const movie=await Movie.findById(req.params.id)
        if(movie){       
          res.status(200).json(movie);
        }else{
            res.status(404).json({
                message: "Movie not found"
            })
        }
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Invalid Movie Id' });
    } 
}

export {createMovie,getAllMovies,updateMovie,getMovieById}
