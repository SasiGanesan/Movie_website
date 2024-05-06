import React from "react";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
// import MovieList from "./components/MovieList";

function App() {
  return (
    <>
    <div>
      <Header/>
      <main>
      <Outlet/>
      </main>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
