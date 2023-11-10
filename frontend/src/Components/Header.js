import React from 'react';
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      <div className='flex items-center h-full justify-between'>
        <Link to=""><div className='h-12'><img src={logo} alt="Logo" className='h-full' /></div></Link>
        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="menu">Menu</Link>
            <Link to="contact">Contact</Link>
          </nav>
          <div className='text-2xl top-0 right-0 relative w-10 h-10 rounded-full overflow-hidden drop-shadow text-slate-400'>
            {userData.profilepic ? <img src={userData.profilepic} alt="User" className='h-full w-full' /> : <BsFillCartFill />}
            <div className='absolute text-white bg-white-500 h-4 text-xs text-center w-4 p-0'>0</div>
          </div>
          <div className='text-2xl text-slate-600' onClick={handleShowMenu}>
            <div className='border-2 border-solid rounded-full p-2 border-slate-400 cursor-pointer'><BiSolidUser /></div>
            {showMenu && (
              <div className='absolute right-0 bg-white py-2 px-2 drop-shadow-sm'>
                {userData.profilepic ? <p className='cursor-pointer'>Logout</p> : <Link to="login" className='whitespace-nowrap cursor-pointer'>Login</Link>}
                <br /> {/* Added line break for better readability */}
                <Link to="newproduct" className='whitespace-nowrap cursor-pointer'>New Product</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
