// components/MovieList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  getAllMovies from '../slices/movieApiSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <h3>{movie.name}</h3>
            <p>Year of Release: {movie.yearOfRelease}</p>
            <p>Producer: {movie.producer.name}</p>
            <p>Actors:</p>
            <ul>
              {movie.actors.map(actor => (
                <li key={actor._id}>{actor.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;