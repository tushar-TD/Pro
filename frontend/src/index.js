import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewProduct from './Pages/NewProduct'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='newproduct' element={<NewProduct />} />
      <Route path='signup' element={<Signup />} />
    </Route >
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
