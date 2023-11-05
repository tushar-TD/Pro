import React, { useState } from 'react';
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <header className='fixed shadow-md w-full h-17 px-2 md:px-4 z-50 bg-white' > {/* Properly format className with md: for responsive styles */}
      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
          <div className='h-16'>
            <img src={logo} className='h-full' alt="Logo" /> {/* Add alt attribute for accessibility */}
          </div>
        </Link>

        <div className='flex items-center gap-5 md:gap-7'>
          <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className='text-2xl bg-text-600 relative'><BsFillCartFill /></div>

          <div className='text-2xl bg-text-600' onClick={handleShowMenu}>
            <div className='border-2 border-solid border-slate-600 p-2 rounded-full cursor-pointer'>
              <FaUserAlt />
            </div>
          </div>
          {showMenu && (
            <div className='absolute-right-2 bg-white py-2 px-2 shadow drop-shadow-md flex-col'>
              <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer'>New Product</Link>
              <Link to={"login"} className='whitespace-nowrap cursor-pointer'>Login</Link>
            </div>
          )}

        </div>
      </div>
    </header >
  );
}

export default Header;
