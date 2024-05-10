import React from 'react'
import { FaSearch } from "react-icons/fa";
// import Movie from './Movies'

const SearchBox = ({searchMovie}) => {
  const submitHandler = (e) => {
    e.preventDefault();
  }

 return (
    <>
    <div className='py-2 flex flex-col items-center pt-16 '>
      <form >
        <i className='inline-block pt-10 '><FaSearch /></i>
        <input type='text' placeholder='Search Movie' onChange={e => searchMovie(e.target.value)} className='inline-block outline-none pl-2 p-2 bg-neutral-100 rounded-lg'/>
        <button type='submit' onClick={submitHandler}>Go</button>
      </form>
    </div>
    </>
 )
}

export default SearchBox