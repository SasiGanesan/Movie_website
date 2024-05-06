import React from 'react'
import MovieList from '../components/MovieList'
import MovieForm from '../components/MovieForm'

const HomeScreen = () => {
  return (
   <>
   <MovieForm/>
   <div className='bg-white mb-20'>
    <MovieList/>
   </div>
   </>
  )
}

export default HomeScreen