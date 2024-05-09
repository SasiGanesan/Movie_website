import React from 'react'
import MovieList from '../components/MovieList';
import {Link} from 'react-router-dom';
// import MovieForm from '../components/MovieForm'

const HomeScreen = () => {
  return (
   <>
   {/* <MovieForm className = 'bg-blue-400'/> */}
   <div className='bg-white mb-20'>
    <MovieList/>
   </div>
   <div className='flex flex-col items-center'>
   <Link to='/movieForm' className='inline-block place-items-center bg-slate-100 bg-gradient-to-l from-slate-500 '>Add Movie </Link>
   </div>
   </>
  )
}

export default HomeScreen