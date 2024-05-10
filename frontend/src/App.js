import React from "react";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import images from './assets/images.jpg'
// import MovieList from "./components/MovieList";

function App() {
  
  return (
    <>
<img src={images} alt='bgImage' className='fixed w-full -z-10 h-full'/>    
      <Header/>
      <main>
      <Outlet/>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
