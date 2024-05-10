import React from 'react'
import MovieList from '../components/MovieList';
import images from '../assets/images.jpg'
import Movies from '../components/Movies'
import SearchBox from '../components/SearchBox'

const HomeScreen = () => {
  return (
   <>
   {/* <img src={images} alt='bgImage' className='fixed w-full -z-10 h-full'/>     */}
   {/* <MovieForm className = 'bg-blue-400'/> */}
   <div>
   {/* <img src={images} alt='bgImage' className='fixed w-full -z-10 h-full'/> */}
    <Movies/>
    <MovieList/>
   </div>
   </>
  )
}

export default HomeScreen