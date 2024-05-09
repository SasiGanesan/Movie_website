// components/MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMovie = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/Movies');
      console.log(response)
      const promises = response.data.map(movie =>
        axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=33c0a7ea`)
      );
      console.log(promises)
      const movieResponses = await Promise.all(promises);
      console.log(movieResponses)
      const combinedMovies = response.data.map((movie, index) => ({
        ...movie,
        ...movieResponses[index].data
      }));
      setMovies(combinedMovies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllMovie();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <>
    <h2>Movie List</h2>
      <div >
        <ul className='inline-flex flex-row space-x-10 p-6 bg-black bg-gradient-to-r from-white' >
          {movies.map(movie => (
            <li key={movie._id} className='p-6 bg-yellow-400 font-sans font-bold bg-gradient-to-r from-blue-500'>
              <h3 className='text-yellow-400 bg-black'>{movie.name || movie.Title}</h3>
              <img src={movie.poster} alt={movie.name || movie.Title}/>
              <p>Year of Release: {movie.yearOfRelease || movie.Year}</p>
              <p>Producer: {movie.producer?.name}</p>
              <p>Actors:</p>
              <ul>
                {movie.actors &&
                  movie.actors.map(actor => (
                    <li key={actor._id} >{actor.name}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;