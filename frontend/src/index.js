import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,createRoutesFromElements,createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import store from './store.js'
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen.jsx'
import MovieList from './components/MovieList.jsx';
// import RegisterScreen from './screens//RegisterScreen.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = '/' element ={<App/>}>
    <Route index={true} path="/" element={<HomeScreen />}/>
    {/* <Route path="/login" element={<LoginScreen />} /> */}
    <Route path='/movieList' element = {<MovieList/>}/>
  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

//provider used for it can access app 
