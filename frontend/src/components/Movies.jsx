import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slices/moviesApiSlice';
import SearchBox from './SearchBox';

const Movie = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = movies; // Use 'movies' directly as 'Title' may not be the correct property

  const [searchQuery, setSearchQuery] = useState('');

  const searchMovie = (query) => {
    setSearchQuery(query);
  };

  let filteredMovie = data;
  if (searchQuery) {
    filteredMovie = data.filter(movie => movie.Title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>No data found.</h1>;

  return (
    <div className='py-2 flex flex-col items-center'>
      <SearchBox searchMovie={searchMovie} />
      <ul className='inline-flex flex-row space-x-10 p-6 bg-slate-300 bg-gradient-to-r from-white'>
        {filteredMovie.length > 0 ? filteredMovie.map(movie => (
          <li key={movie._id} className='p-6 bg-slate-400 font-sans font-bold bg-gradient-to-r from-yellow-400'>
            <h3 className='text-yellow-400 bg-black'>{movie.name || movie.Title}</h3>
            <img src={movie.poster} alt={movie.name || movie.Title} />
            <p>Year of Release: {movie.yearOfRelease || movie.Year}</p>
            <p>Producer: {movie.producer?.name}</p>
            <p>Actors:</p>
            <ul>
              {movie.actors &&
                movie.actors.map(actor => (
                  <li key={actor._id}>{actor.name}</li>
                ))}
            </ul>
          </li>
        )) : <li className='py-2 flex flex-col items-center'>No movies found.</li>}
      </ul>
    </div>
  );
};

export default Movie;
