import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [name, setName] = useState('');
  const [yearOfRelease, setYearOfRelease] = useState('');
  const [actors, setActors] = useState([]);
  const [producer, setProducer] = useState('');
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(); 
      formData.append('name', name);
      formData.append('yearOfRelease', yearOfRelease);
      formData.append('actors', actors.join(',')); // Join array of ObjectIds with commas
      formData.append('producer', producer);
      formData.append('poster', poster);

      await axios.post('http://localhost:4000/api/Movies/movie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Movie added successfully!');
      // Reset form fields
      setName('');
      setYearOfRelease('');
      setActors([]);
      setProducer('');
      setPoster(null);
    } catch (error) {
      setError('Failed to add movie. Please try again later.');
    }
  };

  return (
    <div className='flex flex-col items-center pt-10'>
   
      <form onSubmit={handleSubmit} className='h-104 w-80 p-2 bg-black  flex flex-col bg-gradient-to-r from-green-200 to-blue-300 focus:from-pink-300 focus:to-yellow-400v rounded-lg'>
        <label htmlFor="name" className='flex-col inline '> Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} className='block outline-none' />
        <br/>
        <label htmlFor='yearOfRelease' className='flex-col inline-block '>Year of Release:</label>
        <input type="text" value={yearOfRelease} onChange={(event) => setYearOfRelease(event.target.value)} className='block outline-none rounded-lg' />
        <br/>
        <label htmlFor='actors' className='flex-col inline-block '>Actors:</label>
        <textarea value={actors.join(',')} onChange={(event) => setActors(event.target.value.split(','))} className='block outline-none rounded-lg' rows="4" />
        <br/>
        <label htmlFor='producer' className='flex-col inline-block '>Producer: </label>
        <input type="text" value={producer} onChange={(event) => setProducer(event.target.value)} className='block outline-none rounded-lg' />
        <br/>
        <label htmlFor='poster' className='flex-col inline-block '>Poster:</label>
        <input type='file' id='poster' onChange={(event) => setPoster(event.target.files[0])} className='block outline-none rounded-lg' />
        <br/>
        <button type="submit" className='p-6 bg-gradient-to-r hover:from-slate-300 hover:to-yellow-200 rounded-full py-2 px-6 '>Add Movie</button>
      </form>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default MovieForm;
