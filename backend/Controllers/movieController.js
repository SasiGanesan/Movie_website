import Movie from "../Model/movieModel";

const createMovie = async(req,res)=>{
    try {
        const {name, yearOfRelease,actors,producer,poster} = req.body;

        const existingMovie = await Movie.findOne({name})
        if(existingMovie){
            return res.status(404).json({message: "This movie already existed"});    
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
        res.status(500).json({ message: 'Internal Server Error' });
        // console.log(error)
    }
}

const getAllMovies = async(req,res)=>{
    try {
        const movie = await Movie.find({})
        if(movie){
            return res.status(200).json(movie)
        }else{
            return res.status(400).json({message: "can't retrieve movies"})
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        // console.log(error)
    }
}

const updateMovie = async(req,res)=>{
    try {
        const {movie_id}=req.params.id;
        const { name, yearOfRelease, actors, producer, poster } = req.body;
        const movie = await Movie.findByIdAndUpdate(
            movie_id,
            { name, yearOfRelease, actors, producer, poster },
        );
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json({ message: 'Movie updated successfully', movie });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        // console.log(error)
    }
}


export {createMovie,getAllMovies,updateMovie}
