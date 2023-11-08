import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Header from './Components/Header';

function App() {
  // If you don't need 'useState' or 'useDispatch', you can remove the imports

  return (
    <>
      <Toaster />
      <Router>
        <div>
          <Header />
          <main className='pt-16 bg-slate-100 min-w-[calc(100vh)]'>
            <Outlet /> {/* Renders child routes */}
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
