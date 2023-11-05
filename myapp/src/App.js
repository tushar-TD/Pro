
import React, { useState } from 'react';

import StateDropdownForm from './Components/StateDropdownForm';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';



function App(props) {
  return (
    <div >
      <Header />
      <main className='pt-16 bg-slate-100 min-w-[calc(100vh)]'><Outlet /></main>
    </div >
  );

}

export default App;
