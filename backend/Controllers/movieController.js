import Movie from "../Model/movieModel.js";

const createMovie = async(req,res)=>{
    try {
        const {name,yearOfRelease,actors,producer,poster} = req.body;

        const existingMovie = await Movie.findOne({name})
        if(existingMovie){
            return res.status(400).json({message: "This movie already exists"});    
        }
        const user_id = req.user_id
        //create Movie
        const movie = await Movie.create({
            name, yearOfRelease,actors,producer,poster
        })
        if(movie){
            res.status(201).json({
                user_id:movie.user_id,
                name:movie.name,
                yearOfRelease:movie.yearOfRelease,
                actors:movie.actors,
                producer:movie.producer,
                poster:movie.producer
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
        
    }
}

const getAllMovies = async(req,res)=>{
    try {
        const movies = await Movie.find({})
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
        // const { name, yearOfRelease, actors, producer, poster } = req.body;
        const { yearOfRelease } = req.body;
        // console.log(name, yearOfRelease, actors, producer, poster)
        const updatedMovie = await Movie.findByIdAndUpdate(
            movie_id,
            { yearOfRelease: yearOfRelease },// Only update yearOfRelease
            // { name:name} ,
            // {actors:actors},
            // {producer:producer},
            // {poster:poster},
            { new: true } // To return the updated movie
        );
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        
        return res.status(200).json({ message: 'Movie updated successfully', updatedMovie });
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
