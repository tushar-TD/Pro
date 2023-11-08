import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Components/Header';
import StateDropdownForm from './Components/StateDropdownForm';

function App() {
  // If you don't need 'useState' or 'useDispatch', you can remove the imports

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-w-[calc(100vh)]'>
          <Outlet /> {/* Renders child routes */}
        </main>
      </div>
    </>
  );
}

export default App;
