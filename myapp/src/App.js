
import React, { useState } from 'react';

import StateDropdownForm from './Components/StateDropdownForm';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'

function App(props) {
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
