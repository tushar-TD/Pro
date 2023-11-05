import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Menu from './pages/Menu';
import About from './pages/Menu';
import Contact from './pages/Menu';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import Signup from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='menu' element={<Menu />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='newproduct' element={<NewProduct />} />
      <Route path='signup' element={<Signup />} />
    </Route>



  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

