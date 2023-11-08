import React, { useState } from 'react';
import logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import logoutRedux from "../redux/userSlice"


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user)
  console.log(userData)
  const dispatch = useDispatch()
  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logout successfully")
  }
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

          <div className='text-2xl bg-text-600 w-8 h-7' onClick={handleShowMenu}>
            <div className='border-2 border-solid w-8 h-10 border-slate-600 p-2 rounded-full cursor-pointer'>
              {userData.image ? <img src={userData.image} className='w-10 h-10 rounded-full drop-shadow-sm' /> : < FaUserAlt />}
            </div>
          </div>
          {showMenu && (
            <div className='absolute-right-2  bg-white py-2 px-2 shadow drop-shadow-md flex-col'>
              <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer'>New Product</Link>
              {
                userData.image ? <p>Logiut</p> : <Link to={"login"} className='px-2 cursor-pointer text-white bg-blue-300 whitespace-nowrap ' onClick={handleLogout}>Logout</Link>
              }

            </div>
          )}

        </div>
      </div>
    </header >
  );
}

export default Header;
