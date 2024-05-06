// components/MovieForm.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  createMovie from '../slices/movieApiSlice';

const MovieForm = () => {
  const dispatch = useDispatch();
  const producers = useSelector(state => state.producers);
  const actors = useSelector(state => state.actors);
  const [formData, setFormData] = useState({
    name: '',
    yearOfRelease: '',
    plot: '',
    poster: '',
    producer: '',
    actors: []
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createMovie(formData));
    setFormData({
      name: '',
      yearOfRelease: '',
      plot: '',
      poster: '',
      producer: '',
      actors: []
    });
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Year of Release:
          <input type="number" name="yearOfRelease" value={formData.yearOfRelease} onChange={handleChange} />
        </label>
        <label>
          Plot:
          <textarea name="plot" value={formData.plot} onChange={handleChange} />
        </label>
        <label>
          Poster:
          <input type="text" name="poster" value={formData.poster} onChange={handleChange} />
        </label>
        <label>
          Producer:
          <select name="producer" value={formData.producer} onChange={handleChange}>
            <option value="">Select Producer</option>
            {producers.map(producer => (
              <option key={producer._id} value={producer._id}>{producer.name}</option>
            ))}
          </select>
        </label>
        <label>
          Actors:
          <select name="actors" multiple value={formData.actors} onChange={handleChange}>
            {actors.map(actor => (
              <option key={actor._id} value={actor._id}>{actor.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
