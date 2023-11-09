import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated import statements
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import Signup from './pages/Signup';
import { store } from './redux/index';
import { Provider } from 'react-redux';

const root = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
