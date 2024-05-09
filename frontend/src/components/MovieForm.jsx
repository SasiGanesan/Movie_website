import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [name, setName] = useState('');
  const [yearOfRelease, setYearOfRelease] = useState('');
  const [actors, setActors] = useState('');
  const [producer, setProducer] = useState('');
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(); 
      formData.append('name', name);
      formData.append('yearOfRelease', yearOfRelease);
      formData.append('actors', actors);
      formData.append('producer', producer);
      formData.append('poster', poster);

      const response = await axios.post('http://localhost:4000/api/Movies/movie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      });
      console.log(response.data);
      // Reset form fields
      setName('');
      setYearOfRelease('');
      setActors('');
      setProducer('');
      setPoster(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className='flex flex-col items-center pt-10'>
   
      <form onSubmit={handleSubmit} className='h-104 w-80 p-2 bg-black inline-block flex flex-col bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500'>
        <label htmlFor="name" className='flex-col inline text-yellow-400'> Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} className='block outline-none' />
        <br/>
        <label htmlFor='yearOfRelease' className='flex-col inline-block text-yellow-400'>Year of Release:</label>
          <input type="text" value={yearOfRelease} onChange={(event) => setYearOfRelease(event.target.value)} className='block outline-none' />
          <br/>
        <label htmlFor='actors' className='flex-col inline-block text-yellow-400'>Actors:</label>
          <input type="text" value={actors} onChange={(event) => setActors(event.target.value)} className='block outline-none'  />
          <br/>
        <label htmlFor='producer' className='flex-col inline-block text-yellow-400'>Producer: </label>
          <input type="text" value={producer} onChange={(event) => setProducer(event.target.value)} className='block outline-none' />
          <br/>
          <label htmlFor='poster' className='flex-col inline-block text-yellow-400'>Poster:</label>
       <input type='file' id='poster' onChange={(event) => setPoster(event.target.files[0])} className='block outline-none' />
        <br/>
        <button type="submit" className='p-6 text-yellow-400'>Add Movie</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default MovieForm;