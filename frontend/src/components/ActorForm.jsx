import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const ActorForm = () => {

    const [name,setName]=useState('')
    const [gender,setGender]=useState('')
    const [dob,setDob]=useState('')
    const [bio,setBio]=useState('')
    const [error,setError]=useState('')

    const handleLogin =async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/Actors/actor',{
                name,
                gender,
                dob,
                bio
            });
            console.log(res.data);
            setName('');
            setGender('');
            setDob('');
            setBio('');
        } catch (error) {
            setError(error.response.data.message);
        }
    }


  return (
    <>
   <div className='py-2 flex flex-col items-center pt-16 '>
        <form className='h-120 w-80 p-4 bg-sky-100 bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500v flex flex-col items-center' onClick={handleLogin}>
        <div className=' px-8 flex-row content-around p-2' >
            <label htmlFor="name" className='flex-col inline'>Name </label>
            <input type='text'  name='name' className='block outline-none' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="gender" className='flex-col inline'>Gender</label>
            <input type='option' name='gender' className='block outline-none' value={gender} onChange={(e)=>setGender(e.target.value)}/>
            <label htmlFor="dob" className='flex-col inline'>DOB</label>
            <input type='text' name='dob' className='block outline-none' value={dob} onChange={(e)=>setDob(e.target.value)}/>
            <label htmlFor="bio" className='flex-col inline'>Bio</label>
            <input type='text' name='bio' className='block outline-none' value={bio} onChange={(e)=>setBio(e.target.value)}/>
          <div className='pt-2'  >
          <button type='submit' className='p-2 text-black bg-gradient-to-r hover:from-slate-300 hover:to-yellow-200 rounded-full py-2 px-6'>ADD</button>
          </div>
        </div>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
    </>
  )
}

export default ActorForm